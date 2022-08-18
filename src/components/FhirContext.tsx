import React, {FC, useState, useEffect} from "react";
import {createContext} from "react";
import {oauth2 as SMART} from "fhirclient";
import Client from "fhirclient/lib/Client";
import {NavLink} from "react-router-dom";

type clientContext = {
  client: Client | null;
  setClient: (client: Client) => void;
};

const context: clientContext = {
  client: null,
  setClient: (client: Client) => {
    context.client = client;
  },
};

interface Props {
  children: React.ReactNode;
}

export const FhirProvider: FC<Props> = (props) => {
  const [client, setClient] = useState<Client | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!client) {
      SMART.ready()
        .then((client) => setClient(client))
        .catch((error) => setError(error))
        .finally(() => console.debug("FHIR client ready"));
    }
  }, [client]);

  if (error) {
    console.error(error.stack);
    return (
      <>
        <pre>This page should only be accessed using the Home page, please click the links from there</pre>
        <NavLink to={"/"}>Home page</NavLink>
      </>)
  }

  return <FhirContext.Provider value={{client: client, setClient: setClient}}>{props.children}</FhirContext.Provider>;
};

export const FhirContext = createContext(context);
