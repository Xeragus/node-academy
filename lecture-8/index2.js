let counter = 0;

function changePElement() {
  const communistElements = document.getElementsByClassName('communist-element');
  const capitalistElements = document.getElementsByClassName('capitalist-element');

  for(let i = 0; i < communistElements.length; i++) {
    if (counter % 2 == 0) {
      communistElements[i].innerHTML = 'Nie sme komunisti';
      communistElements[i].style.color = 'red';
    } else {
      communistElements[i].innerHTML = 'Nie sme kapitalisti';
      communistElements[i].style.color = 'green';
    }
  }

  for(let i = 0; i < capitalistElements.length; i++) {
    if (counter % 2 == 0) {
      capitalistElements[i].innerHTML = 'Nie sme kapitalisti';
      capitalistElements[i].style.color = 'green';
    } else {
      capitalistElements[i].innerHTML = 'Nie sme komunisti';
      capitalistElements[i].style.color = 'red';
    }
  }

  counter++;
}