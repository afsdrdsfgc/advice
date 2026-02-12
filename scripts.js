const advice_show = document.querySelector('#ad')
const advicebnt = document.querySelector('#get_ad')
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


async function getadvice() {
  var id = getRandomArbitrary(1, 224)
  const response = await fetch('https://api.adviceslip.com/advice/' + id);
  const data = await response.json();
  console.log(data)
  advice_show.textContent = data.slip.advice
}

advicebnt.addEventListener('click', getadvice)


               