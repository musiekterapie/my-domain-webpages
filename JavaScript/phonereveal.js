// Click-to-reveal phone number
document.getElementById("reveal-phone").addEventListener("click", function (e) {
	e.preventDefault();
	const parts = ["4202", "548", "84", "+27"].reverse();
	this.outerHTML = `<a href="tel:${parts.join("")}">${parts.join(" ")}</a>`;
});

// Click-to-reveal email address
document.getElementById("reveal-email").addEventListener("click", function (e) {
	e.preventDefault();
	const user = "musiekterapie";
	const domain = ["com", "gmail"].reverse().join(".");
	const address = `${user}@${domain}`;
	this.outerHTML = `<a href="mailto:${address}">${address}</a>`;
});