let intro = document.querySelector(".intro2");
let logo = document.querySelector(".logo-header2");
let logoSpan = document.querySelectorAll(".logo");
let mainNav = document.getElementById("mainNav"); // Get the navbar element

window.addEventListener('DOMContentLoaded', () => {
	
	setTimeout(() => {
		logoSpan.forEach((span, idx) => {
			setTimeout(() => {
				span.classList.add("active");
			}, (idx + 1) * 400);
		});
	
		setTimeout(() => {
			logoSpan.forEach((span, idx) => {
				setTimeout(() => {
					span.classList.remove("active");
					span.classList.add("fade");
				}, (idx + 1) * 50);
			});
		}, 2000);

		setTimeout(() => {
			intro.style.top = '-100vh';
		}, 2300);

		setTimeout(() => {
			mainNav.style.display = 'block'; // Display the navbar after the intro animation
		}, 2600); // Adjust the timing as needed

	});
});
