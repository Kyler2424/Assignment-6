const textArea = document.createElement('textarea');
const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';

submitButton.addEventListener('click', function() {
   //insert functions here
    textArea.value = "";
  });

const root = document.getElementById('root');
root.appendChild(textArea);
root.appendChild(submitButton);
