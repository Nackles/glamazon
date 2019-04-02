let mysql = require("mysql");
let inquirer = require("inquirer");
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "admin",
  password: "admin",
  database: "product_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //   connection.end();
  //   // addProduct();
  viewItems();
});

function viewItems() {
  connection.query("SELECT * FROM product", function(err, result) {
    if (err) throw err;
    console.table(result);
    userInput();
  });
}

function userInput() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Whatchoo wanna do?",
        choices: ["PLACE A BID", "POST AN ITEM", "EXIT"],
        name: "userchoice"
      }
    ])
    .then(function(action) {
      connection.query("SELECT * FROM product", function(err, result) {
        if (err) throw err;
        console.log(action);
        if (action.userchoice === "EXIT") {
          console.log("Go grab a coffee and take a walk");
          connection.end();
        } else if (action.userchoice === "PLACE A BID") {
          console.log("Place a bid");
          placeBid();
        } else if (action.userchoice === "POST AN ITEM") {
          console.log("POST");
          connection.end();
        }
      });
    });
}

function placeBid() {
  connection.query("SELECT * FROM product", function(err, result) {
    if (err) throw err;
    let bidItems = [];
    for (i = 0; i < result.length; i++) {
      console.log(result[i].item_name);
      console.log(result[i].current_bid);
      bidItems.push(result[i].item_name);
    }
    inquirer
      .prompt([
        {
          type: "list",
          choices: bidItems,
          message: "Which item are you bidding on?",
          name: "itemBiddingOn"
        },
        {
          type: "number",
          message: "Place a bid of a numerical value in dollahz",
          name: "bid"
        }
      ])
      .then(function(bidAmount) {
        console.log(bidAmount.itemBiddingOn);
        connection.query(
          "SELECT * FROM product WHERE ?",
          {
            item_name: bidAmount.itemBiddingOn
          },
          function(err, result) {
            if (err) {
              console.log(err);
            }
            console.log("THIS IS RESULT", result);
            // if (bidAmount.bid > result.current_bid) {
            //   console.log(result[0]);
            // }
            connection.end();
          }
        );
      });
    //compare the amount the bidder is offering to the existing bid in the table
    //if higher, override existing table bid
    //if not higher, not a valid bid
  });
}

// grab database values
// compare user input to database value of bid
// then if higher / else lower then recall bid function to then set higer bid or exit
//if higher, run update function
