function createUser() {
  const http = new XMLHttpRequest();
  const url = "https://etutor1.herokuapp.com/signup"
  var email = document.getElementById("userEmail").value;
  var password = document.getElementById("userPassword").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var healthnum = document.getElementById("healthNum").value;

  var newUser = {
    email_in: email, 
    password_in: password,
    fname_in: fname,
    lname_in: lname,
    healthnum_in: healthnum,
  }

  http.open("POST", url, true);
  http.setRequestHeader('Content-Type', 'application/json');
  console.log(newUser)
  http.send(JSON.stringify(newUser));
}

document.getElementById("button-submit").addEventListener("click", function(e) {
  createUser();
})
