var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var validating = false;

function validUser(value) {
    var message = '';

    if (format.test(value)) {
        message += `Username should not contain any special characters \n`
    }
    if (value.length > 20) {
        message += `Username should be less than 20 characters \n`
    }
    if (message.length > 0 && validating == false) {
        validating = true;
        alert(message);

        setTimeout(() => {
            document.getElementById("userName").focus();
            validating = false;
        }, 10);
    }

}

function validPassword(value) {
    var message = '';
    if (value.length) {
        if (value.length < 8 || value.length > 20) {
            message += 'Password must have atleast 8 characters and not more than 20 character \n'
        }
        if (!/[0-9]/.test(value)) {
            message += 'must have atleast one number (0-9) \n';
        }
        if (!/[A-Z]/.test(value)) {
            message += 'must have atleast one upper case character (A-Z) \n'
        }

        if (!/[a-z]/.test(value)) {
            message += 'must have atleast one lower case character (a-z) \n'
        }
        if (!format.test(value)) {
            message += 'have atleast one special character out of these ( ! @ # $ ^ & * ~ ) \n'
        }
        if (/\s/g.test(value)) {
            message += 'must not have spaces\n'
        }
    }

    if (message.length > 0) {
        alert(message);
    }

}

function validName(value) {
    message = '';
    let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(value) || /[0-9]/.test(value)) {
        message += 'should only contains alphabets'
    }
    if (message.length > 0) {
        alert(message);
    }
}

function validZip(value) {
    message = '';
    if (value.length != 6 && value.length != 0) {
        message += 'ZipCode should be 6 digits'
    }
    if (message.length > 0) {
        alert(message);
    }
}

function validNumber(value) {
    message = '';
    if (value.length != 10 && value.length != 0) {
        message += 'number should be 10 digits \n'
    }
    if (format.test(value) || /[a-z],[A-Z]/.test(value)) {
        message += 'enter a valid number \n'
    }
    if (message.length > 0) {
        alert(message);
    }
}

function validEmail(value) {
    message = '';
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(value) && value.length != 0) {
        message += 'enter valid email \n'
    }

    if (message.length > 0) {
        alert(message);
    }
}

function validImage(value) {
    message = '';
    var allowedExtensions = /(\.jpg|\.png|\.gif)$/i;
    const fi = document.getElementById('image');
    const size = Math.round((fi.files.item(0).size) / 1024);
    console.log(size)
    if (size > 2048) {
        message += 'File should be less than 2mb \n'
    }
    if (!allowedExtensions.exec(fi.value)) {
        message += 'File extention should be below mentioned format \n';
    }

    if (message.length > 0) {
        alert(message);
    }

}


function validateForm() {
    alert('Form Submitted')
}
