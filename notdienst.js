var list = new Set([])
var map = new Map([])
var pause = 0
var wochen = 0

document.getElementById('name').addEventListener('keypress', function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === 'Enter') {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    // document.getElementById('create').click();
    create()
  }
});

function create() {
    x = document.getElementById('name').value
    if (x == '') {
        alert('Der Name darf nicht leer sein')
        return
    }
    document.getElementById('name').value = ''
    for (i of list) {
        if (x == i) {
            alert('Arzt ist bereits Teil der Liste')
            return
        }
    }
    list.add(x)
    ret = ''
    for (i of list) {
        ret += '<li>' + i + '</li>\n'
    }
    document.getElementById('list').innerHTML = ret
    console.log(list)
}

function shuffle() {
    document.getElementById('list').innerHTML = ''
    pause = Number(document.getElementById('pause').value)
    wochen = Number(document.getElementById('time').value)
    // if (pause > ) //FIXME
    for (i of list) {
        map.set(i, [0, wochen])
    }
    console.log(map)
}

function choose() {
    
}
