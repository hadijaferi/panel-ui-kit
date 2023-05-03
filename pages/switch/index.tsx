import {SwitchContainer} from "@/src/containers/SwitchContainer";
import {ReactElement} from "react";

 const SwitchPage =()=>{
    return <SwitchContainer/>
}
export default SwitchPage
SwitchPage.getLayout = function getLayout(page: ReactElement) {
    return <div>{page}</div>;
};
