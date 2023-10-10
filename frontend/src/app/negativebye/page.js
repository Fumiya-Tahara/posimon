import React from 'react'
import Link from 'next/link'

export default function Negativebye() {
  return (
	<body>
		<header>
			<div className='page-title'>ねがてぃぶを吐き出す</div>
		</header>
		<main>
			<div className='wall'>
				
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