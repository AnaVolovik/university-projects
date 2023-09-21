document.addEventListener('DOMContentLoaded', function(){
	//MENU NAVIGATION
	
	const aboutHalloween = document.getElementById( 'aboutHalloween' );
	const ourParty = document.getElementById( 'ourParty' );
	const ourVideo = document.getElementById( 'ourVideo' );
	const anchorSection2 = document.getElementById( 'anchorSection2' );
	const anchorSection3 = document.getElementById( 'anchorSection3' );
	const anchorSection4 = document.getElementById( 'anchorSection4' );
	
	aboutHalloween.addEventListener( 'click', function() {
		anchorSection2.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	})
	
	ourParty.addEventListener( 'click', function() {
		anchorSection3.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});	
	})
	
	ourVideo.addEventListener( 'click', function() {
		anchorSection4.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});	
	})
	
	// MENU BURGER	
	
	const openMenu = document.getElementById('openMenu');
	const closeMenu = document.getElementById( 'closeMenu' );
	const wrapMenu = document.getElementById( 'wrap_menu' );
	const aboutHalloweenAdapt = document.getElementById( 'aboutHalloweenAdapt' );
	const ourPartyAdapt = document.getElementById( 'ourPartyAdapt' );
	const ourVideoAdapt = document.getElementById( 'ourVideoAdapt' );
	const contactsElem = document.getElementById( 'contactsElem' );
	const submenu = document.querySelector( '.submenu' );
	
	
	openMenu.addEventListener( 'click', function () {
		openMenu.style = 'display: none;';
		wrapMenu.style = 'display: block;';
		closeMenu.style = 'display: block;';
		overlay.style = 'display: block;';
	})
	
	closeMenu.addEventListener( 'click', function () {
		openMenu.style = 'display: block;';
		wrapMenu.style = 'display: none;';
		closeMenu.style = 'display: none;';
		overlay.style = 'display: none;';
	})
	
	aboutHalloweenAdapt.addEventListener( 'click', function() {
		anchorSection2.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		openMenu.style = 'display: block;';
		wrapMenu.style = 'display: none;';
		closeMenu.style = 'display: none;';
		overlay.style = 'display: none;';
	})
	
	ourPartyAdapt.addEventListener( 'click', function() {
		anchorSection3.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		openMenu.style = 'display: block;';
		wrapMenu.style = 'display: none;';
		closeMenu.style = 'display: none;';
		overlay.style = 'display: none;';
	})
	
	ourVideoAdapt.addEventListener( 'click', function() {
		anchorSection4.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		openMenu.style = 'display: block;';
		wrapMenu.style = 'display: none;';
		closeMenu.style = 'display: none;';
		overlay.style = 'display: none;';
	})
	
	//CONTACTS BTN
	
	const contacts = document.getElementById( 'contacts' );
	contacts.addEventListener( 'click', function (){
		const contactsBlock = document.getElementById( 'contactsBlock' );
		contactsBlock.style = 'display: block;';
	})
	
	const closeContacts = document.getElementById( 'closeContacts' );
	closeContacts.addEventListener( 'click', function (){
		contactsBlock.style = 'display: none;';
	})
	
	const contactsFooter = document.getElementById( 'contactsFooter' );
	contactsFooter.addEventListener( 'click', function (){
		if (window.innerWidth >= 768) {
			contactsBlock.style = 'display: block;';
		} else {
			contactsBlock.style = 'display: none;';
			openMenu.style = 'display: none;';
			wrapMenu.style = 'display: block;';
			closeMenu.style = 'display: block;';
			overlay.style = 'display: block;';
		}
	})
	
	//ORDER BTN
		
	const orderBtn = document.getElementById( 'orderBtn' );
	const orderFooter = document.getElementById( 'orderFooter' );
	const order_form = document.getElementById( 'order_form' );
	const overlay = document.querySelector( '.overlay' );
	
	orderBtn.addEventListener( 'click', function() {
		orderBtn.style = 'display: none;';
		order_form.style = 'display: block;';
		overlay.style = 'display: block;';
		order_form.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	})
	
	orderFooter.addEventListener( 'click', function() {
		orderBtn.style = 'display: none;';
		order_form.style = 'display: block;';
		overlay.style = 'display: block;';
		order_form.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	})
		
	const cancelBtn = document.getElementById('cancel');
	
	cancelBtn.addEventListener( 'click', function() {
		order_form.style = 'display: none;';
		overlay.style = 'display: none;';
		orderBtn.style = 'display: block;';
	})
		
	// SLIDER
	
	const slider = document.querySelector( '.slider' );
	const nextBtn = document.querySelector( '.next-btn' );
	const  prevBtn = document.querySelector( '.prev-btn' );
	const slides = document.querySelectorAll( '.slide' );
	const slideIcons = document.querySelectorAll( '.slide-icon' );
	const numberOfSlides = slides.length;
	let slideNumber = 0;
	videoItem = document.querySelectorAll( 'video' );

	//slider next button
	nextBtn.addEventListener( 'click' , () => {
		slides.forEach((slide) => {
			slide.classList.remove( 'active' );
		});
		videoItem.forEach((video) => {
			video.classList.remove( 'active' );
		});
		slideIcons.forEach((slideIcon) => {
			slideIcon.classList.remove( 'active' );
		});
		

		slideNumber++;

		if(slideNumber > (numberOfSlides - 1)){
			slideNumber = 0;
		}

		slides[slideNumber].classList.add( 'active' );
		videoItem[slideNumber].classList.add( 'active' );
		slideIcons[slideNumber].classList.add( 'active' );
	});

	//slider previous button
	prevBtn.addEventListener( 'click', () => {
		slides.forEach((slide) => {
			slide.classList.remove( 'active' );
		});
		videoItem.forEach((video) => {
			video.classList.remove( 'active' );
		});
		slideIcons.forEach((slideIcon) => {
			slideIcon.classList.remove( 'active' );
		});
		
		
		slideNumber--;

		if(slideNumber < 0){
			slideNumber = numberOfSlides - 1;
		}

		slides[slideNumber].classList.add( 'active' );
		videoItem[slideNumber].classList.add( 'active' );
		slideIcons[slideNumber].classList.add( 'active' );
	});
	
	// VIDEO	
	
	const preloader = document.querySelector('.preloader');
	videoItem = document.querySelectorAll( 'video' );
	videoItem.forEach(el => el.addEventListener( 'canplay', function(){
		if 	(preloader) {
			setTimeout(stopPreloader,2200);	
			function stopPreloader(){
			preloader.remove();
			}	
		}
	})
	)
	
	let video = document.querySelector( 'video' );	
	
	let playBut = document.querySelector('.play');
	playBut.addEventListener( 'click', function(){
		if (video.paused) {
			video.play();
			} else {
			video.pause();
			}
	})
	
	video.addEventListener( 'pause', function() {
		playBut.classList.add( 'play' );
		playBut.classList.remove( 'pause' );
	})
					
	video.addEventListener( 'play', function(){
		playBut.classList.add( 'pause' );
		playBut.classList.remove( 'play' );
	})
	
	let startBut = document.querySelector( '.start');
	startBut.addEventListener( 'click', function(){
		video.play();
		video.currentTime = 0;
	})
	
	let muteButton = document.querySelector( '.soundOff');
	muteButton.addEventListener( 'click', function(){
		if (!video.muted) {
			this.classList.add( 'soundOff' );
			this.classList.remove( 'soundOn' );
			video.muted = true;
			} else {
			this.classList.add( 'soundOn' );
			this.classList.remove( 'soundOff' );
			video.muted = false;
			}
	})
	
	let volumeButton = document.querySelector( '.volume' );
	volumeButton.addEventListener('click', function(){
		let volOfVideo = video.volume + video.diff;
						
		if (volOfVideo >= 1) {
			volOfVideo = 1;
			video.diff = -0.1;
			}
		if (volOfVideo <= 0) {
			volOfVideo = 0;
			muteButton.classList.add( 'soundOff' );
			muteButton.classList.remove( 'soundOn' );
			video.diff = 0.1;
			video.muted = true;
			}
		if (volOfVideo > 0) {
			muteButton.classList.add( 'soundOn' );
			muteButton.classList.remove( 'soundOff' );
			video.muted = false;
			}	
		video.volume = volOfVideo;
	})

	video.diff = 0.1;
	
	nextBtn.addEventListener( 'click', function(){
		if(video.classList == ""){
			video.pause();
			video = document.querySelector( 'video.active' );
			
			video.addEventListener( 'pause', function() {
				playBut.classList.add( 'play' );
				playBut.classList.remove( 'pause' );
			})
							
			video.addEventListener( 'play', function(){
				playBut.classList.add( 'pause' );
				playBut.classList.remove( 'play' );
			})
			
			if (!video.muted) {
			muteButton.classList.add( 'soundOff' );
			muteButton.classList.remove( 'soundOn' );
			video.muted = true;
			} else {
			muteButton.classList.add( 'soundOn' );
			muteButton.classList.remove( 'soundOff' );
			video.muted = false;
			}
			
			volumeButton = document.querySelector( '.volume' );
			volumeButton.addEventListener('click', function(){
				volOfVideo = video.volume + video.diff;
			})
			video.diff = 0.1;
		}
	})
	
	prevBtn.addEventListener( 'click', function(){
		if(video.classList == ""){
			video.pause();
			video = document.querySelector( 'video.active' );
			
			video.addEventListener( 'pause', function() {
				playBut.classList.add( 'play' );
				playBut.classList.remove( 'pause' );
			})
							
			video.addEventListener( 'play', function(){
				playBut.classList.add( 'pause' );
				playBut.classList.remove( 'play' );
			})
			
			if (!video.muted) {
			muteButton.classList.add( 'soundOff' );
			muteButton.classList.remove( 'soundOn' );
			video.muted = true;
			} else {
			muteButton.classList.add( 'soundOn' );
			muteButton.classList.remove( 'soundOff' );
			video.muted = false;
			}
			
			volumeButton = document.querySelector( '.volume' );
			volumeButton.addEventListener('click', function(){
				volOfVideo = video.volume + video.diff;
			})
			video.diff = 0.1;
		}
	})
	
	//UP ARROW
	
	const up_arrow = document.getElementById( 'up_arrow' );
	const anchorSection1 = document.getElementById( 'up' );
	up_arrow.addEventListener( 'click', function() {
		anchorSection1.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	})
})

