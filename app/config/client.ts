import { BuildConfig, getBuildConfig } from "./build";
import { FunCounterOutput } from "../TestTools";

export function getClientConfig() {
  FunCounterOutput(__filename, "getClientConfig");
  if (typeof document !== "undefined") {
    // client side
    return JSON.parse(queryMeta("config")) as BuildConfig;
  }

  if (typeof process !== "undefined") {
    // server side
    return getBuildConfig();
  }
}

function queryMeta(key: string, defaultValue?: string): string {
  FunCounterOutput(__filename, "queryMeta");
  let ret: string;
  if (document) {
    const meta = document.head.querySelector(
      `meta[name='${key}']`,
    ) as HTMLMetaElement;
    ret = meta?.content ?? "";
  } else {
    ret = defaultValue ?? "";
  }

  return ret;
}
