document.getElementById("simple-mail-form").addEventListener("submit", function (e) {
	e.preventDefault();

	const user = "musiekterapie";
	const domain = ["com", "gmail"].reverse().join(".");
	const name = document.getElementById("sender-name").value;
	const email = document.getElementById("sender-email").value;
	const subject = encodeURIComponent(document.getElementById("mail-subject").value);
	const message = document.getElementById("mail-message").value;

	const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
	window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
});