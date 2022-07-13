searchbar = document.getElementsByClassName("Search").value;


searchbar.addEventListenr

function overviewFill() {
    document.getElementsByClassName("Name").value = sessionStorage.getItem("name");
    document.getElementsByClassName("Healthcard").value = sessionStorage.getItem("healthcard");
    document.getElementsByClassName("Age").value = sessionStorage.getItem("age");
    document.getElementsByClassName("DOB").value = sessionStorage.getItem("dateofbirth");
    document.getElementsByClassName("RFV").value = sessionStorage.getItem("reasonforvisit");
    document.getElementsByClassName("LOS").value = sessionStorage.getItem("lengthofvisit");
}    

