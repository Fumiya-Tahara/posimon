import './layout.css'
import Image from "next/image"

export default function Home() {
    return(
        <div>
            <header> ぽじもん図鑑 </header>
            <main>
                <div class = "wall">
                    <div class="l-wrapper_06">
                        <div class="card_06">
                            <Image src="" alt="" />
                        </div>
                    </div>
                
                    <div className="flex">
                        <div>あいうえお</div>
                        <div>かきくけこ</div>
                        <div>さしすせそ</div>
                    </div>
                </div>
                <div class = "floor">

                </div>
            </main>
        </div>
    )
}