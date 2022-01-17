console.log("hello world");


//If displayWarm() is run onclick in this solution, colored boxes are displayed, but are not removed
//note these functions are removed from html at present

// function displayWarm() {
//     for (let i=0; i<document.querySelectorAll(".warm").length; i++){
//         document.querySelectorAll(".warm")[i].classList.add('show-me-color');
//     }
// }

// function displayCool() {
//     for (let i=0; i<document.querySelectorAll(".cool").length; i++){
//         document.querySelectorAll(".cool")[i].classList.add('show-me-color');
//     }
// }

// function displayPrimary() {
//     for (let i=0; i<document.querySelectorAll(".primary").length; i++){
//         document.querySelectorAll(".primary")[i].classList.add('show-me-color');
//     }
// }

// function displaySecondary() {
//     for (let i=0; i<document.querySelectorAll(".secondary").length; i++){
//         document.querySelectorAll(".secondary")[i].classList.add('show-me-color');
//     }
// }




// second method:

// if checked === true, then .add('show-me-color')  
// else, .remove('show-me-color')

const primaryCheckbox = document.querySelector('#checkbox-primary');
const warmCheckbox = document.querySelector('#checkbox-warm');
const coolCheckbox = document.querySelector('#checkbox-cool');
const secondaryCheckbox = document.querySelector('#checkbox-secondary');



//this runs when the page loads, so there is no response to checkboxes being checked. Needs and event listener or something
    // if (warmCheckbox.checked === true) {
    //     console.log ("Warm colors should be displayed");
    //     for (let i=0; i<document.querySelectorAll(".warm").length; i++){
    //     document.querySelectorAll(".warm")[i].classList.add('show-me-color');
    //     }
    // } else {
    //         console.log("Warm colors should not be displayed");
    //         for (let i=0; i<document.querySelectorAll(".warm").length; i++){
    //         document.querySelectorAll(".warm")[i].classList.remove('show-me-color')
    //         }
    //     }
 



//in this solution.... add displayWarm() or displayPrimary() back into the html onchange or onclick - then css classes are added and removed depending on the checkbox, not the button, but the order you check them off matters.... for instance, if you check "Display warm colors:, then "display primary colors", the uncheck "display primary colors", you'll be left with only orange, instead of red orange yellow

    // function displayWarm() {

    //     if (warmCheckbox.checked === false) {
    //         console.log ("Warm Checkbox is not checked. Warm colors should not be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".warm").length; i++){
    //         document.querySelectorAll(".warm")[i].classList.remove('show-me-color');
    //         }
    //     } else {
    //             console.log("Warm checkbox is checked. Warm colors should be displayed.");
    //             for (let i=0; i<document.querySelectorAll(".warm").length; i++){
    //             document.querySelectorAll(".warm")[i].classList.add('show-me-color')
    //             }
    //         }

    //.add('hide-the-color') would permanently hide because of CSS cascading, which is not what we want


    // }

    // function displayPrimary() {
    //     if (primaryCheckbox.checked === false) {
    //         console.log("Primary checkbox is not checked. Primary colors should not be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".primary").length; i++){
    //             document.querySelectorAll(".primary")[i].classList.remove('show-me-color')
    //         }
    //     } else {
    //         console.log("Primary checkbox is checked. Primary colors should be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".primary").length; i++){
    //             document.querySelectorAll(".primary")[i].classList.add('show-me-color')
    //         }
    //     }
    // }


