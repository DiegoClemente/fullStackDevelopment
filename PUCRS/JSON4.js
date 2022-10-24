var json = '{"name": "John Doe", "brith": "2017-11-30T12:00:00", "city": "Porto Alegre"}'

var obj = JSON.parse(json, function (key, value) {
    if (key == "brith") {
        return new Date(value);
    }
    return value;
});

console.log("Nome: " +obj.name);
console.log("Data Nascimento: " +obj.brith);