//your JS code here. If required.
const div = document.getElementById("buttons");
const sounds = ["applause","boo","gasp","tada","victory","wrong"];
[...sounds].forEach((sound)=>{
	const button = document.createElement("button");
	button.className = "btn";
	button.textContent = sound;
	button.addEventListener("click",()=>{
		const audio = new Audio(`sounds/${sound}.mp3`);
		audio.play();
	});
	div.appendChild(button);
});
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.classList.add("btn");
stopBtn.textContent = "stop";
stopBtn.addEventListener("click",()=>{
	const audion = new Audio(`sounds/stop.mp3`);
	audio.play();
});
div.appendChild(stopBtn);
