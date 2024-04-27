const textArea = document.createElement('textarea');
const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

submitButton.addEventListener('click', function() {
  //insert functions here
  const text = textArea.value;
  const tokens = text.split(/\s+/)
  
  const occurence = {};
  tokens.forEach(token => {
    if (token in occurence) {
      occurence[token]++;
    } else {
      occurence[token] = 1;
    }
  });

  textArea.value = "";

console.log(occurence);

//HTML TABLE
const table = document.createElement('table');
const headerRow = table.insertRow();
const tokenHeader = document.createElement('th');
tokenHeader.textContent = 'word_name';
const count = document.createElement('th');
count.textContent = 'word_frequency';
headerRow.appendChild(tokenHeader);
headerRow.appendChild(count);

//Adding words and occurences to table
for(const token in occurence){
	const row = table.insertRow();
  const tokenCell = row.insertCell();
  tokenCell.textContent = token;
  const countCell = row.insertCell();
  countCell.textContent = occurence[token];
}

const root = document.getElementById('root');
root.appendChild(table);
});

root.appendChild(textArea);
root.appendChild(submitButton);
