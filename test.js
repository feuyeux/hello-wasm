import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { delay } from "https://deno.land/std/async/delay.ts";
import { add as adding } from "./lib/rs_lib.js";

Deno.test("should add numbers", async () => {
  await delay(100);
  assertEquals(adding(1, 2), 3);
});

Deno.test("should add numbers", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
