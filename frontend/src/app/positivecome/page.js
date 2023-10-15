import React from 'react'
import Link from 'next/link'
import '../game/style.css'

export default function Positivecome() {
  return (
	<body>
		<header>
			<div className='page-title'>ぽじてぃぶに変える</div>
		</header>
		<main>
			<div className='wall'>
				<div className='buttons'>
					<Link href ="./maingame">
				  	<button alt='negative-button' className='negative-btn'>
							{`みんなを\nはげます`}
						</button>
				  </Link>
					<Link href ="./maingame">
						<button alt='positive-button' className='positive-btn'>
						{`じぶんを\nはげます`}
						</button>
					</Link>
				</div>
			</div>
			<div className='floor'>
			  <Link href="./game">
					<button><img src="button/return.png" alt="戻る" className="return"></img></button>
				</Link>
			</div>
		</main>
		<footer>
			
		</footer>
	</body>
  )
}