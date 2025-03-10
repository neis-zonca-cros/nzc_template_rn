import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import remoteConfigManager from '@managers/remoteConfigManager';

interface GeneralInitialState {
  currentRoute?: string;
  previousRoute?: string;
  remoteConfigValues: { [key: string]: string };
}

export const generalInitialState: GeneralInitialState = {
  currentRoute: '',
  previousRoute: '',
  remoteConfigValues: {},
};

export const fetchRemoteConfigValues = createAsyncThunk(
  'fetchRemoteConfigValues',
  async () => await remoteConfigManager.getAllRemoteConfigValues(),
);

const generalSlice = createSlice({
  name: 'general',
  initialState: generalInitialState,
  reducers: {
    initApp: () => undefined,
    setCurrentRoute: (state, action: PayloadAction<string | undefined>) => {
      state.previousRoute = state.currentRoute;
      state.currentRoute = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRemoteConfigValues.fulfilled, (state, action) => {
      state.remoteConfigValues = action.payload;
    });
  },
});

export const { initApp, setCurrentRoute } = generalSlice.actions;

export default generalSlice;
