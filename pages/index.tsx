import {WelcomeContainer} from "@/src/containers/Welcome";
import {ReactElement} from "react";

const Home=()=> {
  return (
      <WelcomeContainer/>
  )
}
export default Home
Home.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};
