import {FC, useContext} from "react";
import {FhirContext} from "./FhirContext";


const Connected: FC = () => {
  const ctx = useContext(FhirContext);
  if (ctx.client) {
    console.log(ctx.client.getIdToken())
    return <p>Connection success!</p>
  }
  return <p>No FHIR client connected</p>
}

export default Connected;
