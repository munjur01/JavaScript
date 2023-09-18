let re;
let str;

/*
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/; // Must start with h or a
re = /[A-Z]ello/; // Start with Uper Case
re = /^[A-Z]/; // First Letter must be upper case
re = /^[a-z]/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // Not digit
re = /^[0-9][0-9][0-9]ello/; // three digits
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// Braces {} - Quantifier
re = /el{2}o/; // Must occur exactly 2 times
re = /el{3}o/; 
re = /hel{2,5}o/; // Range
re = /hel{2,}o/; // At least 2 times

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^+8801[0-9]{9}$/;
*/


// Shorthand Character Classes
re = /w/; // Word Character - alpha numeric or _
re = /w+/; // One or more
re = /W/; // Non Word Character
re = /W+/; // one or more
re = /d/; // Digit
re = /d+/;
re = /D/; // Non digit
re = /s/; // Match white space
re = /S/; // Match non white space
re = /Hellob/; // Word Boundary
re = /bHellob/;

// Assertions
re = /x(?=yz)/; // Matches x only if x is before y
re = /x(?!yz)/;

str = "fsdfxyzfdsf";

console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
} 