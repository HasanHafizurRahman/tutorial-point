import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRelatedVideo } from "./relatedVideosApi";

const initialState = {};

export const fetchRelatedVideo = createAsyncThunk(
  "relatedVideo/fetchRelatedVideo",
  async (id, tags) => {
    const relatedVideo = getRelatedVideo();
    return relatedVideo;
  }
);
