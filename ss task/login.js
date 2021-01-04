let emailid = document.getElementById("email");
let password = document.getElementById("pass");



function validate(){
 

        if(emailid.value.trim()=="" && password.value.trim() =="" ){
          emailid.style.border = "3px solid";
          document.getElementById("lbemail").style.visibility ="visible";
          document.getElementById("lbpass").style.visibility ="visible";
          return false;
        }
       
        else if(password.value.trim() ==""){
          password.style.border = "3px solid";
          document.getElementById("lbpass").style.visibility = "visible";
          
          return false;
        }
        else if ( password.value.length<4){
          document.getElementById("lbpass").style.visibility = "hidden";
          document.getElementById("lbpass2").style.visibility="visible";
          return false
        }
      
        else{
            return true
        }

    
  }