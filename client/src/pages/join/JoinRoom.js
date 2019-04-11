import React from 'react';
import './join.css';

import Header from "../../components/header";


const JoinRoom = () => {
  return(
<>
<Header/>

<div className="joinRoom">
  <h1>Join a Public Room</h1>
  <div className = "room_container"> Rooms go in here </div>
</div>

</>

  )

}

export default JoinRoom;
