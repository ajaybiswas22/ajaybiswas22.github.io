# Website of Ajay Biswas

Object.keys(testObj).sort(function(a, b) {
    return moment(b, 'DD/MM/YYYY').toDate() - moment(a, 'DD/MM/YYYY').toDate();
}).forEach(function(key) {
    orderedDates[key] = testObj[key];
})
