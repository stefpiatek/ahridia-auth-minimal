import { FC, useEffect } from "react";
import { oauth2 as SMART } from "fhirclient";

const FHIR_URL = process.env.REACT_APP_FHIR_URL;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

type Props = {
  redirectUri: string
}

/**
 * Launch smart launch sequence using redirectUri
 * @constructor
 */
const FhirAuthoriser: FC<Props> = (props) => {
  const {redirectUri} = props;
  const redirectMessage = `Connecting to FHIR back end using redirectUri: '${redirectUri}'`;
  console.info(redirectMessage)

  useEffect(() => {
    SMART.authorize({
      iss: FHIR_URL,
      redirectUri: redirectUri,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    }).then();
  }, [redirectUri]);

  return <p>{redirectMessage}</p>;
};

export default FhirAuthoriser;
