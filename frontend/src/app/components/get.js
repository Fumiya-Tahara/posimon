import { useRef } from "react";
import { useRouter } from 'next/navigation'

function Get(){
	const result = document.querySelector(".result")
	return(
		result.style.visibility = "visible"
	)
}

export default Get;