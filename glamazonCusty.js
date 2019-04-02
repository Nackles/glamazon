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

var serverTracker;

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
        connection.query("SELECT * FROM glamazon_db.products", function (err, res) {
            if (err) throw err;
            console.table(res);
            // Sell'em the goods.
            serverTracker = res;
            sellGoods(serverTracker);
        });
    })

}

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
    ]).then(function (user, res) {
        if (!user.buyid) {
            console.log("We don't carry them goods. Try to buy something I've got.")
            sellGoods();
        } else if (user.buyamt < serverTracker[user.buyid-1].stock_quantity) {
            // TODO: SUBTRACT THE AMOUNT PURCHSED FROM STOCK_QUANTITY
            console.log("That's an item that exists.")
            
        } else {
            console.log("We don't have that many. Were the pit of "+serverTracker[user.buyid-1]+" so bottomless!");
        }
    })


}