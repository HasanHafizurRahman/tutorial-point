import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideo } from "./relatedVideosApi";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "'",
};

export const fetchRelatedVideo = createAsyncThunk(
  "relatedVideos/fetchRelatedVideo",
  async ({ id, tags }) => {
    const relatedVideos = getRelatedVideo({ id, tags });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
