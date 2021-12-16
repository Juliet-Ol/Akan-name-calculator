function checkAkanName() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    if (year == " " || !year.match(/^\d\d\d\d$/)){
        alert("enter valid year")
    }
    else if (month == " " || month > 12 || month <=0){
        alert("enter valid month")

    }
    else if (day == " " || day <=0 || day >31 ){
        alert("enter valid day")
    }
    else { 
        thatDay()
    }
        
}  


function thatDay (year, month, day) {
       
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    // calculating day
    var yy = parseInt(year.toString().split("").slice(2).join(""));
            var mm = parseInt(month);
            var dd = parseInt(day);
            var cc = parseInt(year.toString().split("").slice(0,2).join(""));
            var date =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7
            var sikuHiyo=Math.trunc(date);
            
            

            // getting Akan name
            var male = document.getElementById("male");
            var female = document.getElementById("female");
        // male names

        if (male.checked == true) {
            var akanMaleNames;
            switch(sikuHiyo) {
                case 0:
                    akanMaleNames = "Kwasi";
                    break;
                case 1:
                    akanMaleNames = "Kwadwo";
                    break;
                case 2:
                    akanMaleNames = "Kwabena";
                    break;
                case 3:
                    akanMaleNames = "Kwaku";
                    break;
                case 4:
                    akanMaleNames = "Yaw";
                    break;
                case 5:
                    akanMaleNames = "Kofi"; 
                    break;
                case 6:
                    akanMaleNames = "Kwame";
                    break;

                
                
        
                }

                alert(akanMaleNames);

        }

        // female names

        else if (female.checked == true) {
            var akanFemaleNames;
            switch(sikuHiyo){
                case 0:
                    akanFemaleNames = "Akosua";
                    break;
                case 1:
                    akanFemaleNames = "Adwoa";
                    break;
                case 2:
                    akanFemaleNames = "Abenaa";
                    break;
                case 3:
                    akanFemaleNames = "Akua";
                    break;
                case 4:
                    akanFemaleNames = "Yaa"
                    break;
                case 5:
                    akanFemaleNames = "Afua"
                    break;
                case 6:
                    akanFemaleNames = "Ama"  
                    break;
                         
            }
            
            alert(akanFemaleNames);
        }

       else(alert("error"))
    
}