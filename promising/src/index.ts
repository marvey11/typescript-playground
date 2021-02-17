import { Controller } from "./controller";

const controller = new Controller();

function prettyPrint(input: string | undefined | null, output: string): void {
  console.log(`${input} --> ${output}`);
}

async function execute(input: string | undefined | null): Promise<void> {
  const output: string = await controller.run(input);
  prettyPrint(input, output);
}

(async () => {
  await execute(undefined); // will lead to a rejected promise
  await execute(null); // more bad input
  await execute(""); // ... and even more
  await execute("abc"); // this input finally meets the conditions
})();
