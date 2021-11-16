import Link from 'next/link'
import Image from 'next/image'
import { Container, Content, LogoContainer, Navegacao, Topnav } from "./styles"

export default function Header() {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <Image
                        width={150}
                        height={71}
                        alt='Imagem Hero'                    
                        src="/images/logo.svg"
                    />
                </LogoContainer>
                <Navegacao>
                    <Topnav >
                        <Link href="/" ><a >Home</a></Link>
                        <a href="#news">Graduação</a>
                        <a href="#contact">Pós-graduação</a>
                        <a href="#about">Formação Pedagógica</a>
                        <Link href="/cursos" ><a >Cursos</a></Link>
                    </Topnav>
                </Navegacao>
            </Content>
        </Container>
    )
}