function d001() {
  let product_name = prompt('product name?')
  let product_cost = prompt(`how much cost ${product_name}`).replace(',', '.');

  let payment = prompt(`value to pay ${product_cost}?`).replace(',', '.');

  let change = payment - product_cost;
  alert(`bought ${product_name}, cost ${moneyFormat(product_cost)}, gave ${moneyFormat(payment)} and ${moneyFormat(change)} challenge `);
}

function moneyFormat(element) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

  }).format(element);
}