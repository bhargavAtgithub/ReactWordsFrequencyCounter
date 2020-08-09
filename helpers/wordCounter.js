const getWordsFrequency = (text) => {
  var words = {};
  console.log("Freq");
  text.split(" ").forEach((word) => {
    words[word] = (words[word] || 0) + 1;
  });

  return getSortedList(words);
};

const getSortedList = (frequencyList) => {
  var wordsFrequency = Object.keys(frequencyList).map((key) => {
    return [key, frequencyList[key]];
  });

  return wordsFrequency.sort((a, b) => {
    return a[1] - b[1];
  });
};

module.exports = {
  getWordsFrequency,
};
