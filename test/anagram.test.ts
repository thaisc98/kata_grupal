import { Anagramas } from "../src/app";
import { expect } from 'chai';

describe('Anagram-code', () => {
  it('should return true', () => {
    let anagram = new Anagramas();
    expect(anagram.checkAnagrams('hola', 'aloh').equals(true))
    expect(anagram.checkAnagrams).to.be.true;
  })
})