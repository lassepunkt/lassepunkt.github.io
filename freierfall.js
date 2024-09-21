var startTime
var time = 0
var running = false
let v_inf = 55
let g = 9.81
var lw = true


function start() {
    document.getElementById('dist').innerHTML = '0000 m'
    running = true
    startTime = new Date()
}
function stop() {
    running = false
}
function s(t, v_inf, g) {
    if (lw) {
        return ((v_inf**2)/g)*Math.log(Math.cosh((g*t)/v_inf))
    } else {
        return (1/2) * g * t**2
    }
}
function v(t, v_inf, g) {
    if (lw) {
        return v_inf*Math.tanh((g*t)/v_inf)
    } else {
        return g*t
    }
}
setInterval(function() {
    if (running) {
        time = Date.now() - startTime

        g = document.getElementById('gravity').value
        v_inf = document.getElementById('v').value

        lw = v_inf != 0
        
        time = Math.floor(time / 100)
        var sec = (time % 600) / 10
        var min = Math.floor(time / 600)
        if (min < 10) {
            min = '0' + min
        }
        if (sec % 1 == 0) {
            sec = sec + '.0'
        }
        if (sec < 10) {
            sec = '0' + sec
        }
        document.getElementById('time').innerHTML = min + ':' + sec

        strecke = Math.round(s(time/10,v_inf,g))
        vel = Math.round(v(time/10,v_inf,g))

        if (strecke < 10) {
            document.getElementById('dist').innerHTML = '000' + strecke + ' m'
        } else if (strecke < 100) {
            document.getElementById('dist').innerHTML = '00' + strecke + ' m'
        } else if (strecke < 1000) {
            document.getElementById('dist').innerHTML = '0' + strecke + ' m'
        } else {
            document.getElementById('dist').innerHTML = strecke + ' m'
        }
        if (vel < 10) {
            document.getElementById('speed').innerHTML = '00' + vel + ' m/s'
        } else if (vel < 100) {
            document.getElementById('speed').innerHTML = '0' + vel + ' m/s'
        } else {
            document.getElementById('speed').innerHTML = vel + ' m/s'
        }
        
    }
}, 10)