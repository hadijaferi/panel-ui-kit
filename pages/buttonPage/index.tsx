import {ButtonContainer} from "@/containers/ButtonContainer";
import {ReactElement} from "react";

 const ButtonPage =()=>{
    return <ButtonContainer/>
}
export default ButtonPage
ButtonPage.getLayout = function getLayout(page: ReactElement) {
    return <div>{page}</div>;
};
