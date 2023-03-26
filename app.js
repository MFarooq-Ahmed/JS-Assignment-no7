//               *********** Chapter no26to30 **********
//                   **********Question no01 *********

// Importing necessary modules
// from IPython.display import display, HTML
// import math

// # Taking input from the user
// num = int(input("Enter a positive integer: "))

// # Calculating rounded, floor, and ceil values
// rounded_num = round(num)
// floor_num = math.floor(num)
// ceil_num = math.ceil(num)

// # Creating HTML table to display the values
// table = "<table><tr><th>Value</th><th>Result</th></tr>"
// table += "<tr><td>Number</td><td>{}</td></tr>".format(num)
// table += "<tr><td>Rounded Value</td><td>{}</td></tr>".format(rounded_num)
// table += "<tr><td>Floor Value</td><td>{}</td></tr>".format(floor_num)
// table += "<tr><td>Ceil Value</td><td>{}</td></tr>".format(ceil_num)
// table += "</table>"

// # Displaying the table in the browser
// display(HTML(table))


//                   **********Question no02 *********


// import math
// from flask import Flask, request

// app = Flask(_name_)

// @app.route('/', methods=['GET', 'POST'])
// def display():
//     if request.method == 'POST':
//         number = float(request.form['number'])
//         round_off = round(number)
//         floor_val = math.floor(number)
//         ceil_val = math.ceil(number)
//         return f"""
//         <h3>Input number: {number}</h3>
//         <h3>Round off value: {round_off}</h3>
//         <h3>Floor value: {floor_val}</h3>
//         <h3>Ceil value: {ceil_val}</h3>
//         """
//     else:
//         return """
//         <form method='post'>
//         <label for='number'>Enter a negative floating point number:</label>
//         <input type='number' step='0.01' name='number' required>
//         <input type='submit' value='Submit'>
//         </form>
//         """

// if _name_ == '_main_':
//     app.run(debug=True)


//                   **********Question no03 *********

// number = float(input("Enter a number: "))
// abs_value = abs(number)
// print(f"The absolute value of {number} is {abs_value}")
// Enter a number: -4
// The absolute value of -4.0 is 4.0
// Enter a number: 5
// The absolute value of 5.0 is 5.0


//                   **********Question no04 *********


// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Dice Simulator</title>
// </head>
// <body>
// 	<h1>Dice Simulator</h1>
// 	<p>Click the button to roll the dice:</p>
// 	<button onclick="rollDice()">Roll Dice</button>
// 	<p id="diceValue"></p>
// 	<script>
// 		function rollDice() {
// 			// Generate a random number between 1 and 6 (inclusive)
// 			var diceValue = Math.floor(Math.random() * 6) + 1;
// 			// Display the result in the browser
// 			document.getElementById("diceValue").innerHTML = "You rolled a " + diceValue;
// 		}
// 	</script>
// </body>
// </html>

//                   **********Question no05 *********

// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Coin Toss Simulator</title>
// </head>
// <body>
// 	<h1>Coin Toss Simulator</h1>
// 	<p>Click the button to toss the coin:</p>
// 	<button onclick="tossCoin()">Toss Coin</button>
// 	<p id="coinValue"></p>
// 	<script>
// 		function tossCoin() {
// 			// Generate a random number between 0 and 1
// 			var tossValue = Math.floor(Math.random() * 2);
// 			// Determine the result based on the random number
// 			var result = (tossValue == 0) ? "heads" : "tails";
// 			// Display the result in the browser
// 			document.getElementById("coinValue").innerHTML = "You tossed " + result;
// 		}
// 	</script>
// </body>
// </html>

//                   **********Question no06 *********

// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Random Number Generator</title>
// </head>
// <body>
// 	<h1>Random Number Generator</h1>
// 	<p>Click the button to generate a random number:</p>
// 	<button onclick="generateNumber()">Generate Number</button>
// 	<p id="randomNumber"></p>
// 	<script>
// 		function generateNumber() {
// 			// Generate a random number between 1 and 100
// 			var randomNumber = Math.floor(Math.random() * 100) + 1;
// 			// Display the result in the browser
// 			document.getElementById("randomNumber").innerHTML = "Random number: " + randomNumber;
// 		}
// 	</script>
// </body>
// </html>


//                   **********Question no07 *********


// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Weight Converter</title>
// </head>
// <body>
// 	<h1>Weight Converter</h1>
// 	<p>Please enter your weight:</p>
// 	<input type="text" id="weightInput">
// 	<button onclick="convertWeight()">Convert</button>
// 	<p id="result"></p>
// 	<script>
// 		function convertWeight() {
// 			// Get the user input
// 			var userInput = document.getElementById("weightInput").value;
// 			// Remove any non-numeric characters from the input
// 			var numericInput = userInput.replace(/[^\d.-]/g, '');
// 			// Convert the input to a number
// 			var weight = parseFloat(numericInput);
// 			// Determine the unit of the input
// 			var unit = userInput.replace(numericInput, '').toLowerCase();
// 			// Convert the weight to kilograms based on the unit
// 			if (unit == "kg" || unit == "kgs" || unit == "kilogram" || unit == "kilograms") {
// 				// The input is already in kilograms
// 				var weightInKg = weight;
// 			} else if (unit == "lbs" || unit == "pounds") {
// 				// Convert pounds to kilograms
// 				var weightInKg = weight * 0.45359237;
// 			} else {
// 				// Assume the input is in kilograms
// 				var weightInKg = weight;
// 			}
// 			// Display the result in the browser
// 			document.getElementById("result").innerHTML = "Your weight is " + weightInKg.toFixed(2) + " kilograms.";
// 		}
// 	</script>
// </body>
// </html>


//                   **********Question no08 *********

// Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask the user to input a number between 1 and 10
// var userInput = prompt("Guess a number between 1 and 10:");

// // Check if the user input equals the secret number
// if (parseInt(userInput) === secretNumber) {
//     // Congratulate the user
//     alert("Congratulations! You guessed the secret number.");
// } else {
//     // Inform the user that their guess was incorrect
//     alert("Sorry, your guess was incorrect. The secret number was " + secretNumber + ".");
// }

