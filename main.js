function openGitHub()
{
	window.open('https://github.com/wduf');
}

function openLinkedIn()
{
	window.open('https://www.linkedin.com/in/willdufault');
}

function openIDSV()
{
	window.open('https://wduf.github.io/interactive-data-structure-visualizer');
}

function openFullscreenClock()
{
	window.open('https://wduf.github.io/fullscreen-clock');
}

function copyEmail()
{
	navigator.clipboard.writeText('wduf02@gmail.com').then(
		// copy successful
		function()
		{
			alert('Copied \'wduf02@gmail.com\' to clipboard.')
		},
		// copy unsuccessful
		function()
		{
			alert('Copy failed. Check permissions for clipboard.')
		});
}

function openSourceCode()
{
	window.open("https://github.com/wduf/wduf.github.io");
}

function openMenu()
{
	// disable scrolling
	const body = document.getElementsByTagName("body")[0];
	body.style.overflow = 'hidden';
	body.style.touchAction = 'none';
	// open menu
	const menu = document.getElementById('mobile-side-menu');
	menu.style.right = '0px';
}

function closeMenu()
{
	// enable scrolling
	const body = document.getElementsByTagName("body")[0];
	body.style.overflow = 'visible';
	body.style.touchAction = 'auto';
	// close menu
	const menu = document.getElementById('mobile-side-menu');
	menu.style.right = '-300px';
}