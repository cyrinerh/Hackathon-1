// DO NOT CHANGE THIS

var print = console.log;
var separator = "\n---\n\n";

function test(got, expected) {
	if (got === expected) {
		prefix = "\u{2714} ";
		smiley = " \u{1F600}";
	}
	else {
		prefix = "\u{2716} ";
		smiley = " \u{1F61E}";
	}
	print(prefix + "got: " + got + ", expected: " + expected + smiley)
}

// --------------------------

print("0. Warm up")
/*
	Complete the averageElectricityBill. this function should:

	Take three numbers as arguments: they represent repectively electricity bills
	for the last three month period.
	Return the average of electricity consumption over the three months.
*/
function averageElectricityBill(bill1, bill2, bill3) {
	var average = (bill1 + bill2 + bill3)/3;
	return Number(average.toFixed(3));

}

print("averageElectricityBill");
test(averageElectricityBill(23, 32, 64), 39.667);
test(averageElectricityBill(10, 25, 128), 54.333);
print(separator);

// 1. STRING MANIPULATION
print("1. STRING MANIPULATION")
// Ex 0

/*
	Complete the logMessage function. this function should:

	Take three strings as arguments: the first is a user name of one of the site members, the second is a time string,
	the third is the url requested by the given user.
	Return a string like the one provided withthe test case.
	*/
	function logMessage(username, timestamp, url) {
		return (username+" accessed the site "+ url +" at " + timestamp+"." )
	}

	print("logMessage");
	test(logMessage("Yogesh", "16:20", "http://petshop.com/pets/reptiles/pythons"), "Yogesh accessed the site http://petshop.com/pets/reptiles/pythons at 16:20.");
	print(separator);

// Ex 1

/*	Complete the formLetter function. This function should:

    Take three strings as arguments: the first name of the recipient, the sender's signature name, and the message of the letter
    combine the three into a single string with additional greetings and closings
    insert additional new lines between the greeting, message, and signature
    */
    function formatLetter(recipient, sender, emailBody) {
    	var greeting = "Hello "+recipient+",\\n\\n"+emailBody+"\\n\\nSincerely,\\n"+sender
    	return greeting;
    }

    print("formatLetter");
    test(formatLetter("James", "Richard", "Things are well."), "Hello James,\\n\\nThings are well.\\n\\nSincerely,\\nRichard");
    print(separator);

// EX 2

/*
	Complete the sliceItAndCombineIt function. This function should:

    take a string and four indices (numbers)
    return a new string which is the concatenation of two substrings marked by the first and second index of each pair of indices.
    */
    function sliceItAndCombineIt(str, index1, index2, index3, index4) {
    	sousChaine= str.slice(index1, index2) + str.slice(index3, index4);
    	return sousChaine;
    }

    print("sliceItAndCombineIt");
    test(sliceItAndCombineIt("This is a Test", 0, 4, 5, 7), "Thisis");
    test(sliceItAndCombineIt("This is a Test", 0, 4, 1, 2), "Thish");
    print(separator);

// EX 3

/*
	Complete the findFirstMatch function. This function should:

    Take two strings as arguments. The first string is the one to search, the second is the one to search for.
    Return the position (i.e. index) of the first match of string being searching for
    */
    function findFirstMatch(str, subStr) {
    	pos = str.indexOf(subStr);
    	return pos;
    }

    print("findFirstMatch");
    test(findFirstMatch("Roses are red", "re"), 7);
    test(findFirstMatch("Running in the rain", "in"), 4);
    test(findFirstMatch("Lord of the ring the return of the king", "of"), 5);
    test(findFirstMatch("Lord of the ring the return of the king", "lord"), -1);
    print(separator);

// EX 4

/*
	Complete the findLastMatch function. This function should:

    Take two strings as arguments. The first string is the one to search, the second is the one to search for
    Return the position (a.k.a. the index) of the last match of string we're searching for
    Do not use indexOf built in method.
    */
    function findLastMatch(str, subStr) {
    	pos = str.lastIndexOf(subStr);
    	return pos;
    }

    print("findLastMatch");
    test(findLastMatch("Roses are red", "re"), 10);
    test(findLastMatch("The is a rainbow in the sky", "he"), 21);
    test(findLastMatch("Roses are red", "are"), 6);
    test(findLastMatch("The program is correct", "the"), -1);
    print(separator);

// EX 5

/*
	Complete the substringBetweenMatches function. This function should:

    Take two strings as arguments. The first string is the one to search, the second is the one to search for
    Return the substring between the first match and the last match
    Not include the first match or the last match in the returned substring
    */
    function substringBetweenMatches(str, subStr) {
    	var deb = str.indexOf(subStr) + subStr.length;
    	var fin = str.lastIndexOf(subStr);
    	var res = str.slice(deb,fin);
    	return res;
    }

    print("substringBetweenMatches");
    test(substringBetweenMatches("Roses are red, apples are really red.", "red"), ", apples are really ");
    print(separator);

// Ex 6
/*
	Given an int count of a number of donuts, return a string
	of the form 'Number of donuts: <count>', where <count> is the number
	passed in. However, if the count is 10 or more, then use the word 'many'
	instead of the actual count.
	So donuts(5) returns 'Number of donuts: 5'
	and donuts(23) returns 'Number of donuts: many'	
	*/
	function donuts(count) {
		var message ="";
		if (count >= 10) {
			message = "Number of donuts: many";
		} else {
			message = "Number of donuts: " + count;
		}
		return message;
	}

	print("donuts");
	test(donuts(5), "Number of donuts: 5");
	test(donuts(9), 'Number of donuts: 9');
	test(donuts(10), 'Number of donuts: many');
	test(donuts(99), 'Number of donuts: many');
	print(separator);

