const names = ["Chiemelie", "Akachukwu", "Chiagozie", "Precious", "Nzube" ]

const familyName = names.map(name => `${name} Melikam`)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const multipyBy3 = numbers.map(number => number * 3);

const lessThanTwenty = multipyBy3.filter(number => number < 20)

console.log(familyName, lessThanTwenty);