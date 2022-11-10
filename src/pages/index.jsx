import Navegador from "../components/Navegador"

export default function Inicial(){
   return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/jsx" texto="JSX" cor="#b8860b"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="crimson"/>
            <Navegador destino="/navegacao/" texto="Navegação #01" cor="orange"/>
            <Navegador destino="/cliente/123" texto="Navegação #02" cor="red"/>



        </div>
   )
}