import { Anagramas } from './app';

(() => {
  const start_time = Date.now();
  let counter: number = 0;

  const { checkAnagrams } = new Anagramas('wordlist.txt');

  const anagrams: Array<Array<string>> = checkAnagrams();

  for (const arr of anagrams) {
    console.log(arr, ',');
    counter++;
  }
  const duration = Date.now() - start_time;

  console.log('compute done in ' + duration + ' ms');
  console.log('Counter Anagrams ' + counter);
})();
