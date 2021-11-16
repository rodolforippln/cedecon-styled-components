import { Container, ContentContainer, Setion2Content, Setion2ContentIcon, Section2Imagem } from "./styles"
import Link from 'next/link'
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Section2() {
    return (
        <Container>
            <ContentContainer>
                <Setion2Content>
                    <h2>Agendamento Digital</h2>
                    <Setion2ContentIcon>
                        <Image
                            width={50}
                            height={50}
                            alt='Imagem icom section 2'                    
                            src="/images/home/icon-1.svg"
                        />
                        <Image
                            width={50}
                            height={50}
                            alt='Imagem icom section 2'                    
                            src="/images/home/icon-23.svg"
                        />
                        <Image
                            width={50}
                            height={50}
                            alt='Imagem icom section 2'                    
                            src="/images/home/icon-67.svg"
                        /> 
                    </Setion2ContentIcon>                    
                    <p>Com a Agendada Digital, você faz a prova na unidade de sua escolha, no melhor dia e horário. O resultado é imediato!</p>  
                </Setion2Content>
                <Section2Imagem>
                    <Image
                        width={510}
                        height={340}
                        alt='Imagem Hero'                    
                        src="/images/home/estudar-a-distancia.png"
                    />
                </Section2Imagem>

            </ContentContainer>
        
        </Container>
    )
}