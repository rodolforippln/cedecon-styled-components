import { Container, ContentContainer, HeroContent, HeroImagem, ContainerCTA, ContainerButton, ContainerLinkIcom, ContainerCategoriaCursos, CategoriaCursos } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

export default function Section8() {
    return (
        <Container>
            <ContentContainer>
                <HeroContent>

                    <h3>Começe a estudar hoje mesmo e tenha bolsa até 60%</h3>

                </HeroContent>

                    <ContainerCTA>
                        <ContainerButton>
                            <Link href='#'>
                                <a>Matricule-se</a>
                            </Link>
                        </ContainerButton>
                    </ContainerCTA>

            </ContentContainer>
            

        </Container>
    )
}