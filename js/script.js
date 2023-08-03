function updateTimer() {
	future = Date.parse("Sep 03, 2023 18:00:00");
	now = new Date();
	diff = future - now;
   
	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours = Math.floor(diff / (1000 * 60 * 60));
	mins = Math.floor(diff / (1000 * 60));
	secs = Math.floor(diff / 1000);
   
	d = days;
	h = hours - days * 24;
	m = mins - hours * 60;
	s = secs - mins * 60;
   
	document.getElementById("timer").innerHTML =
	  "<div>" +
	  d +
	  "<span>დღე</span></div>" +
	  "<div>" +
	  h +
	  "<span>საათი</span></div>" +
	  "<div>" +
	  m +
	  "<span>წუთი</span></div>" +
	  "<div>" +
	  s +
	  "<span> წამი</span></div>";
  }
  setInterval("updateTimer()", 1000);
