var range_el = document.querySelector('input');

range_el.addEventListener('change', function() {
  this.setAttribute('value', this.value);
}, false);

range_el.addEventListener('input', function() {
  this.setAttribute('value', this.value);
}, false);



// var rangeInput = document.getElementById("rangeinput").value;
// var buttonInput = document.getElementById("btn");

// if (buttonInput.addEventListener) {
// 	buttonInput.addEventListener("click", testtest, false);
// }
// else if (buttonInput.attachEvent) {
// 	buttonInput.attachEvent('onclick', testtest);
// }

function testtest(e) {
    // document.getElementById("rangevalue1").innerHTML= e;
    // set the progress bar at the certain %
    if(e > 0 && e <= 8){ // 3m        
        // send the PWRLVL - 3;
        document.getElementById("rangevalue1").innerHTML="3m";
    }
    else if(e > 8 && e <= 13){ // 5m
        // send the PWRLVL - 5;        
        document.getElementById("rangevalue1").innerHTML="5m";
    }
    else if(e > 13 && e <= 25){ // 10m
        // send the PWRLVL - 6;        
        document.getElementById("rangevalue1").innerHTML="10m";
    }
    else if(e > 25 && e <= 50){ // 20    
        // send the PWRLVL - 8;        
        document.getElementById("rangevalue1").innerHTML="20m";
    }
    else if(e > 50 && e <= 75){ // 30m
        // send the PWRLVL - 10;        
        document.getElementById("rangevalue1").innerHTML="30m";
    }
    else {
        // send the PWRLVL - 12;        
        document.getElementById("rangevalue1").innerHTML="40m";
    }     
}