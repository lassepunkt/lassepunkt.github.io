var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
var today  = new Date();
document.getElementById("date").innerHTML = today.toLocaleDateString("de-DE", options)