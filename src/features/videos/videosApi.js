import axios from "../../utils/axios";

export const getVideos = async () => {
  const response = await axios.get("/video");
  return response.data;
};
