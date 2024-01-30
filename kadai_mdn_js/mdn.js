const today = new Date();

const today2 = { year: today.getFullYear(), month: today.getMonth() + 1, date: today.getDate()};

console.log(today2.year + '年' + today2.month + '月' + today2.date + '日')

