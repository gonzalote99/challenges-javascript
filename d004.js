function d004() {
  const resp = window.document.getElementById('exit');

  let old_price = Number(prompt('old price?'));
  let new_price = Number(prompt('new price?'));

  let result = analysis(old_price, new_price);

  old_price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

  }).format(old_price);

  new_price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

  }).format(new_price);

  resp.innerHTML = `
  <h2>analysis of values</h2>
   <p>old price ${old_price}, new price ${new_price}</p>
   <p>product is <b class="${result.class}">${result.text}</b></p>
   <p>price : <b class=${result.class}>${result.variation}</b> compred with previous price</p>
   <p>variation of <b class=${result.class}>${result.percentual_variation}</b> </p>
  `;
}

function analysis(old_price, new_price) {
 let variation = new_price - old_price;
 variation = variation < 0 ? variation * -1 : variation;
 let percentual_variation = ((new_price * 100) / old_price - 100).toPrecision(2);
 percentual_variation = percentual_variation < 0 ? percentual_variation * -1 : percentual_variation;

 if(old_price == new_price) {
   return {
     text: 'same price',
     class: 'recovery',
     variation: 'not change',
     percentual_variation: '0%',
   };
 }

 if(old_price > new_price) {
   return {
     text: 'cheaper',
     class: 'approved',
     variation: `reduce ${Intl.NumberFormat('pt-BR', {
       style: 'currency',
       currency: 'BRL',

     }).format(variation)}`,
     percentual_variation : `${percentual_variation}% down `,
   };
 }

 if(old_price < new_price){
   return {
     text: 'more expensive',
     class: 'disapproved',
     variation : `rise ${Intl.NumberFormat('pt-BR', {
       style: 'currency',
       currency: 'BRL',
     }).format(variation)}`,
     percentual_variation: `${percentual_variation}% up`
   }
 }

}