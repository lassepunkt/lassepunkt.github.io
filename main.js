function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var terminal = "user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~$ "

async function add(x) {
    for (let i of x) {
        terminal += i
        await sleep(100)
        updateTerminal()
    }
}

async function cd(x) {
    if (x == "about_me") {
        await add("cd about_me")
        terminal += "<br>user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~/about_me$ "
        ls("about_me")
    }
    if (x == "main") {
        await add("cd")
        terminal += "<br>user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~$ "
        ls("main")
    }
    updateTerminal()
}

async function ls(x) {
    if (x == "main") {
        await add("ls")
        terminal += "<br><a href=\"#\" onclick=\"cd(`about_me`)\">about_me</a><br>user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~$ "
    }
    if (x == "about_me") {
        await add("ls")
        terminal += "<br><a href=\"#\" onclick=\"cat(`Interrail`)\">Interrail</a> <a href=\"#\" onclick=\"cat(`Informatik`)\">Informatik</a><br>user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~/about_me$ "
    }
    updateTerminal()
}

async function cat(x) {
    if (x == "Interrail") {
        await add("cat Interrail")
        terminal += "<br>Von April bis Juni 2023 war ich drei Monate mit meiner Freundin in Zügen durch Europa unterwegs. Während dieser Zeit haben wir täglich aufgeschrieben, was wir so erlebt haben, und das war nicht wenig.<br>user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~/about_me$ "
        ls("about_me")
    }
    if (x == "Informatik") {
        await add("cat Informatik")
        terminal += "<br>Ich habe ja bereits erwähnt, dass ich Informatik studiere. Das Studium selbst ist sehr theoretisch, aber ich mache nebenbei natürlich auch immer mal wieder Kleinigkeiten. Hier ist also eine kleine Kostprobe meiner stümperhaften Arbeit.<br>user@<a href=\"#\" onclick=\"cd(`main`)\">lassesagrauske</a>:~/about_me$ "
        ls("about_me")
    }
    updateTerminal()
}

// setInterval(function() {
//     document.getElementById("terminal").innerHTML = terminal + "<span class=\"cursor\"></span>"
// }, 100)

function updateTerminal() {
    document.getElementById("terminal").innerHTML = terminal + "<span class=\"cursor\"></span>"
}
