import React from 'react'
import Link from 'next/link'
import "./style.css"

export default function Negativebye() {
  return (
	<body>
		<header>
			<div className='page-title'>ねがてぃぶを吐き出す</div>
		</header>
		<main>
			<div className='wall'>
				<div className="negative-container">
  				<textarea>ここにはきだす</textarea>
						<div className='radiobtn'>
							<div className='radiobtn-1'>
								<input id="default-radio-1" type="radio" value="public" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
								<label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">みんなにも公開する</label>
							</div>
							<div className='radiobtn-2'>
								<input checked id="default-radio-2" type="radio" value="private" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    						<label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ひみつにする</label>
							</div>
						</div>
				</div>
					
			</div>
			<div className='floor'>
				<Link href="./game">
					<button><img src="button/return.png" alt="戻る" className="return"></img></button>
				</Link>
				<div className='spit'>
					<button>ねがてぃぶばいばい</button>
				</div>
			</div>
		</main>
		<footer>
			
		</footer>
	</body>
  )
}