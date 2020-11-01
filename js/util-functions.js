function generateGuid2() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function generateGuid(i) {
    var x = generateGuid2();
    document.getElementById("text-area-" + i).textContent = x;
}

function encodeBase64(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = window.btoa(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function decodeBase64(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = window.atob(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function encodeUrl(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = encodeURI(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function decodeUrl(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = decodeURI(input);
    document.getElementById("text-area-" + i).textContent = x;
}



