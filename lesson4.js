function valideForm() {
    var expName = /\w+\s\w+/gi;
    var expPhone = /^\+\d{1,3}\(\d{3}\)\d{3}-\d{4}$/;
    var expMail = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,11}$/i;
    var expMsg = /\w+/gi;

    var $name = document.getElementsByName('name')[0].value;
    var $phone = document.getElementsByName('phone')[0].value;
    var $email = document.getElementsByName('email')[0].value;
    var $message = document.getElementsByName('message')[0].value;

    if(expName.test($name) === true) {
        document.getElementById('name').className = 'good';
    } else {
        document.getElementById('name').className = 'error_msg';
    }

    if(expPhone.test($phone) === true) {
        document.getElementById('phone').className = 'good';
    } else {
        document.getElementById('phone').className = 'error_msg';
    }

    if(expMail.test($email) === true) {
        document.getElementById('email').className = 'good';
    } else {
        document.getElementById('email').className = 'error_msg';
    }
    if(expMsg.test($message) === true) {
        document.getElementById('message').className = 'good';
    } else {
        document.getElementById('message').className = 'error_msg';
    }

}
document.querySelector('.button').addEventListener("click", valideForm);