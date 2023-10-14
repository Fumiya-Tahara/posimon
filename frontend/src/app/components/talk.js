import { useRef } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { callPosimonList } from "../../../components/call_api";
import { Data } from "./data"

export default async function Talk(){
	const data = await callPosimonList();
	console.log(data);
	const message = document.querySelector(".posimon-voice");
	const p = document.querySelector("p");

	return(
		message.style.visibility = "visible",
		p.textContent = {Data},
		setTimeout(function(){
			message.style.visibility = "hidden"},1500
		)
	)
}

