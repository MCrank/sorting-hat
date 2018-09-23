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
  selectedDiv.innerHTML += stringToPrint;
};

// Random number Generator
const randomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Student card builder function
const studentCardBuilder = () => {
  let randomHouse = randomNum(SortingObj.length);
  const studentName = document.querySelector('#student-input');
  if (studentName.value === '') {
    $('#my-modal').modal();
  }
  const selectedHouse = SortingObj[randomHouse];
  let newString = `
  <div class="card mx-auto mb-3">
    <div class="card-header text-center" style="background-color:
    ${selectedHouse.color2}
    ">
      ${studentName.value}
      </div>
    <div class="card-body text-center" style="background-color: ${selectedHouse.color1}">
      <h5 class="card-title pb-4">${selectedHouse.name}</h5>
      <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
      <a href="#" class="expel-btn btn btn-info w-75">Expelliarmus</a>
    </div>
  </div>`;

  studentName.value = '';
  studentName.focus();
  printToDom(newString, 'student-cards');
  enableExpel();
};

// Get reference to the Start Sorting Button
const showStudentInputBtn = document.querySelector('.start-sort-btn');
// Click Event and function to show\hide the Student Form when someone clicks the Start Sorting button
showStudentInputBtn.addEventListener('click', (event) => {
  const studentForm = document.querySelector('.student-input');
  if (studentForm.classList.contains('invisible')) {
    studentForm.classList.replace('invisible', 'visible');
    showStudentInputBtn.innerHTML = 'Stop Sorting!';
  } else if (studentForm.classList.contains('visible')) {
    studentForm.classList.replace('visible', 'invisible');
    showStudentInputBtn.innerHTML = 'Start Sorting!';
  }
  document.querySelector('#student-input').focus();
});

// Get Reference to the Sort button on the Student input
const startSortignBtn = document.querySelector('.sort-btn');
// Click event to add student card, clear input, and re focus
startSortignBtn.addEventListener('click', (event) => {
  event.preventDefault();
  studentCardBuilder();
});

// Capture enter key on Student Input Form to build card
const startSortingInput = document.querySelector('#student-input');
startSortingInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    studentCardBuilder();
  }
});

// Function to add event listener for student cards as they are added since they do not
// exist on the DOM at page load
const enableExpel = () => {
  const expelBtn = document.getElementsByClassName('expel-btn');

  for (let i = 0; i < expelBtn.length; i++) {
    const element = expelBtn[i];
    element.addEventListener('click', (event) => {
      const buttonClicked = event.target;
      const cardToDelete = buttonClicked.parentNode.parentNode;
      cardToDelete.remove();
    });
  }
};
