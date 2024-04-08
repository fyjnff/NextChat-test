import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

import { FunCounterOutput } from "./TestTools";

const serverConfig = getServerSideConfig();

export default async function App() {
  FunCounterOutput(__filename, "App");
  return (
    <>
      <Home />
      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}
