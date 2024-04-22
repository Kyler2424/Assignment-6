const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

submitButton.addEventListener('click', function() {
    console.log('insert function here'); //insert
  });

const root = document.getElementById('root');
root.appendChild(submitButton);
