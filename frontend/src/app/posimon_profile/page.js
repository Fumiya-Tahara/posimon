"use client";

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
//import page from "api-test"
// import { useRouter } from "next/navigation";


export default function Posimonbook() {
		// const router = useRouter()
		const searchParams = useSearchParams();
		const id = searchParams.get("id");
		console.log(id);
    	//const detail = page(router.query.id);
		document.getElementsByClassName('wall').innerHTML = id ;

  return (
	<body>
		<header>
			<div className='page-title'>プロフィール</div>
		</header>
		<main>
			<div className='wall'>
				
			</div>
			<div className='floor'>
				<Link href="/posimon-book">
					<button><img src="button/return.png" alt="戻る" className="return"></img></button>
				</Link>
			</div>
		</main>
		<footer>
			
		</footer>
	</body>
  )
}