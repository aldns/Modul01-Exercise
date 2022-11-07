var input = parseInt(prompt("Masukan jumlah hari"))

var year = 360, month = 30, week = 7

//tahun
var resultYear = input/year

var leftYear = input%year

//month
var resultMonth = leftYear/month

var leftMonth = leftYear%month

//week
var resultWeek = resultMonth/week

var leftWeek = resultMonth%week

//days
var resultDays = leftWeek/1

alert(`Total ${resultYear} ${resultMonth} ${resultWeek} ${resultDays}`)