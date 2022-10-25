let numbers = [1, 4, 6, 3, 2];
function weekNumbersToWords(array) {
  days = [];
  for (let index = 0; index < numbers.length; index++) {
    switch (numbers[index]) {
      case 1:
        days.push("Monday");
        break;
      case 2:
        days.push("Tuesday");
        break;
      case 3:
        days.push("Wednesday");
        break;
      case 4:
        days.push("Thursday");
        break;
      case 5:
        days.push("Friday");
        break;
      case 6:
        days.push("Saturday");
        break;
      case 7:
        days.push("Sunday");
        break;
    }
  }
  console.log(days);
}
weekNumbersToWords(numbers);
