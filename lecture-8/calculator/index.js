function insert(number) {
  document.getElementById('text_view').value += number
}

function calculate() {
  let element = document.getElementById('text_view')

  if (element.value) {
    element.value = eval(element.value)
  }
}

function refresh() {
  document.getElementById('text_view').value = ''
}

function back() {
  element = document.getElementById('text_view')

  element.value = element.value.substring(0, element.value.length - 1)
}