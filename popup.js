document.getElementById('textInput').addEventListener('input', function() {
  let text = this.value.trim();
  let words = text.split(/\s+/);
  let wordCount = words.length;
  
  // Word Frequency Calculation
  let wordFrequency = {};
  words.forEach(word => {
    word = word.toLowerCase();
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });

  // Display Word Count and Frequency
  document.getElementById('totalWords').textContent = wordCount;
  displayWordFrequency(wordFrequency);

  // Character Frequency Calculation
  let charFrequency = {};
  for (let char of text.replace(/\s+/g, "")) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  
  // Display Character Count and Frequency
  document.getElementById('totalChars').textContent = text.replace(/\s+/g, "").length;
  displayCharFrequency(charFrequency);
});

// Function to Display Word Frequency
function displayWordFrequency(wordFrequency) {
  let wordFreqContainer = document.getElementById('wordFrequency');
  wordFreqContainer.innerHTML = "";
  
  for (let word in wordFrequency) {
    let wordPercentage = ((wordFrequency[word] / document.getElementById('totalWords').textContent) * 100).toFixed(2);
    let wordItem = document.createElement('div');
    wordItem.textContent = `${word}: ${wordFrequency[word]} (${wordPercentage}%)`;
    wordFreqContainer.appendChild(wordItem);
  }
}

// Function to Display Character Frequency
function displayCharFrequency(charFrequency) {
  let charFreqContainer = document.getElementById('charFrequency');
  charFreqContainer.innerHTML = "";
  
  for (let char in charFrequency) {
    let charPercentage = ((charFrequency[char] / document.getElementById('totalChars').textContent) * 100).toFixed(2);
    let charItem = document.createElement('div');
    charItem.textContent = `${char}: ${charFrequency[char]} (${charPercentage}%)`;
    charFreqContainer.appendChild(charItem);
  }
}
