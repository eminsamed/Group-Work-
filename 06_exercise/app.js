let days = [
  "Monday",
  "Thursday",
  "Saturday",
  "Wednesday",
  "Tuesday",
];

days.sort();
console.log(days);

days.sort(function getLastValue(a, b) {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
});
console.log(days);
