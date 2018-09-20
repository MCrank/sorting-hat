// The object holding all my datas
const SortingObj = [];

// Function for printing to the DOM
const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};
