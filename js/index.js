/** MouseEnter  */
const mouseEnter = document.querySelector('body');
mouseEnter.addEventListener('mouseenter', () => {
	mouseEnter.style.backgroundColor = '#878181';
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
const dblClick = document.querySelectorAll('img');
dblClick[0].addEventListener('dblclick', () => {
	dblClick[0].setAttribute(
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

/** Key Up  */

/**   */

/**   */
