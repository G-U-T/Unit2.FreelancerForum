const freelancers = [
	{ name: "Dr. Ummer", occupation: "Percussion Teacher", starting_price: 30 },
	{ name: "Ms. Direction", occupation: "Cartographer", starting_price: 40 },
	{ name: "C.S. Ess", occupation: "Front-End Developer", starting_price: 50 },
	{ name: "Mr. E", occupation: "Unknown..?", starting_price: 1000 },
]

const freelancerPriceSum = freelancers.reduce(
	(accumulator, freelancer) => accumulator + freelancer.starting_price,
	0,
);
const freelancerPriceAverage = freelancerPriceSum / freelancers.length;

const averagePriceLabel = document.querySelector("p");
averagePriceLabel.textContent += `$${freelancerPriceAverage}.`;

const freelancerTable = document.querySelector("table");
freelancerTable.style.background = "black";
freelancerTable.rules = "all";

for (i in freelancers) {
	const freelancer = freelancers[i];

	const tableRow = document.createElement("tr");
	freelancerTable.appendChild(tableRow);

	const nameLabel = document.createElement("td");
	nameLabel.textContent = freelancer.name;

	const occupationLabel = document.createElement("td");
	occupationLabel.textContent = freelancer.occupation;

	const priceLabel = document.createElement("td");
	priceLabel.textContent = "$" + freelancer.starting_price;

	tableRow.appendChild(nameLabel);
	tableRow.appendChild(occupationLabel);
	tableRow.appendChild(priceLabel);
}