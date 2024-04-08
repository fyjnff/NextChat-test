/*
 * Declare a counter, so it can make the usage of function explicate for us.
 *
 * Usage of functions will be recorded in variable, function_counter, which can be accessed anywhere.
 * The structure of function_counter is:
 *      {file_name, fun_name}: number of uses
 *
 * The function, FunCounterOutput, can record the usage with function_counter, via input including file name and function name.
 */

export type fun_cou = { file_name: string; fun_name: string };
export let function_counter: Map<fun_cou, number> = new Map();

// Function input: FunCounterOutput(__filename, <Function>.name)
export function sub1_FunCounterOutput(file_name: string, fun_name: string) {
  const name: fun_cou = { file_name: file_name, fun_name: fun_name };

  if (!!function_counter.get(name)) {
    function_counter.set(name, (function_counter.get(name) as number) + 1);
  } else {
    function_counter.set(name, 1);
  }

  console.log(
    name.fun_name +
      ": " +
      String(function_counter.get(name)) +
      " " +
      name.file_name,
  );
}

export function FunCounterOutput(file_name: string, fun_name: string) {
  try {
    sub1_FunCounterOutput(file_name, fun_name);
  } catch (e) {
    console.log("FunCounterOutput error");
  }
}

/*
 * Steps to add the FunCounterOutput:
 * 1. import { FunCounterOutput } from "../TestTools" (./TestTools)
 * 2. FunCounterOutput(__filename, "<Function_Name>");
 *
 * The list add the FunCounterOutput:
 * - azure.ts/makeAzurePath
 * - command.ts/useCommand
 * - command.ts/useChatCommand
 * - utils.ts
 * - page.tsx/App
 * - layout.tsx/RootLayout
 * - config/server.ts/getServerSideConfig
 * - config/server.ts/getAccessCodes
 * - config/cilent.ts/getClientConfig
 * - config/cilent.ts/queryMeta
 * - config/build.ts/getBuildConfig
 */
