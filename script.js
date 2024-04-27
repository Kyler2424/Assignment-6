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
  })

  textArea.value = "";
  console.log(occurence);


const root = document.getElementById('root');
root.appendChild(textArea);
root.appendChild(submitButton);

//HTML TABLE
const table = document.createElement('table');
const headerRow = document.createElement('thead');
const row1 = document.createElement('tr');
const word = document.createElement('th');
word.textContent = 'word_name';
const count = document.createElement('th');
count.textContent = 'word_frequency';
headerRow.appendChild(word);
headerRow.appendChild(count);

//Adding words and occurences to table
for(const token in occurence){
	const row = table.insertRow();
  const tokenCell = row.insertCell();
  tokenCell.textContent = token;
  const countCell = row.insertCell();
  countCell.textContent = occurence[token];
}

});

const root = document.getElementById('root');
root.appendChild(textArea);
root.appendChild(submitButton);
