"use client";
import {useState} from 'react'
import Link from 'next/link'
import "./style.css"
// import { callPosimonList } from '../../../components/call_api'
// import { useSearchParams } from 'next/navigation'

export default function maingame() {
	// const data = await callPosimonList();
	// console.log(data);
	const theme = "焦げた";/*{ここにお題を代入}*/
	// console.log(data[1].ecology);
	// const [textValue, setTextValue] = useState("");
	// console.log(textValue);
	let textContent = "";

	function submitTextarea(event, textContent) {
		event.preventDefault();
		const textValue = textContent;
		const exp = textValue.length;
		console.log(textValue);
		alert("いい調子！"+ exp + "exp獲得！！");
	}

	function getTextarea(event) {
		textContent = event.target.value;
		return textContent;
	}
	
  return (
	<body>
		<header>
			<div className='page-title'>ぽじてぃぶに変える</div>
		</header>
		<main>
			<div className='wall'>
				<div className="positive-container">
					<h2>今回のお題</h2>
					<div className='theme'>{/*ここにお題を反映*/}
						{theme}
					</div>
					<p>↓前向きに書き換えてみよう↓</p>
					{/* <form onSubmit={() => console.log("あああ")}> */}
					<form onSubmit={(event) => submitTextarea(event, textContent)}>
						<textarea name='positive' onChange={(event) => getTextarea(event)}></textarea>
						<div className='submitbtn'>
							<button type='submit' value="positive-text">ぽじてぃぶ送信</button>
						</div>
						
					</form>
				</div>
					
			</div>
			<div className='floor'>
				<Link href="./positivecome">
					<button><img src="button/return.png" alt="戻る" className="return"></img></button>
				</Link>
				
			</div>
		</main>
		<footer>
			
		</footer>
	</body>
  )
}