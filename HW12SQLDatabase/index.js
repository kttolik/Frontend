const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "street",
    password: "147369"
});

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// #1
// const getData = "SELECT COUNT(ID) AS count FROM street.person";
// #2
// const getData = "SELECT AVG(Age) AS Average_age FROM Person";
// #3
// const getData = "SELECT DISTINCT LastName FROM street.person ORDER BY LastName";
// #4
// const getData = "SELECT LastName, COUNT(*) FROM street.person GROUP BY LastName";
// #5
// const getData = "SELECT LastName FROM street.person WHERE LastName LIKE '_%б%_' GROUP BY LastName;";
// #6
//const getData = "SELECT * FROM street.person WHERE ID_Street IS Null";
//#7
//const getData = "SELECT * FROM street.person WHERE AGE < 18 AND ID_Street =5;";
// #8
// const getData = "SELECT street.street.id, street.street.name, COUNT(street.person.id) FROM street.street JOIN street.person ON street.street.id = street.person.id_street GROUP BY street.street.id, street.street.name;";
// #9
// const getData = "SELECT * FROM street.street WHERE length(Name) = 12;";
// #10
 const getData = "SELECT street.street.id, street.street.name FROM street.street JOIN street.person ON street.street.id = street.person.id_street GROUP BY street.street.id, street.street.name HAVING COUNT(street.person.id) < 3;";


connection.query(getData, function(err, results) {
    if(err) console.log(err);
    console.log(results);
});

connection.end();