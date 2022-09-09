
/*

Select the element <h3 class="simple">

Select the element <em class="selected-time">

When the element <h3 class="simple"> is selected, console.log("simple")

After console.log("simple"), write the string "simple" in <em class="selected-tense">.

*/

// select table headings

// in the category of "tenses":
const simple = $(".simple");
const continuous = $(".continuous");
const perfect = $(".perfect");
const perfectContinuous = $(".perfect-continuous");

// in the category of "time":
const past = $(".past");
const present = $(".present");
const future = $(".future");

// select the display area of the selected time and tense
const selectedTime = $(".selected-time");
let selectedTense = $(".selected-tense");


// create functions that will display the clicked table headings on the display area.

// table headings that will be placed in the "tenses" placeholder
simple.click(function () { // onClick of the "simple" in the table heading
    selectedTense.html(`<em class="selected-tense clicked">Simple</em>`);
    console.log("Simple selected!");
});

continuous.click(function () {
    selectedTense.html(`<em class="selected-tense clicked">Continuous</em>`);
    console.log("Continuous selected!");
});

perfect.click(function () {
    selectedTense.html(`<em class="selected-tense clicked">Perfect</em>`);
    console.log("Perfect selected!");

});

perfectContinuous.click(function () {
    selectedTense.html(`<em class="selected-tense clicked">Perfect Continuous</em>`);
});

// table headings that will be placed in the "time" placeholder
past.click(function () {
    selectedTime.html(`<em class="selected-time clicked">Past</em>`);
});

present.click(function () {
    selectedTime.html(`<em class="selected-time clicked">Present</em>`);
});

future.click(function () {
    selectedTime.html(`<em class="selected-time clicked">Future</em>`);

});


/*
selectedTense.replaceWith(`Yoyo`); // All event handlers will be removed after the first replaceWith() is executed?

// "The .replaceWith() method removes all data and event handlers associated with the removed nodes.

selectedTense.replaceWith(`Haha`); // replaceWith only works once! Only `Yoyo` is used.


    // table headings that will be placed in the "time" placeholder

*/

