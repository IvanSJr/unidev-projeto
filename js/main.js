let input = document.querySelector("#send");

input.addEventListener('click', (e)=> {
  e.preventDefault();
  let palavroes = ['porra', 'caralho', 'corno', 'puto'];
  let text = document.querySelector("#text");
  let valuetext = text.value.toLowerCase();
  palavroes.forEach(
    (value) => {
      if (valuetext.match(value)){
        valuetext = valuetext.replaceAll(value, '****');
      }
    }
  )
  text.value = valuetext;

})
