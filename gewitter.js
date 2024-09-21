var startTime = Date.now()
var time = 0
var running = false
// const kmps = 0.3432

const kmps = new Map([
    ['-50', 0.29963],
    ['-40', 0.30627],
    ['-30', 0.31277],
    ['-20', 0.31909],
    ['-10', 0.32535],
    ['0', 0.33150],
    ['10', 0.33754],
    ['20', 0.34346],
    ['30', 0.34929],
    ['40', 0.35494],
    ['50', 0.36057]
])

function start() {
    document.getElementById('dist').innerHTML = '0.000 km'
    startTime = Date.now()
    running = true
}
function stop() {
    running = false
}
setInterval(function() {
    tem = document.getElementById('temp').value
    speed = kmps.get(tem)
    if (running) {
        time = Date.now() - startTime
        meter = Math.floor(time * speed)
        if (meter%1000 == 0) {
            document.getElementById('dist').innerHTML = meter/1000 + '.000 km'
        } else if (meter%100 == 0) {
            document.getElementById('dist').innerHTML = meter/1000 + '00 km'
        } else if (meter%10 == 0) {
            document.getElementById('dist').innerHTML = meter/1000 + '0 km'
        } else if (meter%10 == 0) {
            document.getElementById('dist').innerHTML = meter/1000 + '0 km'
        } else {
            document.getElementById('dist').innerHTML = meter/1000 + ' km'
        }
        time = Math.floor(time / 100)
        var sec = (time % 600) / 10
        // time = Math.floor(time / 10)
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
    }
}, 10)