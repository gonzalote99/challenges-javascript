const resp = window.document.getElementById('UL');

const challengues_obj = {
  d001: 'calculating change',
  d002: 'salary adjustment',
  d003: 'student status',
  d004: 'price before, price after',
  
};

const createListChallenge = (directory) => {
Object.keys(challengues_obj).map((element) => {
  resp.innerHTML += `<li><a href=".${directory == undefined ? "" : directory}/${element}.html"><b>${element}</b> - ${challengues_obj[element]}</a></li>`; 
});
};


if(window.location.pathname.includes('/html/')) {
  createListChallenge();

} else {
  createListChallenge('')
}
