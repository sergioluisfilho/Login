import Link from 'next/link'
function Sobre(){
    return (
        <div>
            <h1>Página Inicial</h1>
            <Link href="/">
                <a>clique para acessar página Home</a>
            </Link>
        </div>
    )
}

export default Sobre