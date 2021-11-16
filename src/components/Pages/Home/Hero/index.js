import { Container, ContentContainer, HeroContent, HeroImagem, ContainerCTA, ContainerButton, ContainerLinkIcom, ContainerCategoriaCursos, CategoriaCursos } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Hero() {
    return (
        <Container>
            <ContentContainer>
                <HeroContent>

                    <h1>Sua formação a distância</h1>
                    <p>Graduação, Segunda Graduação 2.0, Formação Pedagógica, MBA, Especialização, Cursos Livres, Técnicos, de Idiomas e Preparatórios em diversas áreas do conhecimento.</p>
                    <ContainerCTA>
                        <ContainerButton>
                            <Link href='#'>
                                <a>Ver Cursos</a>
                            </Link>
                        </ContainerButton>
                        <ContainerLinkIcom>
                            <Link href='#'>
                                <a>
                                    Saiba as formas de ingresso 
                                    <FontAwesomeIcon icon="angle-right" />                                                
                                </a>
                            </Link>
                        </ContainerLinkIcom>
                    </ContainerCTA>

                </HeroContent>

                <HeroImagem>
                    <Image
                        width={475}
                        height={475}
                        alt='Imagem Hero'                    
                        src="/images/hiker-man.svg"
                    />

                </HeroImagem>

            </ContentContainer>

            <ContainerCategoriaCursos>
                <CategoriaCursos>
                    <Link href='#'>
                        <a>
                            <Image
                                    width={450}
                                    height={150}
                                    alt='Curso de Graduação'                    
                                    src="/images/logo-clientes/graduacao.svg"
                                />
                        </a>
                    </Link>

                </CategoriaCursos>
                <CategoriaCursos>
                    <Link href='#'>
                        <a>
                            <Image
                                    width={450}
                                    height={150}
                                    alt='Curso de Graduação'                    
                                    src="/images/logo-clientes/segunda-graduacao-2.0.svg"
                                />
                        </a>
                    </Link>

                </CategoriaCursos>
                <CategoriaCursos>
                    <Link href='#'>
                        <a>
                            <Image
                                    width={450}
                                    height={150}
                                    alt='Curso de Graduação'                    
                                    src="/images/logo-clientes/formacao-pedagogica.svg"
                                />
                        </a>
                    </Link>

                </CategoriaCursos>
                <CategoriaCursos>
                    <Link href='#'>
                        <a>
                            <Image
                                    width={450}
                                    height={150}
                                    alt='Curso de Graduação'                    
                                    src="/images/logo-clientes/curso-de-pos-graduacao-a-distancia.svg"
                                />
                        </a>
                    </Link>

                </CategoriaCursos>
                <CategoriaCursos>
                    <Link href='#'>
                        <a>
                            <Image
                                    width={450}
                                    height={150}
                                    alt='Curso de Graduação'                    
                                    src="/images/logo-clientes/cursos-tecnicos.svg"
                                />
                        </a>
                    </Link>

                </CategoriaCursos>
                <CategoriaCursos>
                    <Link href='#'>
                        <a>
                            <Image
                                    width={450}
                                    height={150}
                                    alt='Curso de Graduação'                    
                                    src="/images/logo-clientes/cursos-livres.svg"
                                />
                        </a>
                    </Link>

                </CategoriaCursos>



            </ContainerCategoriaCursos>

        
        </Container>
    )
}