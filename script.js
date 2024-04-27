const textArea = document.createElement('textarea');
const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

submitButton.addEventListener('click', function() {
  //insert functions here
  const text = textArea.value;
  const tokens = text.split(/\s+/)
  
  const occurrence = {};
  tokens.forEach(token => {
    if (token in occurrence) {
      occurrence[token]++;
    } else {
      occurrence[token] = 1;
    }
  });

  textArea.value = "";

console.log(occurrence);

//make array
const sortedOccurrences = Object.entries(occurrence).sort((a, b) => b[1] - a[1]);

//HTML TABLE
const table = document.createElement('table');
const headerRow = table.insertRow();
const tokenHeader = document.createElement('th');
tokenHeader.textContent = 'word_name';
const count = document.createElement('th');
count.textContent = 'word_frequency';
headerRow.appendChild(tokenHeader);
headerRow.appendChild(count);

//adding words to table in order of occurence

sortedOccurrences.forEach(([token, frequency]) => {
const row = table.insertRow();
const tokenCell = row.insertCell();
tokenCell.textContent = token;
const countCell = row.insertCell();
countCell.textContent = frequency;
})

const root = document.getElementById('root');
root.appendChild(table);

//console log top 5 words
console.log('Top 5 most frequent words are:');

});

root.appendChild(textArea);
root.appendChild(submitButton);
