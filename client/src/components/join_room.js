import React from 'react';
import '../App.css';

import NavBar from "./NavBar";


const join_room = () => {
  return(
<>
<NavBar/>

<div className="join_room">
  <h1>Join Room</h1>
  <div className = "room_container"> Rooms go in here </div>
</div>

</>

  )

}

export default join_room;
