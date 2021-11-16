import Image from 'next/image'
import { Container, ContentContainer, ContentCenter, GridCard, CardSection5, Section5ImgPoint, ContentBgImage, ControlsBrowser, TextFinal } from "./styles"

export default function Section1() {
    return (
        <Container>
            <ContentContainer>
                <ContentCenter>
                    <h2>Estude na Cruzeiro do Sul Virtual</h2>
                    <p>Escolha uma das nossas formas de ingresso e venha para a Cruzeiro do Sul Virtual.</p>
                </ContentCenter>
                <GridCard>
                    <CardSection5>
                        <Image
                            width={60}
                            height={60}
                            alt='Imagem Hero'                    
                            src="/images/home/icon-45.svg"
                        />
                        <h3>Bolsa Mérito até 100%</h3>
                        <p>Conheça nossas bolsas de estudo por mérito e escolha a sua!</p>

                    </CardSection5>
                    <CardSection5>
                        <Image
                            width={60}
                            height={60}
                            alt='Imagem Hero'                    
                            src="/images/home/icon-14.svg"
                        />
                        <h3>Auxílio Desemprego</h3>
                        <p>Não espere mais, inscreva-se agora e tenha nosso apoio.</p>

                    </CardSection5>
                    <CardSection5>
                        <Image
                            width={60}
                            height={60}
                            alt='Imagem Hero'                    
                            src="/images/home/icon-23.svg"
                        />
                        <h3>Bolsas de Estudo</h3>
                        <p>Construa a sua história de sucesso aqui com a gente.</p>

                    </CardSection5>
                </GridCard>
                <Section5ImgPoint>   
                    <Image
                        width={700}
                        height={200}
                        alt='Imagem Hero'                    
                        src="/images/home/three-pointers.svg"
                    />
                    <p>Por que fazer <span>Cruzeiro do Sul Virtual?</span></p>
                    <br/><br/>
                    <ContentBgImage>
                        <ControlsBrowser>
                            <Image
                                width={67}
                                height={25}
                                alt='Imagem Hero'                    
                                src="/images/home/3pontos-browser.jpg"
                            />
                        </ControlsBrowser>
                        <Image
                            width={900}
                            height={667}
                            alt='Imagem Hero'                    
                            src="/images/home/image-strecht.jpg"
                        />
                        
                    </ContentBgImage>
                    <TextFinal>
                        <p>Graduação, Segunda Graduação 2.0, Formação Pedagógica, MBA, Especialização, Cursos Livres, Técnicos, de Idiomas e Preparatórios em diversas áreas do conhecimento.</p>
                    </TextFinal>
                </Section5ImgPoint>
            </ContentContainer>        
        </Container>
    )
}

