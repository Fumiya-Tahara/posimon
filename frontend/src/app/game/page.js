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
					<Link href ="negativebye">
				  	<button alt='negative-button' className='negative-btn'>
							{`ねがてぃぶを\n吐き出す`}
						</button>
				  </Link>
					<Link href ="negativebye">
						<button alt='positive-button' className='positive-btn'>
						{`ぽじてぃぶに\n変える`}
						</button>
					</Link>
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