//CANVAS

const canvas = document.getElementById( 'canvas1' );
const ctx = canvas.getContext( '2d' );
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particleArray = [];
const colours = [
				'rgba(235,237,165,0.3)',
				'rgba(211,211,211,0.8)',
				'rgba (228, 228, 226, 0.8)'
				];
				
const maxSize = 15;
const minSize = 0;
const mouseRadius = 40;

let mouse = {
	x: null,
	y: null
};

window.addEventListener( 'mousemove', function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
})

function Particle(x, y, directionX, directionY, size, colour) {
	this.x = x;
	this.y = y;
	this.directionX = directionX;
	this.directionY = directionY;
	this.size = size;
	this.colour = colour;
}

Particle.prototype.draw = function() {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
	ctx.fillStyle = this.colour;
	ctx.fill();
}	

Particle.prototype.update = function() {
	if(this.x + this.size*2 > canvas.width || this.x - this.size*2 < 0) {
		this.directionX = -this.directionX;
	}
	if(this.y + this.size*2 > canvas.height || this.y - this.size*2 <0) {
		this.directionY = -this.directionY;
	}
	this.x += this.directionX;
	this.y += this.directionY;
	
	if(mouse.x - this.x < mouseRadius && mouse.x - this.x > -mouseRadius && mouse.y - this.y < mouseRadius && mouse.y - this.y > -mouseRadius) {
		if(this.size < maxSize) {
			this.size += 3;
		}
	}  else if (this.size - 0.1 >= minSize) {
		this.size -= 0.1;
	}
	if (this.sise < 0) {
		this.size = 0;
	}
	this.draw();
}

