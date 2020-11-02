// Helper functions
function generateGuid2() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
      return '%' + c.charCodeAt(0).toString(16)
    })
}

function toHex(s) {
    // utf8 to latin1
    var s = unescape(encodeURIComponent(s))
    var h = ''
    for (var i = 0; i < s.length; i++) {
        h += s.charCodeAt(i).toString(16)
    }
    return h
}

function fromHex(h) {
    var s = ''
    for (var i = 0; i < h.length; i+=2) {
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
    }
    return decodeURIComponent(escape(s))
}

function toStringUnescape(input) {
    return input.replaceAll("\\\\", "\\")
                .replaceAll("\\\"", "\"")
                .replaceAll("\\t", "\t")
                .replaceAll("\\r\\n", "\r\n")
                .replaceAll("\\r", "\r")
                .replaceAll("\\n", "\n")
                .replaceAll("\\f", "")
                .replaceAll("\\b", "");
  }

// Util Functions
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
    var x = fixedEncodeURIComponent(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function decodeUrl(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = decodeURIComponent(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function encodeHex(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = toHex(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function decodeHex(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = fromHex(input);
    document.getElementById("text-area-" + i).textContent = x;
}

function hashMd5(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = CryptoJS.MD5(input).toString();
    document.getElementById("text-area-" + i).textContent = x;
}

function hashSha1(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = CryptoJS.SHA1(input).toString();
    document.getElementById("text-area-" + i).textContent = x;
}

function hashSha256(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = CryptoJS.SHA256(input).toString();
    document.getElementById("text-area-" + i).textContent = x;
}

function stringEscape(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = JSON.stringify(input).slice(1, -1);
    document.getElementById("text-area-" + i).textContent = x;
}

function stringUnescape(i) {
    var input = document.getElementById("input-text-area-" + i).value;
    var x = toStringUnescape(input);
    document.getElementById("text-area-" + i).textContent = x;
}