console.log('Contentscript injected');
let currentlyShowingInfo = false;

// create two views of the extension component (default and details)
const extraInfo = createExtraInfoEl();
const budgetOverview = createbudgetOverview();

// create extension el and append to DOM
let extensionEl = document.createElement('div');
extensionEl.classList.add('budget-div');
extensionEl.addEventListener('click', toggleExtraInfo);
extensionEl.appendChild(budgetOverview);

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5',
);
parentElement.appendChild(extensionEl);

function createbudgetOverview() {
  const budgetOverview = document.createElement('div');
  const logo = document.createElement('img');
  logo.src = './images/favicon-16x16.png';
  logo.alt = 'eco.mio logo';
  budgetOverview.appendChild(logo);

  const p = document.createElement('p');
  const budget = document.body.textContent.match(/\d+\s?€/);
  p.innerText = `Budget-to-Beat: ${budget}`;

  budgetOverview.appendChild(p);
  return budgetOverview;
}

function createExtraInfoEl() {
  const extraInfo = document.createElement('div');
  extraInfo.innerText = `Some more cool info:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  return extraInfo;
}

function toggleExtraInfo() {
  const childToShow = currentlyShowingInfo ? budgetOverview : extraInfo;
  document.querySelector('.budget-div').replaceChildren(childToShow);
  currentlyShowingInfo = !currentlyShowingInfo;
}
