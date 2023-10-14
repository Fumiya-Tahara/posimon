import React from 'react'
import './layout.css'
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
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
                            <Link href="posimon_profile">
                                <button><img src="pojimon/posita.png" alt="posimon1" className="poland"/></button>
                            </Link>
                            <Link href="posimon_profile">
                                <img src="pojimon/posizou.png" alt="posimon1" className="poland"/>
                            </Link>
                            
                            <Link href="posimon_profile">
                                <img src="pojimon/kotatu.png" alt="posimon1" className="poland"/>
                            </Link>
                            <Link href="posimon_profile">
                                <img src="pojimon/posidebu.png" alt="posimon1" className="poland"/>
                            </Link>
                            <Link href="posimon_profile">
                                <img src="pojimon/posimika.png" alt="posimon1" className="poland"/>
                            </Link>
                            <Link href="posimon_profile">
                                <img src="pojimon/posioka.png" alt="posimon1" className="poland"/>
                            </Link>
                            <Link href="posimon_profile">
                                <img src="pojimon/poland.png" alt="posimon1" className="poland"/>
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