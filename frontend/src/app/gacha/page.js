'use client'
import React from 'react'
import Link from 'next/link'
import './style.css'
import Get2 from '../components2/get'
//import { callPosimon } from '../../../components/call_api'

export default function Gacha() {
//	let data = {};
//	callPosimon()
//  .then((data) => {
//    // データベースからの値を受け取り、処理を行う
//    console.log("データを取得しました:", data);
//	data = data;
//  })
//  .catch((error) => {
//    // エラーが発生した場合の処理
//    console.error("エラー:", error);
//  });

  return (
		<body>
			<header>
				<div className='page-title'>ガチャ</div>
			</header>
			<main>
				<div className='wall'>
					<div className='contents'>
						<div className='result'>
								<img src = "/posimon/kotatu2.png" className="getposimon"></img>
								<img src = "/gachapon/ball.png" className="ball"></img>
						</div>
					</div>
						<img src = "/gachapon/machine.png" alt="gacha-machine" className="machine" onClick={ Get2 }></img>
					</div>
				<div className='floor'>
					<Link href="/">
						<button><img src="button/return.png" alt="戻る" className="return"></img></button>
					</Link>
				</div>
			</main>
			<footer>

			</footer>
		</body>
  )
}