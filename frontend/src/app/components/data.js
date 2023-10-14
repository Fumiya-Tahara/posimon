import { useSearchParams } from "next/navigation";
import { callPosimonList } from "../../../components/call_api";

export default async function Data(){
	const data = await callPosimonList();
	console.log(data);
	const pa = data[1].ecology;
	return(
		p.textContent = {pa}
	)
}