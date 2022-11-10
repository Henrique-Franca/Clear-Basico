import Layout from "../components/Layout"

export default function Jsx(){
    const titulo = <h1>Titulo incrivel</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
   
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
        <div>
        {titulo}
        {subtitulo()}
        <p><h1>Estudando Frameworks</h1></p>
        </div>
        </Layout>

    )
}