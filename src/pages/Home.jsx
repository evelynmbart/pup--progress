import Credentials from "../components/Credentials";
import Overview from "../components/Overview";
import Testimonial from "../components/Testimonial";
import WhyChapters from "../components/WhyChapters";
import WhyFreestyle from "../components/WhyFreestyle";
import "../css/Home.css";
export default function Home() {
  return (
    <>
      <Overview />
      <WhyChapters />
      <WhyFreestyle />
      <Testimonial />
      <Credentials />
    </>
  );
}
