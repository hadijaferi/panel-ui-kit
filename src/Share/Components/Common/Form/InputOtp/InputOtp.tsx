import React, {Component} from "react";
import OtpInput, {OtpInputProps} from "react-otp-input";

type InputProps = OtpInputProps;
export default class InputOtp extends Component<InputProps> {
    render() {
        return (
            <OtpInput
                {...this.props}
                separator={<span className="m-x-4">-</span>}
                inputStyle={{
                    borderImage: "none !important",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "#cbcbcb",
                    width: "100%",
                    maxWidth: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    transition: "all 0.1s ease-in-out",
                }}
                focusStyle={{
                    boxShadow: "0 0 0 3px rgba(22,143,223,0.15)",
                    borderColor: "#168fdf",
                }}
                errorStyle={{
                    borderColor: "#c30052",
                }}
                disabledStyle={{
                    background: "#f9f9f9",
                }}
                containerStyle={{
                    direction: "ltr",
                    justifyContent: "center",
                }}
            />
        );
    }
}
