// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { assert } from "../assert/mod.ts";
import { validate } from "./v4.ts";

Deno.test("validate() checks if a string is a valid v4 UUID", () => {
  const u = crypto.randomUUID();
  const t = "84fb7824-b951-490e-8afd-0c13228a8282";
  const n = "84fb7824-b951-490g-8afd-0c13228a8282";

  assert(validate(u), `generated ${u} should be valid`);
  assert(validate(t), `${t} should be valid`);
  assert(!validate(n), `${n} should not be valid`);
});
