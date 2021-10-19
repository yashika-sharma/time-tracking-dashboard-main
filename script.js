function toggleView(state) {
	const e = document.getElementsByClassName("current");
	console.log(e);
	data.forEach((item) => {});
}

function handleWeekly() {
	document.getElementById("weekly").className = "active";
	document.getElementById("daily").className = "inactive";
	document.getElementById("monthly").className = "inactive";
	toggleView("weekly");
}

function handleDaily() {
	document.getElementById("weekly").className = "inactive";
	document.getElementById("daily").className = "active";
	document.getElementById("monthly").className = "inactive";
}

function handleMonthly() {
	document.getElementById("weekly").className = "inactive";
	document.getElementById("daily").className = "inactive";
	document.getElementById("monthly").className = "active";
}
