import Habilities from "@/container/habiltities/Habilities";
import HomePage from "@/container/home/Home";
import SampleProjectView from "@/container/sample-projects/sample-projects";

export default function Home() {
  return (
    <>
      <HomePage />
      <Habilities />
      <SampleProjectView />
    </>
  );
}
