import React from 'react'
import './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
		<body>
			<header>

			</header>
			<main>
				<div className="wall">
					<div className='Pad'>		
							<Link href="/setting">
								<button><img src="button/pad1.png" alt="setting" className="pad1"></img><punibtn /></button>
							</Link>
							<Link href="/record">
							<button><img src="button/pad2.png" alt="record" className="pad2"></img></button>
							</Link>
							<Link href="/posimonbook">
							<button><img src="button/pad3.png" alt="posimonbook" className="pad3"></img></button>
							</Link>
							<Link href="/gacha">
							<button><img src="button/pad4.png" alt="gacha" className="pad4"></img></button>
							</Link>
							<Link href="/game">
							<button><img src="button/pad5.png" alt="game" className="pad5"></img></button>
							</Link>
							{/*<img src="/pad.png" className='pad'></img>*/}
							</div>
					
					<img src="posimon/posita.png" alt="posimon" className='posimon' onclick=""></img>
						<div className='posimon-voice'>
							<p className='message'>さばにゃんてすきじゃないんだからねなんてっこた</p>
						</div>
				</div>
				<div className ="floor">

				</div>
			</main>
			<footer>

			</footer>
		</body>
  )
}