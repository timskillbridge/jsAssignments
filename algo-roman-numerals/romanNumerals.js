function toRomanLazy(num) {

let output = ""
let romanNumeralPriorityOrder  = ["M","D","C","L","X","V","I"]

let romanNumeralToArabic  = {
"I" : 1,
"V" : 5,
"X" : 10,
"L" : 50,
"C" : 100,
"D" : 500,
"M" : 1000
}

for (x = 0; x < romanNumeralPriorityOrder.length;x++) {
  tmp = Math.floor(num/romanNumeralToArabic[romanNumeralPriorityOrder[x]])
  
  if (tmp != 0){
    while(tmp >=1) {
    output += romanNumeralPriorityOrder[x]
    num -= romanNumeralToArabic[romanNumeralPriorityOrder[x]]
    tmp = Math.floor(num/romanNumeralToArabic[romanNumeralPriorityOrder[x]])
    }
  }
  
}
//console.log(output)
return output
}

function toRoman(num) {
  let output = ""
let romanNumeralPriorityOrder  = ["M","CM","D","CD","C","L","XL","X","V","IV","I"]

let romanNumeralToArabic  = {
"I" : 1,
"V" : 5,
"X" : 10,
"L" : 50,
"C" : 100,
"D" : 500,
"M" : 1000,
"IV" : 4,localStorage
"IX" : 9,
"XL" : 40,
"CD" : 400,
"CM" : 900
}

for (x = 0; x < romanNumeralPriorityOrder.length;x++) {
  tmp = Math.floor(num/romanNumeralToArabic[romanNumeralPriorityOrder[x]])
  
  if (tmp != 0){
    while(tmp >=1) {
    output += romanNumeralPriorityOrder[x]
    num -= romanNumeralToArabic[romanNumeralPriorityOrder[x]]
    tmp = Math.floor(num/romanNumeralToArabic[romanNumeralPriorityOrder[x]])
    }
  }
  
}
//console.log(output)
return output
}

module.exports = { toRoman, toRomanLazy };

console.log(toRomanLazy(19))
