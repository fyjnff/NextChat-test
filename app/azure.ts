import { FunCounterOutput } from "./TestTools";

export function makeAzurePath(path: string, apiVersion: string) {
  FunCounterOutput(__filename, "makeAzurePath");
  // should omit /v1 prefix
  path = path.replaceAll("v1/", "");

  // should add api-key to query string
  path += `${path.includes("?") ? "&" : "?"}api-version=${apiVersion}`;

  return path;
}
