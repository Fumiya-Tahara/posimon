//import './layout.css'
import Image from "next/image"

export default function Home() {
    return(
        <body>
			<header>
                <div className="title">
                    ぽじもん図鑑
                </div>
			</header>
			<main>
				<div className="wall">
                    <div className="l-wrapper_06">
                        <div className="card_06">
                            <Image src="" alt="" />
                        </div>
                    </div>
				</div>
                
				<div className ="floor">

				</div>
			</main>
			<footer>

			</footer>
		</body>
        // <div>
        //     <header> ぽじもん図鑑 </header>
        //     <main>
        //         <div className = "wall">
        //             <div className="l-wrapper_06">
        //                 <div className="card_06">
        //                     <Image src="" alt="" />
        //                 </div>
        //             </div>
                
        //             <div className="flex">
        //                 <div>あいうえお</div>
        //                 <div>かきくけこ</div>
        //                 <div>さしすせそ</div>
        //             </div>
        //         </div>
        //         <div className = "floor">
        //             ああああ
        //         </div>
        //     </main>
        // </div>
    )
}