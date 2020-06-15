'use strict'
var lang = 'ru';
if (lang == 'ru') {
	var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
alert(arr);
//switch case

var lang = 'ru';
switch (lang) {
	case 'ru':
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
alert(arr);
//через многомерный массив 

var lang = 'ru';
var arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);

let namePerson = 'Артем';
let result = true ? 'директор' : 'не директор';
console.log('результат', result);

let namePerson = 'Максим';
let result = true ? 'Преподаватель' : 'не преподаватель';
console.log('результат', result);

let namePerson = 'Алехандро';
let result = true ? 'студент' : 'не студент';
console.log('результат', result);