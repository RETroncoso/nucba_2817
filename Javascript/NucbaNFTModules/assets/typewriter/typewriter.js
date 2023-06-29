import Typewriter from "typewriter-effect/dist/core";
const typewriterSpan = document.querySelector(".typewriter");

const typewriter = new Typewriter(typewriterSpan, {
	delay: 50,
	loop: false,
});

export const typewriterInit = () => {
	typewriter
		.pauseFor(1000)
		.typeString("Crypto")
		.pauseFor(300)
		.deleteChars(6)
		.typeString("Tecnología")
		.pauseFor(300)
		.deleteChars(10)
		.typeString("Nucba")
		.start();
};
