const arabiziMapping = {
    'أ':'2',
    "ء":"2",
    "ا": "A",
    "إ":"i",
    "ب": "b",
    "ت": "t",
    "ث": "th",
    "ج": "j",
    "ح": "7",
    "خ": "5",
    "د": "d",
    "ذ": "dh",
    "ر": "r",
    "ز": "z",
    "س": "s",
    "ش": "sh",
    "ص": "9",
    "ض": "9'",
    "ط": "6",
    "ظ": "6'",
    "ع": "3",
    "غ": "8",
    "ف": "f",
    "ق": "q",
    "ك": "k",
    "ل": "l",
    "م": "m",
    "ن": "n",
    "ه": "h",
    "و": "w",
    "ي": "y",
    '،':',',
    '؟':'?',
    'َ':'\'',
    'ِ':'i',
    'ُ':'u',
    'ً':'an',
    'ٍ':'in',
    'ٌ':'un',
    'ّ':''
};

function arabizi(word) {
  if (typeof word !== 'string') {
      throw new Error('Input must be a string');
  }

  if (word.trim().length === 0) {
      throw new Error('Input cannot be blank');
  }

  const arabicRegex = /[\u0600-\u06FF]/; 
  if (!arabicRegex.test(word)) {
      throw new Error('Input must contain at least one Arabic letter');
  }

  const regexPattern = Object.keys(arabiziMapping).join('|');
  const regex = new RegExp(regexPattern, 'g');

  const sentence = word.replace(regex, (matched) => arabiziMapping[matched] || matched);
  return sentence;
}

module.exports = arabizi;
  