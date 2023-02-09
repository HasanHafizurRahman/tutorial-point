import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Player from "../components/details/Player";
import Loading from "../components/Loading";
import VideoDescription from "../components/details/VideoDescription";
import RelatedVideoList from "../components/relatedVideo/RelatedVideoList";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { id, link, title, tags } = video || {};

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !video?.id)
    content = <div className="col-span-12">No Video Found!</div>;
  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-full w-full space-y-8">
          <Player link={link} title={title} />
          <VideoDescription video={video} />
        </div>
        <RelatedVideoList currentVideoId={id} tags={tags} />
      </div>
    );
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
