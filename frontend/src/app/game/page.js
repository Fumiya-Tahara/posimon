import React from 'react'
import Link from 'next/link'
import './style.css'

export default function Game() {
  return (
	<body>
		<header>
		<div className='page-title'>ぽじてぃぶ変換</div>
		</header>
		<main>
			<div className='wall'>
				<div className='buttons'>
				  <button alt='negative-button' className='negative-btn'>ねがてぃぶを吐き出す</button>
				  <button alt='positive-button' className='positive-btn'>ぽじてぃぶに変える</button>
				</div>
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