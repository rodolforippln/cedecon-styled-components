import Image from 'next/image'
import Link from 'next/link'
import { Container, ContentContainer, ContentCenter, GridCard, CardSection7, ContainerLinkIcom, ContainerLinkIcomTrasparent } from "./styles"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Section1() {
    return (
        <Container>
            <ContentContainer>
                <ContentCenter>
                    <h2>Formação de professores R2</h2>
                    <p>Curso de formação para não Licenciados.</p> 
                </ContentCenter>
                <GridCard>
                    <CardSection7>
                        <Image
                            width={600}
                            height={337.3}
                            alt='Imagem Hero'                    
                            src="/images/home/curso-de-biologia.jpg"
                        />
                        <h3>BIOLOGIA A DISTÂNCIA</h3>
                        <p>Form. Ped. Grad. Não <br/>Licenciados – Biologia</p>

                    </CardSection7>
                    <CardSection7>
                        <Image
                            width={600}
                            height={337.5}
                            alt='Imagem Hero'                    
                            src="/images/home/fisica-distancia.jpg"
                        />

                        <h3>FÍSICA A DISTÂNCIA</h3>
                        <p>Form. Ped. Grad. Não <br/>Licenciados – Física</p>

                      

                    </CardSection7>
                    <CardSection7>
                        <Image
                            width={600}
                            height={337.5}
                            alt='Imagem Hero'                    
                            src="/images/home/curso-de-portugues.jpg"
                        />
                        <h3>PORTUGUÊS A DISTÂNCIA</h3>
                        <p>Form. Ped. Grad. Não <br/>Licenciados – Português</p>


                    </CardSection7>
                    <CardSection7>
                        <Image
                            width={600}
                            height={337.5}
                            alt='Imagem Hero'                    
                            src="/images/home/curso-de-geografia.jpg"
                        />
                        <h3>GEOGRAFIA</h3>
                        <p>Form. Ped. Grad. Não <br/>Licenciados - Geografia</p>


                    </CardSection7>
                </GridCard>               


                    <ContainerLinkIcomTrasparent>
                        <Link href='#'>
                            <a>
                                Conheça todos os cursos 
                                <FontAwesomeIcon icon="angle-right" />                                                
                            </a>
                        </Link>
                    </ContainerLinkIcomTrasparent>


            </ContentContainer>        
        </Container>
    )
}

