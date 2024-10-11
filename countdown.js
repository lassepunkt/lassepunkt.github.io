function intToStr(zahl) {
    ret = ''
    einer = zahl % 10
    zehner = Math.floor(zahl / 10)
    switch (zahl) {
        case 0: return 'null'
        case 1: return 'einer'
        case 11: return 'elf'
        case 12: return 'zwölf'
        case 16: return 'sechzehn'
        case 17: return 'siebzehn'
    }
    switch (einer) {
        case 1:
            ret += 'ein'
            break
        case 2:
            ret += 'zwei'
            break
        case 3:
            ret += 'drei'
            break
        case 4:
            ret += 'vier'
            break
        case 5:
            ret += 'fünf'
            break
        case 6:
            ret += 'sechs'
            break
        case 7:
            ret += 'sieben'
            break
        case 8:
            ret += 'acht'
            break
        case 9:
            ret += 'neun'
            break
        default:
            ret += ''
    }
    if (zahl > 20 && zahl % 10 != 0) {
        ret += 'und'
    }
    switch (zehner) {
        case 1:
            ret += 'zehn'
            break
        case 2:
            ret += 'zwanzig'
            break
        case 3:
            ret += 'dreißig'
            break
        case 4:
            ret += 'vierzig'
            break
        case 5:
            ret += 'fünfzig'
            break
        case 6:
            ret += 'sechszig'
            break
        case 7:
            ret += 'siebzig'
            break
        case 8:
            ret += 'achzig'
            break
        case 9:
            ret += 'neunzig'
            break
        default:
            ret += ''
    }
    return ret
}

for (i = 0; i < 100; i++) {
    console.log(i + ': ' + intToStr(i))
}

setInterval(function() {
    let since = 1728752400000
    // since = 1728165600000
    // since = 1728152037000 + 30000
    let time = since - new Date().getTime()
    let jahre = Math.floor(time / (1000 * 60 * 60 * 24 * 365))
    let monate = Math.floor(time / (1000 * 60 * 60 * 24 * 30))
    let wochen = Math.floor(time / (1000 * 60 * 60 * 24 * 14))
    let tage = Math.floor(time / (1000 * 60 * 60 * 24))
    let stunden = Math.floor(time / (1000 * 60 * 60))
    let minuten = Math.floor(time / (1000 * 60))
    let sekunden = Math.floor((time / 1000))
    let textH = "Was bist du noch am Handy???"
    let textC = "Was bist du noch am Computer???"

    // document.getElementById("jahre").innerHTML = jahre
    // document.getElementById("monate").innerHTML = monate
    // document.getElementById("wochen").innerHTML = wochen
    if (sekunden <= 0) {
        document.getElementById("label").innerHTML = "Ab geht's!"
        document.getElementById("textHandy").innerHTML = textH
        document.getElementById("textComp").innerHTML = textC
    } else {
        document.getElementById("label").innerHTML = "Ab geht's in…"
        if (tage > 0) {
            if (tage == 1) {
                document.getElementById("labelTage").innerHTML = 'Tag,'
            } else {
                document.getElementById("labelTage").innerHTML = 'Tagen,'
            }
            if (tage == 1) {
                document.getElementById("tage").innerHTML = 'einem'
            } else {
                document.getElementById("tage").innerHTML = intToStr(Math.abs(tage))
            }
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
            document.getElementById("stunden").innerHTML = intToStr(stunden)
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
            document.getElementById("minuten").innerHTML = intToStr(minuten)
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
            document.getElementById("sekunden").innerHTML = intToStr(sekunden)
        } else {
            document.getElementById("sekunden").innerHTML = ''
            document.getElementById("labelSekunden").innerHTML = ''
        }
    }
    // document.getElementById("stunden").innerHTML = Math.abs(stunden - tage * 24)
    // document.getElementById("minuten").innerHTML = Math.abs(minuten - stunden * 60)
    // document.getElementById("sekunden").innerHTML = sekunden % 60
}, 1000)