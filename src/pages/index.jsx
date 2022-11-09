

export default function Inicial(){
    const titulo = <h1>Titulo incrivel</h1>

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
   
    return (
        <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo()}</h2>
        <p>Estudando Frameworks</p>
        </div>

    )
}