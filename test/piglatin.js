var assert = require('chai').assert;
var piglatin = require('../lib/piglatin');

describe('Pig-latin lib.', () => {
  describe('Given rules.', () => {
    it('Words that start with a consonant have their first letter moved to the'
      + 'end of the word and the letters “ay” added to the end.', () => {
      assert.equal(piglatin('Hello'), 'Ellohay');
    });

    it('Words that start with a vowel have the letters “way” added to the end.', () => {
      assert.equal(piglatin('apple'), 'appleway');
    });

    it('Words that end in “way” are not modified.', () => {
      assert.equal(piglatin('stairway'), 'stairway');
    });

    it('Punctuation must remain in the same relative place from the end of the word.', () => {
      assert.equal(piglatin('can’t'), 'antca’y');
      assert.equal(piglatin('end.'), 'endway.');
    });

    it('Hyphens are treated as two words', () => {
      assert.equal(piglatin('this-thing'), 'histay-hingtay'); //puvodne 'histay-hinstay', chyba v zadani?
    });

    it('Capitalization must remain in the same place.', () => {
      assert.equal(piglatin('Beach'), 'Eachbay');
      assert.equal(piglatin('McCloud'), 'CcLoudmay');
    });
  });

  describe('Other test rules', () => {
    it('should shift capitals across symbols', () => {
      assert.equal(piglatin('BeG|eX'), 'Eg|ExBay');
    });
    it('should handle one char', () => {
      assert.equal(piglatin('a'), 'away');
    })
    it('should handle symbols', () => {
      assert.equal(piglatin('?'), '?');
      assert.equal(piglatin('??'), '??');
      assert.equal(piglatin('33'), '33');
    })
  });
});
