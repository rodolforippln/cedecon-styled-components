import { Container, ContentContainer, Setion3Content, Section3Imagem } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

export default function Section3() {
    return (
        <Container>
            <ContentContainer>
                <Section3Imagem>
                    <Image
                        width={511}
                        height={459}
                        alt='Imagem Hero'                    
                        src="/images/home/celular-image.jpg"
                    />
                </Section3Imagem>
                <Setion3Content>
                    <h2>Prova On-line</h2>                                       
                    <p>Com a Agendada Digital, você faz a prova na unidade de sua escolha, no melhor dia e horário. O resultado é imediato!</p>  
                </Setion3Content>
            </ContentContainer>        
        </Container>
    )
}