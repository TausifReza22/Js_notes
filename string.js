//JAVASCRIPT IS CASE SENSTIVE LANGUAGE= >IT RECOGNIZES THE DIFFERENCE BETWEEN LOWERCASE AND UPPERCASE LETTERS.
//password = > Shiuvnahs@1232143 = >shivansh@1232143
//UPPERCASE LETTERS = > A-Z
//LOWERCASE LETTERS = > a-z

// String => Primitive data type, "" or '' or ` ${}`, Immutable
//String Methods.

//1. length => It is used to return the length of a string. str.length

// let a = "Hello World";
// console.log(a.length, "This is the length of a string");

//2. toUpperCase() => It is used to convert a string to uppercase. str.toUpperCase()
// let b = "Hello World";
// console.log(b.toUpperCase(), "This is the string in uppercase");

//3. toLowerCase() => It is used to convert a string to lowercase. str.toLowerCase()
// let c = "Hello World";
// console.log(b.toLowerCase(), "This is the string in uppercase");

//4. charAt() => It is used to return the character at a specified index. str.charAt(index)
// console.log(a.charAt(0), "This is the character at a specified index");

//5. charCodeAt() => It is used to return the Unicode of the character at a specified index. str.charCodeAt(index)
// console.log(a.charCodeAt(0), "This is the Unicode of the character at a specified index");

//6. concat() => It is used to join two or more strings. str.concat(string1, string2, string3)
// let text = "Helllo";

// let bcs = "World";

// console.log(text.concat(" ", bcs), "This is the joined string"); + operator

//Trim => It is used to remove the white spaces from both ends of a string. str.trim()
// Trim start => It is used to remove the white spaces from the start of a string. str.trimStart()
// Trim end => It is used to remove the white spaces from the end of a string. str.trimEnd()
// let string = "   Hello World   ";

// console.log(string.trimEnd(), "This is the trimmed string");

//7. slice method => It is used to extract a part of a string and returns a new string. str.slice(start, end)
// let string = "Hello World";
// console.log(string.slice(4,1), "This is the sliced string");

//8. substring() => It is used to extract a part of a string and returns a new string. str.substring(start, end)
// console.log(string.substring(4,1), "This is the sliced string");

//9. substr() => It is used to extract a part of a string and returns a new string. str.substr(start, length)
// console.log(string.substr(1,3), "This is the sliced string");

//replace() => It is used to replace a specified value with another value in a string. str.replace(value1, value2)

// let string = "Hello World";
// console.log(string.replace("Hell", "Hi"), "This is the replaced string");


//10. replaceAll() => It is used to replace all the occurrences of a specified value with another value in a string. str.replaceAll(value1, value2)
// console.log(string.replaceAll("Hello", "Hi"), "This is the replaceAll string");


//11. repeat() => It is used to repeat a string a specified number of times. str.repeat(count)

// console.log(string.repeat(2), "This is the repeated string");


// //12. split() => It is used to split a string into an array of substrings. str.split(separator, limit)
// let string = "Hello World  dasfsd fsd sd|fsd|sdfsd" ;
// let string2 = string.split(" ").join("|"); = >["Hello", "World", "dasfsd", "fsd", "sd|fsd|sdfsd"]
// console.log(string2.split("|"), "This is the split string");

//13. includes() => It is used to check whether a string contains a specified value. str.includes(value, start). It returns a boolean value.
// console.log(string.includes('He',2), "This is the includes string");


//14. startsWith() => It is used to check whether a string starts with a specified value. str.startsWith(value, start)
// console.log(string.startsWith('L',2), "This is the startsWith string");


//15. endsWith() => It is used to check whether a string ends with a specified value. str.endsWith(value, length)
// let string = "Hello World";
// console.log(string.endsWith('o',11), "This is the endsWith string");