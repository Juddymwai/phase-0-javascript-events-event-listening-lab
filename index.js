function addingEventListener(){
  const element = document.getElementById('input');
  function clickAlert(){
  alert ('I was clicked');
}
element.addEventListener('click', clickAlert)

}

element.addEventListener('click', addingEventListener)