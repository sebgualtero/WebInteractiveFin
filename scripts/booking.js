/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCounter = 0;
let weeklyCost = 0;

let fullDay = document.getElementById("full");

let halfDay = document.getElementById("half");

let TotalCost = document.getElementById("calculated-cost");

let calculate = function() {
    if (fullDay.classList.contains("clicked")) {
        weeklyCost = dayCounter * 40;
    } else {
        weeklyCost = dayCounter * 20;
    }
    TotalCost.innerHTML = weeklyCost;
};



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let dayClicked = function(day) {
    day.classList.toggle("clicked");
    if (day.classList.contains("clicked")) {
        dayCounter++;
    } else {
        dayCounter--;
    }
    console.log(dayCounter);
    calculate();
};

monday.addEventListener("click", function() {
    dayClicked(monday);
    calculate();
}
);

tuesday.addEventListener("click", function() {
    dayClicked(tuesday);
    calculate();
}

);

wednesday.addEventListener("click", function() {
    dayClicked(wednesday);
    calculate();
}
);

thursday.addEventListener("click", function() {
    dayClicked(thursday);
    calculate();
}
);

friday.addEventListener("click", function() {
    dayClicked(friday);
    calculate();
}
);

fullDay.addEventListener("click", function() {
    if (halfDay.classList.contains("clicked")) {
        halfDay.classList.remove("clicked");
    }
    fullDay.classList.toggle("clicked");
    halfDay.classList.remove("clicked");
    calculate();
}
);

halfDay.addEventListener("click", function() {
    if (fullDay.classList.contains("clicked")) {
        fullDay.classList.remove("clicked");
    }
    halfDay.classList.toggle("clicked");
    fullDay.classList.remove("clicked");
    calculate();
}
);

let clearDays = function() {
    let days = document.getElementsByTagName("li");
    for (let i = 0; i < days.length; i++) {
        if (days[i].classList.contains("clicked")) {
            days[i].classList.remove("clicked");
        }
    }
    dayCounter = 0;
    calculate();
}

let clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", clearDays);









/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


