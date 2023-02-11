import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";
import SingleVideo from "./SingleVideo";
import Loading from "../Loading";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideo({ dispatch, currentVideoId, tags }));
  }, [dispatch, currentVideoId, tags]);

  // logic for rendering
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No Video Found!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <SingleVideo key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
