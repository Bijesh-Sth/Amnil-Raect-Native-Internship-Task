import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Thunks
export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
  await GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const userCredential = await auth().signInWithCredential(googleCredential);

  const { displayName, email, photoURL, uid } = userCredential.user;
  
  return {
    id: uid,
    name: displayName || '',
    email: email || '',
    image: photoURL || '',
  };
});

export const usernamePasswordSignIn = createAsyncThunk(
  'auth/usernamePasswordSignIn',
  async ({ username, password }: { username: string; password: string }) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return {
      id: data.id,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      image: data.image,
    };
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleSignIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Google Sign-In failed';
      })
      .addCase(usernamePasswordSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(usernamePasswordSignIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(usernamePasswordSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