function init() {
	particleArray = [];
	for ( let i=0; i<1000; i++ ){
		let size = 0;
		let x = (Math.random() * ((innerWidth - size*2) - (size*2)) + size*2);
		let y = (Math.random() * ((innerHeight - size*2) - (size*2)) + size*2);
		let directionX = (Math.random() * .2) - .1;
		let directionY = (Math.random() * .2) - .1;
		let colour = colours[Math.floor(Math.random()*colours.length)];
		particleArray.push(new Particle(x, y, directionX, directionY, size, colour));
	}
}

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	for ( let i=0; i<particleArray.length; i++) {
		particleArray[i].update();
	}
}

init();
animate();

window.addEventListener( 'resize', function() {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	init();
})

setInterval(function() {
	mouse.x = undefined;
	mouse.y = undefined;
}, 1000);			


// AUDIO for animated elements

let audio;

function sound_witch() {
	audio = new Audio(); 
	audio.src = 'media/smeh_vedmy.mp3'; 
	audio.autoplay = true; 
}

function sound_ween() {
	audio = new Audio(); 
	audio.src = 'media/golos_prizraka.mp3'; 
	audio.autoplay = true; 
}

//ORDER FORM

function validateName (name) {
	const namePattern = /^[а-яА-ЯёЁa-zA-Z]{1,20}$/;
	return namePattern.test(name);
}

function validateEmail (email) {
	const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailPattern.test(email);
}

function validate(){   
	let $resultName = $('#resultName');
	let name = $('#name').val();
	$resultName.text('');
	
	if (validateName(name)){
		$resultName.text(name + ' имя корректное');
		$resultName.css('color', '#008000');
		$resultName.css('font-size', '14px');
	}else {
		$resultName.text(name + ' не корректное имя');
		$resultName.css('color', '#FF0000');
		$resultName.css('font-size', '14px');
	}

	let $resultEmail = $('#resultEmail');
	let email = $('#email').val();
	$resultEmail.text('');

	if (validateEmail(email)){
		$resultEmail.text(email + ' корректный e-mail');
		$resultEmail.css('color', '#008000');
		$resultEmail.css('font-size', '14px');
	}else {
		$resultEmail.text(email + ' не корректный e-mail');
		$resultEmail.css('color', '#FF0000');
		$resultEmail.css('font-size', '14px');
	}
	return false;
}

$('#validate').bind('click', validate); 




