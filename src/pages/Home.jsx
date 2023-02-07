import Pagination from "../components/Pagination";
import Tags from "../components/tags/Tags";
import VideoGrids from "../components/video-grid/VideoGrids";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoGrids />
      <Pagination />
    </div>
  );
};
export default Home;
