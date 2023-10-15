import { useRef } from "react";
import { useRouter } from 'next/navigation'
import { callPosimon } from '../../../components/call_api'

async function Get2(){
	const data = await callPosimon();
				// .then((data) => {
				// 	// データベースからの値を受け取り、処理を行う
				// 	console.log("データを取得しました:", data);
				// 	return data;
				// })
				// .catch((error) => {
				// 	// エラーが発生した場合の処理
				// 	console.error("エラー:", error);
				// });
	
	console.log("*********************");
	console.log("取得" + data[0].id);
	console.log("*********************");

	const imgId = data[0].id;
	
	const imgMap = {
		1:"posimon/posita.png",
		2:"posimon/posizou.png",
		3:"posimon/kotatu.png",
		4:"posimon/posidebu.png",
		5:"posimon/posimika.png",
		6:"posimon/posioka.png",
		7:"posimon/poland.png",
		8:"posimon/pinao.png"
	};

	const src = imgMap[imgId];
	console.log(imgMap[imgId])

	const result = document.querySelector(".result");
	const posimon = document.querySelector(".getposimon");
	return(
		posimon.src = src,/*ここで画像変更*/
		result.style.visibility = "visible"
	)
}

export default Get2;