// Ex 7
/*
	Given a string s, return a string made of the first 2
	and the last 2 chars of the original string,
	so 'spring' yields 'spng'. However, if the string length
	is less than 2, return instead the empty string.
	*/
	function both_ends(str) {
		var long = str.length-2;
		var str1 = "";
		if (str.length > 2) {
			str1 = str.slice(0,2)+ str.slice(long,long+2);
		}
		else {
			str1="";
		}
		return str1;
	}

	print('both_ends');
	test(both_ends('spring'), 'spng');
	test(both_ends('Hello'), 'Helo');
	test(both_ends('a'), '');
	test(both_ends('xyz'), 'xyyz');
	print(separator);

// Ex 8

/*
	Given a string s, return a string
	where all occurences of its first char have
	been changed to '*', except do not change
	the first char itself.
	e.g. 'babble' yields 'ba**le'
	Assume that the string is length 1 or more.
	Hint: s.replace(stra, strb) returns a version of string s
	where all instances of stra have been replaced by strb.
	*/
	function fix_start(str) {
		var char = str[0];
		var newstr = "";

		for (var i = 1; i < str.length; i++) {
			if (str[i] == char) {
				newstr = newstr + "*";
			} else {
				newstr = newstr + str[i];
			}
		}
		
		return char + newstr;
	}

	print('fix_start');
	test(fix_start('babble'), 'ba**le');
	test(fix_start('aardvark'), 'a*rdv*rk');
	test(fix_start('google'), 'goo*le');
	test(fix_start('donut'), 'donut');
	print(separator);

// Ex 9
/*
	Given strings a and b, return a single string with a and b separated
	by a space '<a> <b>', except swap the first 2 chars of each string.
	e.g.
	  'mix', pod' -> 'pox mid'
	  'dog', 'dinner' -> 'dig donner'
	Assume a and b are length 2 or more.
	*/
	function mix_up(a, b) {
		
		var str1 = a.replace(a[0]+a[1] , b[0]+b[1]);
		var str2 = b.replace(b[0]+b[1] , a[0]+a[1]);
		return str1 +" " + str2;
	}

	print('mix_up');
	test(mix_up('mix', 'pod'), 'pox mid');
	test(mix_up('dog', 'dinner'), 'dig donner');
	test(mix_up('gnash', 'sport'), 'spash gnort');
	test(mix_up('pezzy', 'firm'), 'fizzy perm');
	print(separator)

// Ex 10
/*
	Given a string, if its length is at least 3,
	add 'ing' to its end.
	Unless it already ends in 'ing', in which case
	add 'ly' instead.
	If the string length is less than 3, leave it unchanged.
	Return the resulting string.
	*/
	function verbing(str) {
		var res = "";
		var str1 = str.slice(str.length-3,str.length)
		if (str.length < 3) {
			res = str;
		} else if (str1 == "ing") {
			res =str + "ly";
		} else {
			res = str + "ing" ;
		}
		return res;
	}

	print("verbing");
	test(verbing('hail'), 'hailing');
	test(verbing('swiming'), 'swimingly');
	test(verbing('do'), 'do');
	print(separator);

// Ex 11
/*
	Given a string, find the first appearance of the
	substring 'not' and 'bad'. If the 'bad' follows
	the 'not', replace the whole 'not'...'bad' substring
	with 'good'.
	Return the resulting string.
	So 'This dinner is not that bad!' yields:
	This dinner is good!
	*/
	function not_bad(str) {
		var res = "";
		a = str.indexOf("not");
		b = str.indexOf("bad");
		if (a < b) {
			res = str.replace(str.slice(a,b+3),"good");
		} else {
			res = str ;
		}
		return res;
	}

	print('not_bad')
	test(not_bad('This movie is not so bad'), 'This movie is good');
	test(not_bad('This dinner is not that bad!'), 'This dinner is good!');
	test(not_bad('This tea is not hot'), 'This tea is not hot');
	test(not_bad("It's bad yet not"), "It's bad yet not");
	print(separator);

// Ex 12
/*
	Consider dividing a string into two halves.
	If the length is even, the front and back halves are the same length.
	If the length is odd, we'll say that the extra char goes in the front half.
	e.g. 'abcde', the front half is 'abc', the back half 'de'.
	Given 2 strings, a and b, return a string of the form
	 a-front + b-front + a-back + b-back
	 */
	 
	 

	 function odd_even(str){
	 	var l=[];
	 	if (str.length%2==0){
	 		l[0]=str.slice(0,str.length/2);
	 		l[1]=str.slice(str.length/2,str.length);
	 		return l ;
	 	}else  {
	 		l[0]=str.slice(0,str.length/2+1);
	 		l[1]=str.slice(str.length/2+1,str.length);
	 		return l;
	 	}

	 }
	 function front_back(str1, str2) {
	 	var a_front='';
	 	var a_back='';
	 	var b_front='';
	 	var b_back='';
	 	var arr1=odd_even(str1);
	 	var arr2=odd_even(str2);
	 	var str=arr1[0]+arr2[0]+arr1[1]+arr2[1];
	 	return str;


	 }
	 
	 

	 print('front_back')
	 test(front_back('abcd', 'xy'), 'abxcdy');
	 test(front_back('abcde', 'xyz'), 'abcxydez');
	 test(front_back('Kitten', 'Donut'), 'KitDontenut');
	 print(separator);