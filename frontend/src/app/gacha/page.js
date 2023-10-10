import React from 'react'
import Link from 'next/link'

export default function Gacha() {
  return (
	<body>
		<header>
			<div className='page-title'>ガチャ</div>
		</header>
		<main>
			<div className='wall'>
				<img src="posimon/posimika.png"></img>
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