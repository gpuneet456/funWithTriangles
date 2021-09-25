const angles = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const isTriangleOutput = document.querySelector('#is-triangle-output');
isTriangleBtn.addEventListener('click', formTriangle);

function calculateAnglesSum() {
	const sumOfAngles = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
	return sumOfAngles;
}

function formTriangle() {
	if (calculateAnglesSum() === 180) {
		isTriangleOutput.innerText = 'Bravo,The angles form a triangle';
	} else {
		isTriangleOutput.innerText = 'Oops,the angles do not form a triangle';
	}
}

