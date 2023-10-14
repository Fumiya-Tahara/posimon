'use client'
import React from 'react'
import Link from 'next/link'
import './style.css'
import Get from '../components/get'

export default function Gacha() {
  return (
		<body>
			<header>
				<div className='page-title'>ガチャ</div>
			</header>
			<main>
				<div className='wall'>
					<div className='contents'>
						<div className='result'>
								<img src = "/posimon/posizou.png" className="getposimon"></img>
								<img src = "/gachapon/ball.png" className="ball"></img>
						</div>
					</div>
						<img src = "/gachapon/machine.png" alt="gacha-machine" className="machine" onClick={ Get }></img>
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