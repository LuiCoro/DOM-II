/**  Load  */
window.alert('Make sure to Click the Logo!');

window.addEventListener('load', () => {
	bodyTag.style.backgroundColor = 'black';
});

/** MouseEnter  */
const bodyTag = document.querySelector('body');
bodyTag.addEventListener('mouseenter', () => {
	bodyTag.style.backgroundColor = '#878181';
});

const newHeaders = document.querySelectorAll('h2');
newHeaders[0].addEventListener('mouseenter', () => {
	newHeaders[0].innerText = 'Double Click Image ⬆';
	newHeaders[0].style.color = 'white';
	newHeaders[0].style.border = 'solid 5px black ';
});
newHeaders[1].addEventListener('mouseenter', () => {
	newHeaders[1].innerText = 'Copy This ⬆';
	newHeaders[1].style.color = 'white';
	newHeaders[1].style.borderBottom = 'solid 5px white';
});

/** Click  */

const mouseClick = document.querySelector('h1');
mouseClick.addEventListener('click', () => {
	mouseClick.style.color = '#57d658';
	mouseClick.style.backgroundColor = 'gray';
	mouseClick.style.border = 'solid 5px black';
	mouseClick.innerText = 'Move Over Links ➡';
});

/** Resize  */

const ScreenSize = document.querySelectorAll('.nav-link');
ScreenSize[0].addEventListener('mouseleave', () => {
	ScreenSize[0].textContent = 'Width:';
});
ScreenSize[2].addEventListener('mouseleave', () => {
	ScreenSize[2].textContent = 'Height:';
});

function WindowSize() {
	ScreenSize[1].textContent = window.innerWidth;
	ScreenSize[3].textContent = window.innerHeight;
}

window.addEventListener('resize', WindowSize);

/** Double Click  */
const imgTags = document.querySelectorAll('img');
imgTags[0].addEventListener('dblclick', () => {
	imgTags[0].setAttribute(
		'src',
		'https://media4.giphy.com/media/13HgwGsXF0aiGY/giphy.gif'
	);
});

/** Copy  */
const pTags = document.querySelectorAll('p');
pTags[0].addEventListener('copy', event => {
	const selection = document.getSelection();
	event.clipboardData.setData(
		'text/plain',
		selection.toString().toLocaleUpperCase()
	);
	event.preventDefault();
	pTags[0].innerText = 'Copied! 🎉🎉🎉';
});

/** Cut */
pTags[1].addEventListener('drag', () => {
	pTags[1].style.fontSize = '20px';
	pTags[1].style.backgroundColor = 'black';
	pTags[1].style.color = '#C527E7';
});
pTags[2].addEventListener('mouseenter', () => {
	pTags[2].textContent = 'Drag Paragraph Above ⬆';
	pTags[2].style.fontSize = '5rem';
	pTags[2].style.border = 'dotted 5px #4CC5C8';
	pTags[2].style.color = 'yellow';
});

/** Key Down  */
newHeaders[1].addEventListener('mouseenter', () => {
	newHeaders[2].textContent = 'Press A Key ⌨';
});

window.addEventListener('keydown', () => {
	pTags[3].innerText = 'You Pressed A key';
	imgTags[1].setAttribute('src', 'https://i.gifer.com/758U.gif');
});

/** Key Up  */
window.addEventListener('keyup', () => {
	pTags[4].innerText = 'The Key Went up!';
	imgTags[2].setAttribute(
		'src',
		'https://media1.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'
	);
});

/** MouseUp  */

const MouseUpEvent = () => {
	newHeaders[3].innerText = 'We Change After You Click! 🚀';
	pTags[5].innerText = 'Surprise!🎉🎉🎉🎉🎉🎉';
	imgTags[3].setAttribute(
		'src',
		'https://thecodinglove.com/content/030/Ubp37r9.gif'
	);
};

window.addEventListener('mouseup', MouseUpEvent);
