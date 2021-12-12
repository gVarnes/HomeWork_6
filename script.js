//Задача 1 (которая индивидуальная)

let array = [];

for (let i = 1; i <= 100; i++) {
	array.push(i);
}

function filter(arr, filterForFunction) {
	let arrayWithDivision = [];

	for (let i = 0; i < arr.length; i++) {
		const elem = filterForFunction(arr[i]);
		if (elem !== undefined) arrayWithDivision.push(elem);
	}

	return arrayWithDivision;
}

function filterByDevideOnNumbers(item) {
	//Если элемент массива делится на 3 и на 5 тогда возвращаем в массив.
	if (item % 3 === 0 && item % 5 === 0) return item;
}

console.log(filter(array, filterByDevideOnNumbers))

//========================================================================================================================================================

//Задача 2 (из ДЗ.6)


let arrayWithMultiplyedElem = array.map(item => item * 3)

console.log(arrayWithMultiplyedElem);