const textArea = document.createElement('textarea');
const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

submitButton.addEventListener('click', function() {  //insert functions here
 
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
  
  const occurrenceArray = Object.entries(occurrence);
  
  occurrenceArray.sort((a, b) => b[1] - a[1]);
  
  const sortedOccurrences = Object.fromEntries(occurrenceArray);

console.log(sortedOccurrences);


//make array and console log top 5 words
const firstFive = occurrenceArray.slice(0, 5).map(([token, frequency]) => `${token}: ${frequency}`).join(', ');
console.log(`Top 5 most frequent words are: ${firstFive}`);

//HTML TABLE
const table = document.createElement('table');
const headerRow = table.insertRow();
const tokenHeader = document.createElement('th');
tokenHeader.textContent = 'word_name';
const count = document.createElement('th');
count.textContent = 'word_frequency';
headerRow.appendChild(tokenHeader);
headerRow.appendChild(count);

//adding words to table in order of occurrence

occurrenceArray.forEach(([token, frequency]) => {
const row = table.insertRow();
const tokenCell = row.insertCell();
tokenCell.textContent = token;
const countCell = row.insertCell();
countCell.textContent = frequency;
})

const root = document.getElementById('root');
root.appendChild(table);

});

root.appendChild(textArea);
root.appendChild(submitButton);
