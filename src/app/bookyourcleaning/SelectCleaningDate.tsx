import GreenContainer from "./greenContainer";
import HeadReq from "./headreq";
import Input from "./input";
import TitleWithDivider from "./TitleWithDivider";

export default function SelectCleaningDate() {
  return (
    <GreenContainer
      clsname="mt-5"
      content={
        <>
          <TitleWithDivider text="Select Cleaning Date"></TitleWithDivider>
          <HeadReq text="Select Date" req={true}></HeadReq>
          <Input type="date" req={true}></Input>
        </>
      }
    ></GreenContainer>
  );
}
