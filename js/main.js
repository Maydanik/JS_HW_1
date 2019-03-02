// Task 1 -Strings

let string = 'some test string';

//1. Получить первую и последнюю буквы строки
alert(string.charAt(0));
alert(string[0]);
alert(string.charAt(string.length-1));
alert(string[string.length-1]);

//2. Сделать первую и последнюю буквы в верхнем регистре
let string_2 = '';
string_2 = (string[0].toUpperCase() + string.slice(1, -1) + string[string.length-1].toUpperCase());
alert(string_2);

//3. Найти положение слова ‘string’ в строке

string_2 = 'string';
let pos = -1;
while ((pos = string.indexOf(string_2, pos + 1)) != -1) {
    alert( pos );
  }

//4. Найти положение второго пробела (“вручную” ничего не считать)
string_2 = ' ';
for( let i = 0; i < string.length; i++){
    pos = string.indexOf(string_2, pos);
    if(i == 1 ){
        alert( pos );
        break;
    }
    pos++;
}

//5. Получить строку с 5-го символа длиной 4 буквы
alert(string_2 = "'" + string.slice(4, 9) + "'");

//6. Получить строку с 5-го по 9-й символы
alert(string_2 = "'" + string.slice(4, 9) + "'");

//7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
alert(string_2 = "'" + string.slice(0, -6) + "'");

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20, b = 16;
string = `${a}${b}`;
alert(string);

// Task 2 -Numbers

//1. Получить число pi из Math и округлить его до 2-х знаков после точки
const PI = Math.PI;
alert(Math.round(PI *100) /100);//более точный результат
alert(PI.toFixed(2));

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let max, min;
alert(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
alert(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
//b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
let a, b;
a = ((Math.round(Math.random()*100)/100));
b = Math.random() * 100;//формула Math.random() * (max - min) + min;

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
alert(0.6 + 0.7);//1.2999999999999998
alert( (0.6 * 10 + 0.7 * 10) / 10 );//1.3
var result = 0.6 + 0.7;
alert( +result.toFixed(10) );//1.3

//5. Получить число из строки ‘100$’
let str = '100$';
alert(parseInt(str));