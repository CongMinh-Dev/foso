import AreaBg from "@/components/myComp/areaBg/AreaBg";
import Banner from "./layout/Banner/Banner";
import Blog from "./layout/Blog/Blog";
import Header from "./layout/Header/Header";

export default function Home() {
  return (

    <main className="">
      <AreaBg top="2875px" left="90%" />
      <AreaBg top="528px" left="-339px" />
      <Header />
      <Banner />
      <Blog />
    </main>
  );
}
