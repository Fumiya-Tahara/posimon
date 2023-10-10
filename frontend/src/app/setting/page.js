import React from 'react'
import Link from 'next/link'

export default function Setting() {
  return (
	<body>
		<header>
		<div className='page-title'>設定</div>
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