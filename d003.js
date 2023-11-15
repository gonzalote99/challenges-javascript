function d003() {
  const resp = window.document.getElementById('exit');
  const name = prompt('name?');
  let note1 = Number(prompt(`first note of ${name}:`));
  let note2 = Number(prompt(`second note of ${name}:`));

  let media = Number((note1 + note2) / 2);

  const {result, className} = analysis(media);

  note1 = note1.toLocaleString('pt-BR');
  note2 = note2.toLocaleString('pt-BR');
  media = media.toLocaleString('pt-BR');

  resp.innerHTML = `
  <h2>situation of ${name}</h2>
  <p>notes ${note1} and ${note2} media is <b>${media}</b></p>
  <p>with ${media} student : <b class="${className}">${result}</b></p>
  `
}

function analysis(media) {
  if(media < 3) {
    return {
      result: 'disapproved',
      className: 'disapproved',
    };
  }

  if(3 <= media && media <= 6) {
    return {
      result: 'recovery',
      className: 'recovery',
    };
  }

  if(media > 6) {
    return {
      result: 'approved',
      className: 'approved',
    };
  }


}