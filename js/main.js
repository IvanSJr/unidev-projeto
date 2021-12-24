const input = document.querySelector("#send");
const text = document.querySelector("#text");
const counter = document.querySelector("#counter")

const cleaning = input.addEventListener('click', (e)=> {
  e.preventDefault();
  let palavroes = ['porra', 'caralho', 'corno', 'puto'];
  let valuetext = text.value.toLowerCase();
  palavroes.forEach(
    (value) => {
      if (valuetext.match(value)){
        valuetext = valuetext.replaceAll(value, '***');
      }
    }
  )
  text.value = valuetext;
});

text.addEventListener("keypress", (e)=> {
  const maxChars = 255;
  let inputLength = text.value.length;

  if(inputLength >= maxChars) {
    e.preventDefault();
  }

  counter.innerHTML = (inputLength + 1).toString();
});
