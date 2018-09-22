// The object holding all my datas
const SortingObj = [
  {
    name: 'Gryffindor',
    color1: '#ae0001',
    color2: '#eeba30',
    crest: './img/Gryffindor.png'
  },
  {
    name: 'Hufflepuff',
    color1: '#ecb939',
    color2: '#000000',
    crest: './img/Hufflepuff.png'
  },
  {
    name: 'Ravenclaw',
    color1: '#222f5b',
    color2: '#946b2d',
    crest: './img/Ravenclaw.png'
  },
  {
    name: 'Slytherin',
    color1: '#2a623d',
    color2: '#aaaaaa',
    crest: './img/Slytherin.png'
  }
];

// Function for printing to the DOM
const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

// Event listener and function to show\hide the Student Form when someone clicks the Start Sorting button
const startSortingBtn = document.querySelector('.start-sort-btn');

startSortingBtn.addEventListener('click', (event) => {
  const studentForm = document.querySelector('.student-input');
  if (studentForm.classList.contains('invisible')) {
    studentForm.classList.replace('invisible', 'visible');
    startSortingBtn.innerHTML = 'Stop Sorting!';
  } else if (studentForm.classList.contains('visible')) {
    studentForm.classList.replace('visible', 'invisible');
    startSortingBtn.innerHTML = 'Start Sorting!';
  }
});
