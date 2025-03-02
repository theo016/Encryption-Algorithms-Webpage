function caesarCipher() {
    const input = document.getElementById('caesarInput').value;
    const shift = parseInt(document.getElementById('caesarShift').value);
    let output = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char.match(/[a-z]/i)) {
            const code = input.charCodeAt(i);

            // κεφαλαία γράμματα
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            // πεζά γράμματα
            else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        output += char;
    }

    document.getElementById('caesarOutput').style.display = 'block';

    document.getElementById('caesarOutput').textContent = `Κρυπτογραφημένο Κείμενο: ${output}`;
}

function vigenereCipher() {
    const input = document.getElementById('vigenereInput').value;
    const key = document.getElementById('vigenereKey').value;
    let output = '';
    let j = 0;

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char.match(/[a-z]/i)) {
            const code = input.charCodeAt(i);
            const k = key[j % key.length].toUpperCase().charCodeAt(0) - 65;

            // κεφαλαία γράμματα
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + k) % 26) + 65);
            }

            // πεζά γράμματα
            else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + k) % 26) + 97);
            }

            j++;
        }
        output += char;
    }

    document.getElementById('vigenereOutput').style.display = 'block';

    document.getElementById('vigenereOutput').textContent = `Κρυπτογραφημένο Κείμενο: ${output}`;
}
function encryptMessage() {
    const message = document.getElementById('inputMessage').value;
    const algorithm = document.getElementById('algorithm').value;
    let encryptedMessage = '';

    switch (algorithm) {
        case 'aes':
            encryptedMessage = btoa(message); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός AES
            break;
        case 'rsa':
            encryptedMessage = btoa(message); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός RSA
            break;
        case 'des':
            encryptedMessage = btoa(message); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός DES
            break;
        case 'blowfish':
            encryptedMessage = btoa(message); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός Blowfish
            break;
    }

    document.getElementById('outputMessage').value = encryptedMessage;
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('outputMessage').value;
    const algorithm = document.getElementById('algorithm').value;
    let decryptedMessage = '';

    switch (algorithm) {
        case 'aes':
            decryptedMessage = atob(encryptedMessage); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός AES
            break;
        case 'rsa':
            decryptedMessage = atob(encryptedMessage); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός RSA
            break;
        case 'des':
            decryptedMessage = atob(encryptedMessage); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός DES
            break;
        case 'blowfish':
            decryptedMessage = atob(encryptedMessage); // Σημείωση: Αυτός είναι ένας απλός τρόπος, όχι πραγματικός Blowfish
            break;
    }

    document.getElementById('inputMessage').value = decryptedMessage;
}
