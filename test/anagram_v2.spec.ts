import { Anagramas } from '../src/app';

const testArray = ['hola', 'olha', 'como', 'omoc', 'rapido', 'dopira'];

describe('Anagrams', () => {
  it('should return true if hola and aloh', () => {
    let input = ['hola', 'olha'];
    const { checkAnagrams } = new Anagramas(input);
    expect(checkAnagrams()).toStrictEqual([['hola', 'olha']]);
  });

  it('should return 3 ', () => {
    const { checkAnagrams } = new Anagramas(testArray);
    expect(checkAnagrams().length).toStrictEqual(3);
  });

  it('should return 0 ', () => {
    const { checkAnagrams } = new Anagramas([]);
    expect(checkAnagrams().length).toStrictEqual(0);
  });
});
