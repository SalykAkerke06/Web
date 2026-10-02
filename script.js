const startButton = document.getElementById('startButton')

startButton.addEventListener('click', function () {
	document.getElementById('courses').scrollIntoView({
		behavior: 'smooth',
	})
})

const courseButtons = document.querySelectorAll('.course-button')

courseButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		alert('Курс туралы ақпарат жақында қосылады!')
	})
})

const contactForm = document.getElementById('contactForm')

contactForm.addEventListener('submit', function (event) {
	event.preventDefault()

	const name = document.getElementById('name').value

	alert(name + ', хабарламаңыз қабылданды!')

	contactForm.reset()
})
