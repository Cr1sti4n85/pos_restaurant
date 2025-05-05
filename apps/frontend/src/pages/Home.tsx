import { FC } from "react";
import BottomNav from "../components/shared/BottomNav";

const Home: FC = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5.75rem)] overflow-hidden flex gap-3">
      {/*LEFT DIV */}
      <div className="flex-[3] bg-[#1a1a1a]"></div>
      {/*RIGHT DIV */}
      <div className="flex-[2] bg-[#121212]"></div>
      <BottomNav />
    </section>
  );
};
export default Home;
