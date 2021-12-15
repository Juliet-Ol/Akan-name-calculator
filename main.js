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
        var thatDay = function (year, month, day) {
       
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var day = document.getElementById("day").value;

        // calculating day
        var yy = parseInt(year.slice(-2));
                var mm = parseInt(month);
                var dd = parseInt(date);
                var cc = parseInt(year.slice(0,2));
                var day =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7
                var realDay=Math.ceil(day);
                

                // getting Akan name
                var male = document.getElementById("male").value;
                var female = document.getElementById("female").value;
            // male names

            if (male.checked == true) {
                var akanMaleNames 
                switch(thatDay) {
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

                    alert(akanMaleNames);
                    
            
                    }

        

            // female names

            if (female.checked == true) {
                var akanFemaleNames;
                switch(thatDay){
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
                    alert(akanFemaleNames)          
                }
                
    
            }

            }
        
          }
    }
}    