//Third possible solution 
//Run a function with a single button click, rather than onclick with every checkbox
// - still does not work. all kinds of fuckery as things cancel each other out running in order



    // function showTheseColors() {

    //     if (primaryCheckbox.checked === false) {
    //         console.log("Primary checkbox is not checked. Primary colors should not be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".primary").length; i++){
    //         document.querySelectorAll(".primary")[i].classList.remove('show-me-color')
    //         }
    //     } else {
    //         console.log ("primary colors should be displayed")
    //         for (let i=0; i<document.querySelectorAll(".primary").length; i++){
    //         document.querySelectorAll(".primary")[i].classList.add('show-me-color')
    //         }
    //     };

    //     if (coolCheckbox.checked === false) {
    //         console.log("cool checkbox is not checked. cool colors should not be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".cool").length; i++){
    //         document.querySelectorAll(".primary")[i].classList.remove('show-me-color')
    //         }
    //     } else {
    //         console.log ("cool colors should be displayed")
    //         for (let i=0; i<document.querySelectorAll(".cool").length; i++){
    //         document.querySelectorAll(".cool")[i].classList.add('show-me-color')
    //         }
    //     };

    //     if (warmCheckbox.checked === false) {
    //         console.log("Warm checkbox is not checked. warm colors should not be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".warm").length; i++){
    //         document.querySelectorAll(".warm")[i].classList.remove('show-me-color')
    //         }
    //     } else {
    //         console.log ("warm colors should be displayed")
    //         for (let i=0; i<document.querySelectorAll(".warm").length; i++){
    //         document.querySelectorAll(".warm")[i].classList.add('show-me-color')
    //         }
    //     }

    //     if (secondaryCheckbox.checked === false) {
    //         console.log("secondary checkbox is not checked. secondary colors should not be displayed.");
    //         for (let i=0; i<document.querySelectorAll(".secondary").length; i++){
    //         document.querySelectorAll(".secondary")[i].classList.remove('show-me-color')
    //         }
    //     } else {
    //         console.log ("secondary colors should be displayed")
    //         for (let i=0; i<document.querySelectorAll(".secondary").length; i++){
    //         document.querySelectorAll(".secondary")[i].classList.add('show-me-color')
    //         }
    //     }

    // }


//Solution 4: What if you let the function run on any click, including clicks filling in the check, and have the function be evaluated the same way it is on the button click above... how to do that?
//group all the add together, and all the remove together?
// use And or Or?
//So far this does not work; true/false is just reversed


// if primary = true, display primary
//red yellow blue

// if primary OR warm = true, display primary OR warm
// red orange yellow blue

//if primary OR cool = true,
//red yellow green blue violet

//if primary OR secondary = true display primary OR secondary
//ROYGBIV

//if secondary = true, display secodary
//orange green violet

//if secondary OR warm,
// red orange yellow 

//if secondary or cool
//orange green blue violet 

//if warm or cool,
//ROYGBIV




function showTheseColors() {

    if (primaryCheckbox.checked === true) {
        console.log("Primary checkbox is checked. Primary colors should be displayed.");
        for (let i=0; i<document.querySelectorAll(".primary").length; i++){
        document.querySelectorAll(".primary")[i].classList.add('show-me-color')
        }
    } else {
        console.log ("primary colors should not be displayed")
        for (let i=0; i<document.querySelectorAll(".primary").length; i++){
        document.querySelectorAll(".primary")[i].classList.remove('show-me-color')
        }
    };

    if (coolCheckbox.checked === true) {
        console.log("cool checkbox is checked. cool colors should  be displayed.");
        for (let i=0; i<document.querySelectorAll(".cool").length; i++){
        document.querySelectorAll(".primary")[i].classList.add('show-me-color')
        }
    } else {
        console.log ("cool colors should not be displayed")
        for (let i=0; i<document.querySelectorAll(".cool").length; i++){
        document.querySelectorAll(".cool")[i].classList.remove('show-me-color')
        }
    };

    if (warmCheckbox.checked === true) {
        console.log("Warm checkbox is checked. warm colors should be displayed.");
        for (let i=0; i<document.querySelectorAll(".warm").length; i++){
        document.querySelectorAll(".warm")[i].classList.add('show-me-color')
        }
    } else {
        console.log ("warm colors should not be displayed")
        for (let i=0; i<document.querySelectorAll(".warm").length; i++){
        document.querySelectorAll(".warm")[i].classList.remove('show-me-color')
        }
    }

    if (secondaryCheckbox.checked === true) {
        console.log("secondary checkbox is checked. secondary colors should be displayed.");
        for (let i=0; i<document.querySelectorAll(".secondary").length; i++){
        document.querySelectorAll(".secondary")[i].classList.add('show-me-color')
        }
    } else {
        console.log ("secondary colors should be displayed")
        for (let i=0; i<document.querySelectorAll(".secondary").length; i++){
        document.querySelectorAll(".secondary")[i].classList.remove('show-me-color')
        }
    }

}









// I don't understand this at all, but supposedly you could add and remove classes with it?
document.getElementById ('new-box').addEventListener ('click', function (ev) {
    ev.target.parentNode.classList[ ev.target.checked ? 'add' : 'remove'] ('selected');
  }, false);



