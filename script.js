const buttons = document.getElementsByClassName("btn");
let currentAudio = null;
[...buttons].forEach((button)=>{
	button.addEventListener("click",(event)=>{
		const audioName = event.target.getAttribute("data-sound");
		if(audioName==="stop")
			stopSounds();
		else playSound(audioName);
	});
});
function stopSounds() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio = null;
	}
}
function playSound(soundName) {
		stopSounds();
	currentAudio = new Audio(`sounds/${soundName}.mp3`);
	try{
		 currentAudio.play().catch(error => {
                    console.error('Error playing sound:', error);
                    currentAudio.addEventListener('ended', function() {
                    currentAudio = null;
                });
                });
	}
	catch(error){
		console.log("second error: ", error);
	}
}