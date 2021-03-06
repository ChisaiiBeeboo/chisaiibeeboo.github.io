// Phase 0 Unit 1 Week 3

// DBC Group Project (Week3)
// 05.08.2014

/* 
Accountability Group Emails:

Derek Siker <derek.siker@gmail.com>
John Berry <jpberry0623@gmail.com>
Austin Hay <hayaustin@gmail.com>
Stephen C. Estrada <stcrestrada@gmail.com>
Dylan Richards <drichards2013@gmail.com>
Elz Jr. <elzyawili@gmail.com>
Kate La <kate.la@gmail.com>
Kelly Murray <kelly@devbootcamp.com>
Sam Blackman <samblackman@devbootcamp.com>
*/

// ______________________________________________________ //

// Release 0, Person 1: Derek Siker
/*
I want to write three functions:

1. I want to have a function called sum which can return the sum of all elements in a
 list that has an odd length of numbers, and also can return the sum of all elements in a 
 list that has an even length of numbers.

2. I want to have a function called mean which can return the average of all elements in a 
list that has an odd length of numbers, and also can return the average of all elements in a 
list that has an even length of numbers.

3. I want to have a function called median which can return the median value of all elements 
in a list that has an odd length of numbers, and also can return the median value of all elements 
in a list that has an even length of numbers.
*/

// ______________________________________________________ //

// Release 1, Person 2: Austin Hay
/*
Pseudocode:

1.) Define a function "sum" which uses the .length property and boolean logic to:
	A.) sort all elements based on even or odd length    <--- CHANGE ELEMENTS TO 'LIST' OR 'ARRAY'
	B.) Returns the sum of those elements with even length and separately, those of odd length
	C.) Function should have one input, even or odd, which tells the function to either sort 
	by even or odd length, sum the respective elements and return the solution

2.) Define a function "mean" which uses the .length property and boolean logic to:
	A.) sort all elements based on even or odd length
	B.) Returns the mean of those elements with even length and separately, those of odd length
	C.) Function should have one input, even or odd, which tells the function to either sort 
	by even or odd length, mean the respective elements and return the solution
	D.) Recall that mean in this case will just be the odd/even sum divided by the number of 
	elements that are odd or even, respecitvely. Consider using .length

3.) Define a function "mean" which uses the .length property and boolean logic to:
	A.) sort all elements based on even or odd length
	B.) Returns the median of those elements with even length and separately, those of odd length
	C.) Function should have one input, even or odd, which tells the function to either sort 
	by even or odd length, find the median of the respective elements and return the solution
	D.) Recall that the median is just the number in the middle of a set of numbers. 
		Ex: array = {1 3 5} median = 3

// ______________________________________________________ //
// Release 2, Person 3: Kate La

//////////// SUM ////////////////

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];


function sum(array) { 
total=0;
for (var i = 0; i < array.length; total += array[i++]);
   return total;
};


alert(sum(oddLengthArray));
alert(sum(evenLengthArray));


//////////// MEAN ////////////////

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

function mean(array) {
 var sum = 0;
 for (i = 0; i < array.length; i++) {
 	sum += array[i];
	}
	return array.length ? sum / array.length : 0;
};
 

alert(mean(oddLengthArray));
alert(mean(evenLengthArray));

//////////// MEDIAN ////////////////

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

function median(array) {
	var med = Math.floor(array.length / 2);
    
    	if ((array.length % 2) === 1) { 
        	return array[med];
        } else {
        	return (array[med - 1] + array[med]) / 2;
        }
};

alert(median(oddLengthArray))
alert(median(evenLengthArray))


// ______________________________________________________ //
// Release 3, Person 4:




// ______________________________________________________ //
// Release 4, Person 5:



