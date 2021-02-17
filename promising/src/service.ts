class Service {
  /**
   * The first of the resource validation checks.
   */
  async p1(s: string | undefined | null): Promise<string[]> {
    if (s) {
      return [s, s, s];
    }
    throw new Error("String is empty, null or undefined");
  }

  /**
   * The second of the resource validation checks.
   */
  async p2(arr: string[]): Promise<string> {
    return arr.join(".");
  }

  /**
   * This method emulates the complete check on whether the caller is allowed to use the
   * requested resources or not.
   *
   * The complete step-by-step check is represented by the promise chain.
   */
  async ensureValid(s: string | undefined | null): Promise<void> {
    /*
     * Even though the return type of this function is `Promise<void>` it is absolutely
     * important to have the `return` statement here as otherwise the `await` in the caller
     * will not actually wait for the resolution/rejection of the promise.
     *
     * This caused me a few heachaches until I found that out.
     */
    return this.p1(s)
      .then((arr: string[]) => this.p2(arr))
      .then((res: string) => {
        console.log("Do something with the result of the operation: " + res);
        /*
         * At this point we know the the input was good. For example, the requested
         * resources are available to the caller. At this point, the actual
         * computation/simulation or whatever could be launched.
         */
      });
  }
}

export { Service };
