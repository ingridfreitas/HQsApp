function on() {
    var on = document.getElementById('check');
    if (on.checked) {
        value = on
        window.open('/dc-saga')
    }
    else{
        value = off
        window.open('/')
    }
}