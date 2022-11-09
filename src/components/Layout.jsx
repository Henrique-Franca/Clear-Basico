import Link from "next/link";

export default function Layout(props){

    return(

        <div>
            <Link href="/"><h1>Voltar</h1></Link>
            {props.children}
        </div>

    )

}