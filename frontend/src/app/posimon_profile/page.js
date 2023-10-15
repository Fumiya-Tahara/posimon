import React from 'react'
import Link from 'next/link'
import './layout2.css'
import { useSearchParams } from "next/navigation";
import { callAllPosimon } from '../../../components/call_api';

//import page from "api-test"


export default async function Posimonbook({searchParams}) {
		const id = searchParams.index;
		console.log(id);
		const imgMap = {0:"posimon/posita.png", 1:"posimon/posizou.png", 2:"posimon/kotatu.png", 3:"posimon/posidebu.png", 4:"posimon/posimika.png", 5:"posimon/posioka.png", 6:"posimon/poland.png", 7:"posimon/pinao.png"};
		console.log(imgMap[0]);

		const data = await callAllPosimon();
		console.log("**********");
		console.log(data);
		console.log(data[id]);
		
		//console.log(img);
    	//const detail = page(router.query.id);
		//document.getElementsByClassName('wall').innerHTML = data[id];

  return (
	 <body>
		<header>
			<div className='page-title'>{data[id]["name"]}</div>
		</header>
		<main>
			<div className='wall'>
				<div className="selimg">
				<img src={imgMap[id]}/>
				</div>
				 
				<div className="profile">
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