import Link from 'next/link'
function Home(){
    return (
        <div>
            <h1>Página Inicial 3</h1>
            <Link href="/sobre">
                <a>clique para a página Sobre</a>
            </Link>
        </div>
    )
}

export default Home