function changeExternalAllCommunistElements() {
  const elements = document.getElementsByClassName('communist-element')

  for(var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'This is our document!'
  }
}