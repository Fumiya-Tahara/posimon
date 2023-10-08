import React from 'react'
import './globals.css'

export default function Home() {
  return (
		<body>
			<header>

			</header>
			<main>
				<div className="wall">
					<div className='Pad'>
							<button><img src="/pad1.png" alt="config" className="pad1"></img><punibtn /></button>
							<button><img src="/pad2.png" alt="positive-note" className="pad2"></img></button>
							<button><img src="/pad3.png" alt="posimonbook" className="pad3"></img></button>
							<button><img src="/pad4.png" alt="gacha" className="pad4"></img></button>
							<button><img src="/pad5.png" alt="positive-game" className="pad5"></img></button>

					</div>
					<img src="kotatu2.png" alt="posimon" className='posimon'></img>
				</div>
				<div className ="floor">

				</div>
			</main>
			<footer>

			</footer>
		</body>
  )
}