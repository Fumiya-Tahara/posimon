"use client";
import React from 'react'
import Link from 'next/link'
import "./style.css"
import { callPosimonList } from '../../../components/call_api'
import { useSearchParams } from 'next/navigation'

export default async function maingame() {
	const data = await callPosimonList();
	console.log(data);
	const theme = data[1].ecology;/*{ここにお題を代入}*/
	console.log(data[1].ecology);
	
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
					<form onSubmit={() => console.log("あああ")}>
						<textarea name='positive'></textarea>
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