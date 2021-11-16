import { Container, ContentContainer, Setion4Content, Section4Imagem, Section4ContentGrid, Section4ContentGridCard } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

export default function Section4() {
    return (
        <Container>
            <ContentContainer>
                <Setion4Content>
                    <h2>Graduação a distância na Cruzeiro do Sul Virtual</h2>                  
                    <p>Fazer um curso de graduação na modalidade EAD traz diversas vantagens: além da flexibilidade de tempo, que permite estudar em qualquer horário ou local, bastando, para isso, ter um aparelho com conexão à internet, ele possui mensalidades mais acessíveis — e tudo isso com diploma sem diferenciação, afinal, os cursos EAD são reconhecidos e regulamentos pelo Ministério da Educação – MEC.</p> 
                    <Section4ContentGrid>
                        <Section4ContentGridCard>
                            <h3>Bolsa Mérito até %100</h3>
                            <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
                        </Section4ContentGridCard>
                        <Section4ContentGridCard>
                            <h3>Bolsa Mérito até %100</h3>
                            <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
                        </Section4ContentGridCard>
                        <Section4ContentGridCard>
                            <h3>Bolsa Mérito até %100</h3>
                            <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
                        </Section4ContentGridCard>
                        <Section4ContentGridCard>
                            <h3>Bolsa Mérito até %100</h3>
                            <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>
                        </Section4ContentGridCard>
                    </Section4ContentGrid>
                </Setion4Content>
                <Section4Imagem>
                    <Image
                        width={647}
                        height={900}
                        alt='Imagem Hero'                    
                        src="/images/home/img19-otimizada.jpg"
                    />
                </Section4Imagem>

            </ContentContainer>
        
        </Container>
    )
}