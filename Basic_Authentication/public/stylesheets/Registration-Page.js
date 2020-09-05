var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "Passwords don't match";
}
}

var message = document.getElementById('message');

// var input = document.getElementById('username');
// input.oninvalid = function(event) {
//   event.target.setCustomValidity("Username can contain uppercase,lowercase letters & numbers. Ex-John123");
// }
// var input = document.getElementById('password');
// input.oninvalid = function(event) {
//   event.target.setCustomValidity("Password should ne of minimum 8 characters & must contain a lowercase letter , an uppercase letter , one numeric character & one special character");
// }
