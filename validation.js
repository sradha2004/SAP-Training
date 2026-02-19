function validateForm(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let value=20;
    let minpasswordLength=6;
    if(password.length<minpasswordLength){
        alert("password must be at least 6 characters long!");
        return false;
    }
    alert("Registration successful!\nWelcome"+name);
    return true;
}