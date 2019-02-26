var relevance = {
	number: +prompt('Введите число от 0 до 999: '),
	item: 0,
	dozen: 0,
	century: 0,
};
if(relevance.number <= 9) {
	console.log('А слабо число побольше ввести?');
} else if(relevance.number <= 999) {
	relevance.item = Math.floor(relevance.number % 10); // Возвращаем наибольшое целое число // % остаток от деления
	relevance.dozen = Math.floor(relevance.number / 10 % 10); // Возвращаем наибольшое целое число // % остаток от деления
	relevance.century = Math.floor(relevance.number / 100 % 10); // Возвращаем наибольшое целое число // % остаток от деления
} else {
	relevance.number === 0;
	console.log('Вы ввели неверное значение, ай яй');
}
console.log(relevance);

