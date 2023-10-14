import React from 'react'
import Link from 'next/link'
import "./style.css"

export default function maingame() {
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
						なんてこった
					</div>
					<p>↓前向きに書き換えてみよう↓</p>
  				<textarea>ぽじたはこらえるを使った。600円くらいの節約。ダイエットのさいしょの一歩をふみだした。</textarea>
				</div>
					
			</div>
			<div className='floor'>
				<Link href="./positivecome">
					<button><img src="button/return.png" alt="戻る" className="return"></img></button>
				</Link>
				<div className='powerbtn'>
					<button>ぽじてぃぶぱわー</button>
				</div>
			</div>
		</main>
		<footer>
			
		</footer>
	</body>
  )
}