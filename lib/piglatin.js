/**
 * Simple Pig Latin encoding library.
 *
 * "Pig Latin is a language game in which words in English are altered.
 * The objective is to conceal the meaning of the words from others not familiar
 * with the rules." (Wikipedia)
 *
 * @author Lex Mourek <lex@mourek.name>
 */

/**
 * @param {string} input
 * @returns {string}
 */
function piglatin(input) {
  return input.replace(
    /([^\s-]*way)|([aeiouy][^\s-]*)|(\w+[^\s\-0-9]+)/gmi,
    function(match, way, vowel, other) {
      if (way) {
        return way;
      }

      if (vowel) {
        return shiftPunctation(vowel + 'way', 'way'.length);
      }

      if (other) {
        //copy first char to the end
        other += other.charAt(0).toLocaleLowerCase();

        //shift upper case
        other = other.replace(/([A-Z]+[^a-z]*)(.?)/g, function(m, start, end) {
          return start.charAt(0).toLocaleLowerCase() + start.substring(1)
            + end.toLocaleUpperCase();
        });

        //remove first char
        other = other.substring(1) + 'ay';

        return shiftPunctation(other, 1 + 'ay'.length);
      }

      return match;
    }
  );

  function shiftPunctation(text, num) {
    const pnct = '.,`’!\?\'';
    return text.replace(new RegExp('([' + pnct + ']+)([^' + pnct + ']{' + num + '})', 'g'), '$2$1');
  }
}

module.exports = piglatin;
