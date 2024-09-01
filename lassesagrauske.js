function changeMode() {
    const mode = document.getElementById('mode')

    const p = document.getElementsByTagName('p')
    const h1 = document.getElementsByTagName('h1')
    const h2 = document.getElementsByTagName('h2')
    const button = document.getElementsByTagName('button')
    const a = document.getElementsByTagName('a')

    const textColorLight = '#121212'
    const textColorDark = '#E2E2E2'
    const backgroundColorLight = '#FFFFFF'
    const backgroundColorDark = '#121212'

    if (mode.innerHTML == 'Light') {
        mode.innerHTML = 'Dark'
        mode.style.color = textColorLight
        mode.style.border = '1px solid ' + textColorLight
        mode.style
        document.getElementById('body').style.backgroundColor = backgroundColorLight
        for (i = 0; i < p.length; i++) {
            p[i].style.color = textColorLight
        }
        for (i = 0; i < h1.length; i++) {
            h1[i].style.color = textColorLight
        }
        for (i = 0; i < h2.length; i++) {
            h2[i].style.color = textColorLight
        }
        for (i = 0; i < button.length; i++) {
            button[i].style.color = textColorLight
            button[i].style.border = '1px solid ' + textColorLight
            // button[i].onmouseover.style.color = backgroundColorLight
        }
        for (i = 0; i < a.length; i++) {
            a[i].style.color = textColorLight
        }
    } else {
        mode.innerHTML = 'Light'
        mode.style.color = textColorDark
        mode.style.border = '1px solid ' + textColorDark
        document.getElementById('body').style.backgroundColor = backgroundColorDark
        for (i = 0; i < p.length; i++) {
            p[i].style.color = textColorDark
        }
        for (i = 0; i < h1.length; i++) {
            h1[i].style.color = textColorDark
        }
        for (i = 0; i < h2.length; i++) {
            h2[i].style.color = textColorDark
        }
        for (i = 0; i < button.length; i++) {
            button[i].style.color = textColorDark
            button[i].style.border = '1px solid ' + textColorDark
        }
        for (i = 0; i < a.length; i++) {
            a[i].style.color = textColorDark
        }

    }
}

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
var today  = new Date();
document.getElementById("date").innerHTML = today.toLocaleDateString("de-DE", options)