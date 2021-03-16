import Link from 'next/link'
function Sobre(){
    return (
        <div>
            <h1>Página Inicial</h1>
            <Link href="/index">
                <a>Acessar página Home</a>
            </Link>
        </div>
    )
}

export default Sobre