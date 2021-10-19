//global variable
let data = [];

function fetchData() {
	fetch("data.json")
		.then(function (response) {
			return response.json();
		})
		.then((res) => {
			data = res;
		})
		.catch(function (err) {
			console.log(err);
		});
}

window.onload = fetchData();

function toggleView(state) {
	data.forEach((item) => {
		document.getElementById(`current-${item.title.toLowerCase()}`).innerHTML =
			item.timeframes[state].current + "hrs";
		let previousValue =
			state === "weekly"
				? "Last Week"
				: state === "daily"
				? "Yesterday"
				: "Last Month";
		document.getElementById(`previous-${item.title.toLowerCase()}`).innerHTML =
			previousValue + " - " + item.timeframes[state].previous + "hrs";
	});
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
	toggleView("daily");
}

function handleMonthly() {
	document.getElementById("weekly").className = "inactive";
	document.getElementById("daily").className = "inactive";
	document.getElementById("monthly").className = "active";
	toggleView("monthly");
}
