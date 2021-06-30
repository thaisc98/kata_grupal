import {Anagramas} from "../src/app";
test('original implementation', () => {
  // now we have the original implementation,
  // even if we set the automocking in a jest configuration
  expect(Anagramas.checkAnagrams()).toBe('token');
});
