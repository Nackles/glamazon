//Require your packages.
let inquirer = require('inquirer')
let mysql = require('mysql')
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "glamazon_db"
});

//Show'em the Goods.
showGoods();

//Function to show'em the Goods.
function showGoods() {
    //Connect to the database.
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
        //Display'em the goods.
        console.log("Here's the goods...\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            console.table(res);
            connection.end();
        });
    })
    sellGoods();
}

//Sell'em the goods.
sellGoods();

//Function to sell'em the Goods. Get you some.
function sellGoods() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the Product ID of the item you wish to purchase with your Real Mars Dollars?",
            name: "buyid"
        },
        {
            type: "input",
            message: "How many do you wish to buy?",
            name: "buyamt"
        }
    ]).then(function (user) {
        connection.connect(function (err) {
            if (err) throw err;
            console.log("connected as id " + connection.threadId + "\n");
            //TODO: FORMAT THE QUERY TO RETURN A VALUE TO COMPARE to USER.BUYAMT
            connection.query("SELECT * FROM products WHERE ", function (err, res) {
                if (err) throw err;
                console.table(res);
                connection.end();
            });
        });

        console.log("YEW FECKIN DEED IT LAD", res)

    })


}
connection.end();
