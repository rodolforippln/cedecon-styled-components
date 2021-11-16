import Image from 'next/image'
import Link from 'next/link'
import { Container, ContentContainer, ContentCenter, GridCard, CardSection6, ContainerLinkIcom, ContainerLinkIcomTrasparent } from "./styles"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Section1() {
    return (
        <Container>
            <ContentContainer>
                <ContentCenter>
                    <p>UNIVERSIDADE CRUZEIRO DO SUL VIRTUAL</p>                   
                    <h2>Graduação a Distância</h2>

                </ContentCenter>
                <GridCard>
                    <CardSection6>
                        <Image
                            width={600}
                            height={337.3}
                            alt='Imagem Hero'                    
                            src="/images/home/abstract-shapes-13.svg"
                        />
                        <h3>Administração</h3>
                        <p>Ter senso de liderança, manter o seu espaço pessoal sempre organizado e ser acionado pelos amigos para planejar um trabalho ou uma festa são fortes indícios de que você pode ser um bom administrador e o curso Administração EAD é o você procura.</p>

                        <ContainerLinkIcom>
                            <Link href='#'>
                                <a>
                                    Conheça o curso 
                                    <FontAwesomeIcon icon="angle-right" />                                                
                                </a>
                            </Link>
                        </ContainerLinkIcom>

                    </CardSection6>
                    <CardSection6>
                        <Image
                            width={600}
                            height={337.5}
                            alt='Imagem Hero'                    
                            src="/images/home/abstract-shapes-14.svg"
                        />
                        <h3>Ciência da Computação</h3>
                        <p>As pessoas, em sua maioria, só se veem como consumidoras da tecnologia. Sabem utilizar as redes sociais com desenvoltura, compram e vendem pela internet e têm o smartphone como extensão de suas mãos e mentes.</p>

                        <ContainerLinkIcom>
                            <Link href='#'>
                                <a>
                                    Conheça o curso 
                                    <FontAwesomeIcon icon="angle-right" />                                                
                                </a>
                            </Link>
                        </ContainerLinkIcom>                        

                    </CardSection6>
                    <CardSection6>
                        <Image
                            width={600}
                            height={337.5}
                            alt='Imagem Hero'                    
                            src="/images/home/abstract-shapes-15.svg"
                        />
                        <h3>Ciências Biológicas</h3>
                        <p>Na sua infância, você observava o trabalho de formigas, assustava a lagartixa para vê-la perder a cauda, aluno de biologia, vai estudar a vida existente no planeta, da mais simples à mais complexa, só que sob rigor do olhar científico.</p>
                        <ContainerLinkIcom>
                            <Link href='#'>
                                <a>
                                    Conheça o curso 
                                    <FontAwesomeIcon icon="angle-right" />                                                
                                </a>
                            </Link>
                        </ContainerLinkIcom>

                    </CardSection6>
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

