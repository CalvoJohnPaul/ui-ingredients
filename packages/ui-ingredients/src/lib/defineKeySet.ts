export const defineKeyset =
  <T>() =>
  <K extends readonly (keyof T)[]>(keys: keyof T extends K[number] ? K : never) =>
    keys;
