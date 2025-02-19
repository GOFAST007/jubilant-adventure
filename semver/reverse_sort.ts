// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import type { SemVer } from "./types.ts";
import { compare } from "./compare.ts";

/** Sorts a list of semantic versions in descending order. */
export function reverseSort(
  versions: SemVer[],
): SemVer[] {
  return versions.sort((a, b) => compare(b, a));
}
