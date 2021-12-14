function check_akanname(day) {
   var akanname = document.getElementById("year").value;
   var akanname = document.getElementById("month").value; 
   var akanname = document.getElementById("day").value; 
   var akanname = document.getElementById("gender").value;

}

function gender()
var male = document.getElementById("male").check;
var female = document.getElementById("female").check;
if (male) {
    console.log(male)
}
else if (female) {
    console.log(female)
}


function getName() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
    var maleAkanNames = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var year = parseInt(document.getElementById(yearBorn).value)
    var month = parseInt(document.getElementById(montBorn))
    var day = parseInt(document.getElementById(dayBorn))
    var dayOfTheWeek = ( ( ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7);
    var akanDay = days[day.toFixed()];
    var gender = parseInt(document.getElementById("gender").value);

    if (gender == male) {
        if (akanDay==="Sunday"){
            document.getElementById("output").value = "born on sunday: "+ akanMale[0];
            return true;
        }
        else if (akanDay === "Monday")  {
            document.getElementById("output").value = "born on monday: "+ akanMale[1];
            return true;
        }

         else if (akanDay === "Tuesday")  {
            document.getElementById("output").value = "born on tuesday: "+ akanMale[2];
            return true;    
         }

            else if (akanDay === "Wednesday")  {
                document.getElementById("output").value = "born on wednesday: "+ akanMale[3];
                return true;
            }    
                else if (akanDay === "Thursday")  {
                    document.getElementById("output").value = "born on thursday: "+ akanMale[4];
                    return true; 
                }       
                    else if (akanDay === "Friday")  {
                        document.getElementById("output").value = "born on friday: "+ akanMale[5];
                        return true;
                    }    
                        else if (akanDay === "Monday")  {
                            document.getElementById("output").value = "born on monday: "+ akanMale[6];
                            return true;

    if (gender == female) {
        if (akanDay==="Sunday") {
            document.getElementById("output").value = "born on sunday: "+ akanfemale[0];
            return true;   
    } 
    
        else if (akanDay==="Monday"){
                document.getElementById("output").value = "born on monday: "+ akanfemale[1];
                return true;
        }    
            else if (akanDay==="Tuesday"){
                document.getElementById("output").value = "born on tuesday: "+ akanfemale[2];
                return true; 
            } 

            else if (akanDay==="Wednesday"){
                document.getElementById("output").value = "born on wednesday: "+ akanfemale[3];
                return true; 
            }        
             else if (akanDay==="Thursday"){
                document.getElementById("output").value = "born on thursday: "+ akanfemale[4];
                return true; 
            }                        
            else if (akanDay==="Monday"){
                document.getElementById("output").value = "born on monday: "+ akanfemale[5];
                return true;   
            } 
             else if (akanDay==="Monday"){
                document.getElementById("output").value = "born on monday: "+ akanfemale[6];
                return true;                                                
        }        

    
    }
}



function getName() {
    document.querySelector (".Akan name").style.backgroundColor = "grey"
    
}