import { Service } from "./service";

class Controller {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  /**
   * Simulates a (GET) route.
   */
  async run(s: string | undefined | null): Promise<string> {
    /*
     * If `ensureValid()` resolves, then `result` will be undefined as the function returns
     * Promise<void>.
     *
     * If any of the promises in the chain are rejected, then that will be caught in the
     * `catch` below. In that case `result` will be of type string and contains the error
     * message.
     */
    const result: string | void = await this.service
      .ensureValid(s)
      .catch((e) => e.message);

    if (typeof result === "string") {
      return `Error condition (${result})`;
    } else {
      return "Normal result (nothing else to report)";
    }
  }
}

export { Controller };
