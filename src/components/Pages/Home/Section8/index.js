import { Container, ContentContainer, HeroContent, HeroImagem, ContainerCTA, ContainerButton, ContainerLinkIcom, ContainerCategoriaCursos, CategoriaCursos } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Section8() {
    return (
        <Container>
            <ContentContainer>
                <HeroContent>

                    <h2>Graduação A Distância <br/>Na Cruzeiro Do Sul Virtual</h2>

                    <ContainerCTA>
                        <ContainerButton>
                            <Link href='#'>
                                <a>Começe sua graduação hoje</a>
                            </Link>
                        </ContainerButton>
                    </ContainerCTA>

                </HeroContent>

                <HeroImagem>
                    <Image
                        width={800}
                        height={441}
                        alt='Imagem Hero'                    
                        src="/images/home/home-cruzeiro.jpg"
                    />

                </HeroImagem>

            </ContentContainer>
            

        </Container>
    )
}