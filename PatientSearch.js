searchbar = document.getElementsByClassName("Search").value;


document.addEventListener('keypress', function e(event){
    if (e.keycode === 13){
        console.log("Enter")
       
    }
})

function overviewFill() {
    document.getElementsByClassName("Name").value = sessionStorage.getItem("name");
    document.getElementsByClassName("Healthcard").value = sessionStorage.getItem("healthcard");
    document.getElementsByClassName("Age").value = sessionStorage.getItem("age");
    document.getElementsByClassName("DOB").value = sessionStorage.getItem("dateofbirth");
    document.getElementsByClassName("RFV").value = sessionStorage.getItem("reasonforvisit");
    document.getElementsByClassName("LOS").value = sessionStorage.getItem("lengthofvisit");
}    

