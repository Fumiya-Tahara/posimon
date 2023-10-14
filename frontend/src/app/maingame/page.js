import React from 'react'
import Link from 'next/link'
import "./style.css"
import { callPosimonList } from '../../../components/call_api'
import { useSearchParams } from 'next/navigation'

export default async function maingame() {
	const data = await callPosimonList();
	console.log(data);
	const theme = data[1].ecology;{/*ここにお題を代入*/}
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