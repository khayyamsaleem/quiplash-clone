import React from 'react';
import './game.css';
import { Alert, ListGroup } from 'react-bootstrap';
import Header from "../../components/header";

// keep track of the current round
var roundNumber = 1;

// initialize dictionary with mock data
var dict = {};
dict["Disha"] = 3200;
dict["Jody"] = 160;
dict["Larry"] = 1530;
dict["Rebecca"] = 580;
dict["Richard"] = 300;
dict["Amos"] = 2270;
dict["Dominique"] = 850;
dict["Fife"] = 2870;
// console.log(dict["Larry"]);

// add comparison function to sort in descending order
function Compare(a, b) {
   if (a[1] < b[1]) return 1;
   if (a[1] > b[1]) return -1;
   return 0;
}

var scoresArray = [];
// iterate through keys of the dictionary
function SortScores(dictionary) {
  for (var key in dictionary) {
    const value = dictionary[key];
    // allow array of arrays to be sorted by second index
    scoresArray.push([key, value]);
  }
}

// run the function to alter scoresArray
SortScores(dict);
// console.log(scoresArray)

// scoresArray should now be sorted based on scores
scoresArray = scoresArray.sort(Compare);
// console.log(scoresArray)

// checks if the game contains a tie in points at the top
var containsTie = false;
// count number of times the maximum value of the array occurs overall in the array
var maxCount = 0;
// gets the highest value (the second value of the first array in scoresArray)
var maxVal = scoresArray[0][1];


for (var arr in scoresArray) {
  if (arr[1] === maxVal) {
    // increment maxCount for all occurences of the max
    maxCount += 1;
  }
}

// if maxCount occurs ultiple times there are more than one max values
var winners = "";
if (containsTie) {
  // format differs based on the number of people tied at the top
  if (maxCount === 2) {
    winners += scoresArray[0][0] + " and " + scoresArray[1][0];
  } else {
    var i;
    for (i = 0; i < maxCount - 1; i++) {
      winners += scoresArray[i][0] + ', ';
    }
    // next line applies only for the final value to format the 'and'
    winners += 'and ' + scoresArray[maxCount - 1][0];
  }

}

// begin text to be input into the JSX
var text = "<ListGroup.Item> Name \t Score </ListGroup.Item>";

// function to convert all other elements of the array into list format
function Listify(value) {
  text += "<ListGroup.Item>" + value[0] + '\t' + value[1] + "</ListGroup.Item>";
}

// call the aforementioned function
scoresArray.forEach(Listify);
// console.log(text)

// make the Scoreboard just the ListGroup if it's round 1 or 2
// if it's the final round it will also reveal the winner
// if there are multiple winners (tie game), it will show them all
var Scoreboard;
if (roundNumber === 1 || roundNumber === 2) {
  Scoreboard = () => {
    return(
  <><Header>
    <ListGroup>
      {text}
    </ListGroup>
    </Header>
  </>

    )

  }
} else {
  if (containsTie) {
    Scoreboard = () => {
      return(
    <><Header>
      <ListGroup>
        {text}
      </ListGroup>
      <Alert variant="primary">
        Tie! The winners are {winners}
      </Alert>
      </Header>
    </>

      )

    }
  } else {
    Scoreboard = () => {
      return(
    <><Header>
      <ListGroup>
        {text}
      </ListGroup>
      <Alert variant="primary">
        The winner is {scoresArray[0][0]}
      </Alert>
      </Header>
    </>

      )

    }
  }
}

export default Scoreboard;
