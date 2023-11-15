function d002() {
  const resp = window.document.getElementById('exit');
  let name = prompt('name?');
  let salary = Number(prompt(`salary of ${name}`).replace(',', '.'));
  let percentage_adjust = Number(prompt(`salary of ${name} readjust percentage ?`));
  let adjust_salary = salary * (percentage_adjust / 100);
  let new_salary = salary + adjust_salary;

  resp.innerHTML = `<h2>${name} raised salary</h2>
  <p>salary actual ${moneyFormat(salary)}</p>
  <p>raised of ${percentage_adjust}%, raised salary ${moneyFormat(adjust_salary)} </p>
  <p>new salary ${moneyFormat(new_salary)}
  `;
  
}


function moneyFormat(element) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

  }).format(element);
}