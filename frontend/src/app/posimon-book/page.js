import './layout.css'
import Image from "next/image"

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
                            <img src="pojimon/poland.png" alt="posimon1" className="poland"/>
                            <img src="pojimon/posidebu.png" alt="posimon1" className="poland"/>
                            <img src="pojimon/posimika.png" alt="posimon1" className="poland"/>  
                        </div>
                    </span>
				</div>
                <div className ="floor">

                </div>
			</main>
            {/* <footer className ="floor">

            </footer> */}
		</body>
    )
}