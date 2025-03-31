function getFormvalue() {
    event.preventDefault(); 

  
    let firstName = document.forms["form1"]["fname"].value.trim();
    let lastName = document.forms["form1"]["lname"].value.trim();

   
    if (firstName === "" || lastName === "") {
        alert("Please enter both First Name and Last Name.");
        return;
    }

    // Display full name using alert
    alert(firstName + " " + lastName);
}

