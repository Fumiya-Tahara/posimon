import React from 'react'
import Link from 'next/link'
import './layout2.css'
import { useSearchParams } from "next/navigation";
import { callPosimonList } from '../../../components/call_api';

//import page from "api-test"


export default async function Posimonbook({searchParams}) {
		const id = searchParams.index;
		console.log(id);
		const imgMap = {0:"posimon/posita.png", 1:"posimon/posimika.png"};
		console.log(imgMap[0])

		const data = await callPosimonList();
		console.log(data[id]);
		
		//console.log(img);
    	//const detail = page(router.query.id);
		//document.getElementsByClassName('wall').innerHTML = data[id];

  return (
	<body>
		<header>
			<div className='page-title'>プロフィール</div>
		</header>
		<main>
			<div className='wall'>
			<img src={imgMap[id]}/>
				<div className="profile">
					<div className="name">名前：
					{data[id]["name"]}</div>
					<div className="ecology">{data[id]["ecology"]}</div>
					{data[id]["rarite"]}
					{data[id]["profile"]}
				</div>
			</div>
			<div className='floor'>
				<Link href="/posimon-book">
					<button><img src="button/return.png" alt="戻る" className="return"/></button>
				</Link>
			</div>
		</main>
		<footer>
			
		</footer>
	</body>
  )
}