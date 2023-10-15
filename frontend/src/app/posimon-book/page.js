import React from 'react'
import './layout.css'
import Image from "next/image"
import Link from 'next/link'
import { callPosimonList } from '../../../components/call_api'

export default async function Home() {
     const data = await callPosimonList();
     console.log(data);

    return(
        <body>
			<header>
                <div className="page-title">
                    ぽじもん図鑑
                </div>
			</header>
			<main>
				<div className="wall">
                    <span>
                        <div className="images">
                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 0},
                                }}
                            >
                                <button><img src="posimon/posita.png" alt="posimon1" className="poland"/></button>
                            </Link>

                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 1},
                                }}
                            >
                                <img src="posimon/posizou.png" alt="posimon1" className="poland"/>
                            </Link>
                            
                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 2},
                                }}
                            >
                                <img src="posimon/kotatu.png" alt="posimon1" className="poland"/>
                            </Link>

                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 3},
                                }}
                            >
                                <img src="posimon/posidebu.png" alt="posimon1" className="poland"/>
                            </Link>

                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 4},
                                }}
                            >
                                <img src="posimon/posimika.png" alt="posimon1" className="poland"/>
                            </Link>

                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 5},
                                }}
                            >
                                <img src="posimon/posioka.png" alt="posimon1" className="poland"/>
                            </Link>

                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 6},
                                }}
                            >
                                <img src="posimon/poland.png" alt="posimon1" className="poland"/>
                            </Link>

                            <Link href={{
                                pathname:"posimon_profile",
                                query: { index: 7},
                                }}
                            >
                                <img src="posimon/pinao.png" alt="posimon1" className="poland"/>
                            </Link>
                        </div>
                    </span>
				</div>
                <div className ="floor">
                    <Link href="/">
					    <button><img src="button/return.png" alt="戻る" className="return"></img></button>
				    </Link>
                </div>
			</main>
            {/* <footer className ="floor">

            </footer> */}
		</body>
    )
}