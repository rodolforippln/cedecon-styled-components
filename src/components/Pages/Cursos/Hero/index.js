import { Container, ContentContainer, HeroContent, HeroImagem } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <Container>
            <ContentContainer>
                <HeroContent>
                    <h1>Catalogo de Cursos</h1> 
                    <p>Nossa plataforma inclui mais de 20.000 cursos.</p>   
                </HeroContent> 
                <HeroImagem>
                    <Image
                        width={427}
                        height={233}
                        alt='Imagem Hero'                    
                        src="/images/cursos/master-adobe-ai-book.svg"
                    />
                </HeroImagem>
            </ContentContainer>
        
        </Container>
    )
}