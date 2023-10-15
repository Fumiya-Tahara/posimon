import React from 'react'
import Link from 'next/link'
import './layout2.css'
import { useSearchParams } from "next/navigation";
import { callPosimonList } from '../../../components/call_api';

//import page from "api-test"


export default async function Posimonbook({searchParams}) {
		const id = searchParams.index;
		console.log(id);
		const imgMap = {1:"posimon/posita.png", 2:"posimon/posizou.png", 3:"posimon/kotatu.png", 4:"posimon/posidebu.png", 5:"posimon/posimika.png", 6:"posimon/posioka.png", 7:"posimon/poland.png", 8:"posimon/pinao.png"};
		console.log(imgMap[0]);

		const data = await callPosimonList();
		console.log("**********");
		console.log(data);
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
				<div className="selimg">
				<img src={imgMap[id]}/>
				</div>
				 
				{/*<div className="profile">
					{data[id]["name"]}
					<div className="ecology">{data[id]["ecology"]}</div>
					{data[id]["rarite"]}
					{data[id]["profile"]}
  </div> */}
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