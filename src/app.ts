import { stringify } from 'querystring';
import internal from 'stream';

const fs = require('fs');

export class Anagramas {
  fileName: string | null = null;
  words: Array<string> = [];

  constructor(input: string | Array<string>) {
    this.processInput(input);
  }

  processInput = (input: string | Array<string>): void => {
    if (typeof input === 'string') {
      this.fileName = input;
      this.words = fs.readFileSync(input, 'utf-8').toString().split('\n');
    } else if (input instanceof Array) {
      this.words = input;
    } else {
      throw new Error('Not avaible type of input.');
    }
  };

  checkAnagrams = (): Array<Array<string>> => {
    const tempAnagrams = new Map<string, Array<string>>();

    for (const word of this.words) {
      const sortedWord: string = word.split('').sort().join('').toLowerCase();

      let anagramVal = tempAnagrams.get(sortedWord.toLowerCase());

      if (!anagramVal) anagramVal = [];

      anagramVal.push(word);
      // key: palabra value: arreglo
      tempAnagrams.set(sortedWord, anagramVal);
    }
    console.log(tempAnagrams.size);

    const anagrams: Array<Array<string>> = [];

    const entries = tempAnagrams.values();

    while (true) {
      const current = entries.next();
      const isItOver: boolean | undefined = current.done;

      if (isItOver) {
        break;
      }
      if (current.value.length > 1) anagrams.push(current.value);
    }
    return anagrams;
  };
}
