import React from "react";

// 

const timer = () => {
	return(
		//
	)
}


  return(
<>
  <div className="create">
  <Header/>
  <Jumbotron>
    <h1>Round #</h1>
    <p>
      SAMPLE PROMPT HERE
    </p>
  </Jumbotron>
  <Row>
    <Col>
      {/* we need to figure out how to hold button animation until all
        user votes go through or time runs out */}
      <Nav.Link href="#"><Button variant="light">QUIP 1 HERE </Button></Nav.Link>
    </Col>
    <Col>
      <Nav.Link href="#"><Button variant="dark">QUIP 2 HERE</Button></Nav.Link>
    </Col>
  </Row>
  </div>
</>

  )

}

// 

<button onclick="setTimeout(myFunction, 90000)">timer</button>

<script>
	function myFunction() {
		alert("time over");
	}
</script>

// notes: https://robdodson.me/building-a-countdown-timer-with-socket-dot-io/

var countdown = 90000;

timer(function() {
	countdown--;

	io.sockets.emit("timer", {countdown: countdown});

}, 5000);

io.sockets.on("on", function(socket) {
	socket.on("reset", function(data) {
		countdown = 90000;

		io.sockets.emit("timer", {countdown: countdown});
	});
});