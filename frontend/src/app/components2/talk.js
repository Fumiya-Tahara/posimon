import { useRef } from "react";
import { useRouter} from 'next/navigation';

function Talk(){
	const message = document.querySelector(".posimon-voice")
	const p = document.querySelector("p")

	return(
		message.style.visibility = "visible",
		p.textContent = "よろしくおねがいします",
		setTimeout(function(){
			message.style.visibility = "hidden"},1500
		)
	)
}

export default Talk;