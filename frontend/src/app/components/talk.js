import { useRef } from "react";
import { useRouter} from 'next/navigation'

function Talk(){
	const routor = useRouter()
	const message = document.querySelector(".posimon-voice")
	const p = document.querySelector("p")

	return(
		message.style.visibility = "visible",
		p.textContent = "ぴーなっつ",
		setTimeout(function(){
			message.style.visibility = "hidden"},1500
		)
	)
}

export default Talk;