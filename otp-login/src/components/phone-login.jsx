import { useState } from "react";
import OtpInput from "./otp-input";


const PhoneOtpForm = () => {

    const [phoneNumber , setPhoneNumber] = useState("");
    const [showotpInput , setshowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => { 
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => { 
        event.preventDefault();

        // phone validations

        const regex =/[^0-9]/g;
        if(phoneNumber.length<10 || phoneNumber.length>10|| regex.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }

        //call backend API
        //show otp field
        setshowOtpInput(true);
    };
    const onOtpSubmit = (otp) => { 
        console.log("Login Successfull !",otp)
    }
  return <div>
    { !showotpInput? <form onSubmit={handlePhoneSubmit}>
            <input 
                type="text"  
                value={phoneNumber}
                onChange={handlePhoneNumber} 
                placeholder="Enter Phone Number"
            />
        <button type="submit">Submit</button>
    </form>: <div>
        <p>Enter Otp send to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>}
  </div>;
  
};

export default PhoneOtpForm;