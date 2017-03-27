//CHANGELOG - INVOICE SYS
//==================================

v11 15/3/17 Enable Auto Date
Removed Maxlength HTML Tags OK
Input wont enter, debug ok?  NO
	if yes try strict example
	if no fix slice
Split working now, use lowercase
	Create new var convert toString, 
	split new var NOT original
Slice working? YES
	Bad Format, easy fix
	Was creating subslice, printing letters NOT words
		Changed [0,2] to [2] Fixed? NO
		Changed [0,1] to [1] Fixed? NO
		Slices We AND d
	Separate dd and mm, they are cutting each other!!! OK
Slice working OK? Format worked out as:
	Convert to string of letters for Day
	Convert to array of words for Date and Month
=========================================
v11 19/3/17 How to print these vars to HTML form
Printing to HTML form? NO
	Use STRICT example ok? YES
	Works using P Tag only
=========================================
v11 19/3/17 New BLANK SPACE check
Using new errorCount to catch errors 
in checker loop.
Once found ONE MSG displayed instead of many OK
=========================================
v11 19/3/17 Graphics fixes
Changed White background to Dark DONE
Changed White form elements Black
				FFFFFF to now is 000000 NO
Try adding bgcolor tag to form 			NO Removed
Use CSS on each line for background color  NO
Use CSS sheet  NO, try in both places
	Reorder input type = text
	Normally after id, any change NO
Add new style, edit style8 with new bgcolor NO
	embed input background color  NO
DROP ALL CHANGES NOT ESSENTIAL

=========================================
v11 19/3/17 Validation with Expressions
 var expression and then if conditions so 14 lines
 Removed RETURN only useful for  Single op functions!!!
 TODO remove TEST keyword find native solution
  //           Try == instead of .test
  //          if no work stick with .test
  //Can use .exec both achieve the same, no change
  Removed focus  to prevent repetitive calls
  ========================================
  v11 26/3/17 Valid Count working?  Maybe
  Returning correct debug msgs YES
  Adjust error msgs, to be useful OK
  Correct Min/Max for Phone		OK
  On Run: Validation is B 1/6 | Validation is F 2/6;
					Address OK			Total OK
					All 2/6;
	Customer Name, Desc, Cost BAD
	Check RegExp allows spaces ?  NO
	Add to Existing?					YES
	Two of Six remaining, Desc and Cost
			Change the format to allow punctuation NO
			Remove format for cost+desc 				YES
==========================================
v11 26/3/17 All working now? 
	Debugging now minimal OK
	Phone digit 11 or 12 OK
	Error msg shows even if form valid
		Try to correct loop
		Was errorCheck, should be >=
v11 27/3/17 Quality Testing
	On a second run script can return 8/6!!
		Reset the count after each run
		Moved count to funct checkForm NO
		Force Reset using == 					NO
		Using if and == to reset				YES
	Phone number not being checked properly
		Try simplify numExp						NO
		Using single = 								NO
		Remove one bracket around arg	NO but OK
		Removed another set of brackets NO but OK
		Include as many brackets as wantYES
		Using == || ==								NO
		Using ==										NO
		Using >= || =<								NO
		Using == && 								YES
		
		
		
		
		

	
		