import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){

    return (
        <Layout titulo="Exemplo de CSS Modularizado">
        <div>
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprendendo Next na prática"/>
        </div>
        </Layout>
    )

}