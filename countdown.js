setInterval(function() {
    let since = 1728752400000
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
    // document.getElementById("tage").innerHTML = Math.abs(tage)
    document.getElementById("stunden").innerHTML = Math.abs(stunden)
    document.getElementById("minuten").innerHTML = Math.abs(minuten - stunden * 60)
    document.getElementById("sekunden").innerHTML = sekunden % 60
}, 1000)