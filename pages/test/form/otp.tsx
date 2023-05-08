import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { OtpDefault } from "../../../src/Share/Config/Otp/OtpDefault";

export default function Otp() {
  const [otp, SetOtp] = useState();

  return (
    <div>
      otp test :
      <OtpInput {...OtpDefault} numInputs={4} value={otp} onChange={SetOtp} />
    </div>
  );
}
