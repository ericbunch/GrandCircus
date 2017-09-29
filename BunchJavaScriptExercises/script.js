function myNumber() {
	
	var number = prompt("Enter A Number!");

	var total = 0;

	for (var num = 1; num <= number; num++) {
	  total += num;
	}

	alert("The total is: " + total);

	console.log("The total is: " + total);

}


function myPlay() {
	
	userInput = prompt("Do you want to play?");
	
	if (userInput === "yes") {	
		
		names = new Array();
		var i = 0;
		do
			{
			   next = prompt("Enter a word.", "");
			   if (next > " ") names [i] = next;
			   i = i + 1;
			   userAgain = prompt("Do you want to play again?");
			   if (userAgain === "no") {
					console.log(names);
					break;
				}
			} while (next > " ");
			for (i in names) {
				console.log(names[i] + " ");
			}
	
	}

}


function printName() {
    
    prompt("Would you like to print your name?");
    enterName = prompt("Enter your name.");
    helloIntro = ("Hello. My name is" + " " + enterName);
    console.log(helloIntro);
	nameAgain = ("yes");
	excite = "!";

    while (nameAgain === "yes") {            
        
        nameAgain = prompt("Would you like to print this again?");
         
        console.log(helloIntro + excite); 
		excite = excite + "!";   
                    
    } 
    
}


function mealType() {
	
	timeDay = prompt("What time of day is it? I.E: morning, noon, evening");
	if (timeDay === "morning") {
		console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
	}else if (timeDay === "noon") {
		console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
	}else if (timeDay === "evening") {
		console.log("Since it is evening, you should be eating dinner. We suggest a chicken and rice.");
	}
	
}














