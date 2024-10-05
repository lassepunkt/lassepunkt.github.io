setInterval(function() {
    let since = 1728752400000
    since = 1728165600000
    let time = since - new Date().getTime()
    let jahre = Math.floor(time / (1000 * 60 * 60 * 24 * 365))
    let monate = Math.floor(time / (1000 * 60 * 60 * 24 * 30))
    let wochen = Math.floor(time / (1000 * 60 * 60 * 24 * 14))
    let tage = Math.floor(time / (1000 * 60 * 60 * 24))
    let stunden = Math.floor(time / (1000 * 60 * 60))
    let minuten = Math.floor(time / (1000 * 60))
    let sekunden = Math.floor((time / 1000))

    // document.getElementById("jahre").innerHTML = jahre
    // document.getElementById("monate").innerHTML = monate
    // document.getElementById("wochen").innerHTML = wochen
    if (sekunden < 0) {
        document.getElementById("label").innerHTML = "Ab geht's!"
    } else {
        document.getElementById("label").innerHTML = "Ab geht's in…"
    }
    if (tage > 0) {
        if (tage == 1) {
            document.getElementById("labelTage").innerHTML = 'Tag,'
        } else {
            document.getElementById("labelTage").innerHTML = 'Tagen,'
        }
        document.getElementById("tage").innerHTML = Math.abs(tage)
    } else {
        document.getElementById("tage").innerHTML = ''
        document.getElementById("labelTage").innerHTML = ''
    }
    stunden = stunden - tage * 24
    if (stunden > 0 || tage > 0) {
        if (stunden == 1) {
            document.getElementById("labelStunden").innerHTML = 'Stunde,'
        } else {
            document.getElementById("labelStunden").innerHTML = 'Stunden,'
        }
        document.getElementById("stunden").innerHTML = stunden
    } else {
        document.getElementById("stunden").innerHTML = ''
        document.getElementById("labelStunden").innerHTML = ''
    }
    minuten = minuten - stunden * 60 - tage * 24 * 60
    if (minuten > 0 || stunden > 0 || tage > 0) {
        if (minuten == 1) {
            document.getElementById("labelMinuten").innerHTML = 'Minute und'
        } else {
            document.getElementById("labelMinuten").innerHTML = 'Minuten und'
        }
        document.getElementById("minuten").innerHTML = minuten
    } else {
        document.getElementById("minuten").innerHTML = ''
        document.getElementById("labelMinuten").innerHTML = ''
    }
    sekunden = sekunden % 60
    if (sekunden > 0 || minuten > 0 || stunden > 0 || tage > 0) {
        if (sekunden == 1) {
            document.getElementById("labelSekunden").innerHTML = 'Sekunde.'
        } else {
            document.getElementById("labelSekunden").innerHTML = 'Sekunden.'
        }
        document.getElementById("sekunden").innerHTML = sekunden
    } else {
        document.getElementById("sekunden").innerHTML = ''
        document.getElementById("labelSekunden").innerHTML = ''
    }
    // document.getElementById("stunden").innerHTML = Math.abs(stunden - tage * 24)
    // document.getElementById("minuten").innerHTML = Math.abs(minuten - stunden * 60)
    // document.getElementById("sekunden").innerHTML = sekunden % 60
}, 1000)