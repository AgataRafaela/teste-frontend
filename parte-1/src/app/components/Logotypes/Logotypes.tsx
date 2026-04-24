import Image from "next/image";
import "./Logotypes.css"


export function Logotypes() {
    return (
        <section className="logotypes" aria-label="Logotipos de empresas parceiras">

            <Image
            src="/amazon.png"
            alt="Logo da amazon"
            width={125}
            height={48}
            />
            <Image
            src="/driblle.png"
            alt="Logo do dribbble"
            width={127}
            height={48}
            />
            <Image
            src="/hubspot.png"
            alt="Logo do hubspot"
            width={129}
            height={48}
            />
            <Image
            src="/notion.png"
            alt="Logo do notion"
            width={146}
            height={48}
            />
            <Image
            src="/netflix.png"
            alt="Logo da netflix"
            width={126}
            height={48}
            />
            <Image
            src="/zoom.png"
            alt="Logo do zoom"
            width={111}
            height={48}
            />
        </section>
    )
}