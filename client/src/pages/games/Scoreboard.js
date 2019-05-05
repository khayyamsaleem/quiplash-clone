import React from 'react';
import './create.css';
import { Alert, ListGroup } from 'react-bootstrap';
import Header from "../../components/header";

// keep track of the current round
var roundNumber = 1;

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

function Compare(a, b) {
   if (a[1] < b[1]) return 1;
   if (a[1] > b[1]) return -1;
   return 0;
}

var scoresArray = [];
function SortScores(dictionary) {
  for (var key in dictionary) {
    const value = dictionary[key];
    scoresArray.push([key, value]);
  }
}

SortScores(dict);
// console.log(scoresArray)

scoresArray = scoresArray.sort(Compare);
// console.log(scoresArray)

var containsTie = false;
var maxCount = 0;
var maxVal = scoresArray[0][1];

for (var arr in scoresArray) {
  if (arr[1] === maxVal) {
    maxCount += 1;
  }
}

if (maxCount > 1) containsTie = true;
var winners = "";
if (containsTie) {
  if (maxCount === 2) {
    winners += scoresArray[0][0] + " and " + scoresArray[1][0];
  } else {
    var i;
    for (i = 0; i < maxCount - 1; i++) {
      winners += scoresArray[i][0] + ', ';
    }
    winners += 'and ' + scoresArray[maxCount - 1][0];
  }

}

function Listify(value) {
  text += "<ListGroup.Item>" + value[0] + '\t' + value[1] + "</ListGroup.Item>";
}

var text = "<ListGroup.Item> Name \t Score </ListGroup.Item>";
scoresArray.forEach(Listify);
console.log(text)

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
