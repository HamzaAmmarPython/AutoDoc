function createUser() {
  const http = new XMLHttpRequest();
<<<<<<< HEAD
  const url = "/signup"
=======
  const url = "http://localhost:8081/signup.html#"
>>>>>>> 2a695349d43034c32a66df51c174046c01722c26
  // var email = document.getElementById("userEmail").value;
  // var password = document.getElementById("userPassword").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var healthnum = document.getElementById("healthnum").value;
  var DOB = document.getElementById("DOB").value;
  var RFV = document.getElementById("RFV").value;
  var LOS = document.getElementById("LOS").value;

  var newUser = {
    fname_in: fname,
    lname_in: lname,
    healthnum_in: healthnum,
    DOB_in: DOB,
    RFV_in: RFV,
    LOS_in: LOS
  }


  var testUser = {
    fname_in: 'fname',
    lname_in: 'lname',
    healthnum_in: 'healthnum',
    DOB_in: 'DOB',
    RFV_in: 'RFV',
    LOS_in: 'LOS'
  }


  http.open("POST", url, true);
  http.setRequestHeader('Content-Type', 'application/json');
  console.log(newUser)
  console.log(testUser)

  http.send(JSON.stringify(testUser));
}

document.getElementById("button-submit").addEventListener("click", function(e) {
  createUser();
})
