import { useMediaQuery } from "@/hooks";
import Navbar from "./Navbar";

const Home = () => {
  const isLg = useMediaQuery("lg");

  return (
    <div className="px-2 lg:px-8 w-full h-full">
      <Navbar />
      <div className="p-4 grid grid-cols-9 lg:grid-cols-12">
        {isLg && <div className="col-span-2">Followings</div>}
        <div className="col-span-6">Posts</div>
        <div className="col-span-4">Extra</div>
      </div>
    </div>
  );
};

export default Home;
