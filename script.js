const textArea = document.createElement('textarea');
const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

submitButton.addEventListener('click', function() {  //insert functions here
//adding root
  const root = document.getElementById('root');
 
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
  

  occurrenceArray.sort((a, b) => {
  //compare frquencies to see if they match
  if (b[1] - a[1] !== 0) {
  return b[1] - a[1]; //Sort by frequency
  } else {
  return b[0].localeCompare(a[0]); //compare reverse-alphabetically (sky comes before orange)
  }
 });
 
  const sortedOccurrences = Object.fromEntries(occurrenceArray);

console.log(sortedOccurrences);


//make array and console log top 5 words
const firstFive = occurrenceArray.slice(0, 5).map(([token,frequency]) => `${token}:${frequency}`).join(', ');
console.log(`Top 5 most frequent words are: ${firstFive}`);

//Add top 5 to UI
const topWords = document.createElement('div');
topWords.textContent = `Top 5 most frequent words are: ${firstFive}`;
//append element



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

//outputting table and top5 in UI
root.appendChild(table);
root.appendChild(topWords);
});
//outputting textarea and submit in UI
root.appendChild(textArea);
root.appendChild(submitButton);
