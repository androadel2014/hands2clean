import GreenContainer from "./greenContainer";
import HeadReq from "./headreq";
import Input from "./input";
import TitleWithDivider from "./TitleWithDivider";

export default function YourTotal() {
  return (
    <GreenContainer
      content={
        <>
          <TitleWithDivider text="Your Total" text2="$1109"></TitleWithDivider>
          <HeadReq
            text="Enter your email to start your booking"
            req={true}
          ></HeadReq>
          <Input plcholder="Enter Your Email" type="email"></Input>
        </>
      }
      clsname=""
    ></GreenContainer>
  );
}
