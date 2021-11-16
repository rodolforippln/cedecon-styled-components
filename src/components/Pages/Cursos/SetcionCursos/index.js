import { Container, ContentContainer, Sidebar, ContainerCursos, ContentSection, CardImage, TagImg, ImgReviews, ContentReviews, StarContainer, NotaReviews, ValorSpan, TextSpan, CardContent, ConatinerTitle, ContainerAvatarFull, ContainerAvatarImage, ContainerAvatarText, ContainesList, ListItem, ContainerPrice, ContentPrice, ContainerFilter, ResultFilter, DGrid, SpanBranco, SpanVerde } from "./styles"

import Link from 'next/link'
import Image from 'next/image'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function SectionCursos() {
    return (
        <Container>
            <ContentContainer>
                <ContentSection>
                    <Sidebar>

                    <div >
                        <DGrid>
                        <h5 >Artificial Intelligence</h5>
                        <a href="#">AI Product Manager <SpanBranco>30+</SpanBranco></a>
                        <a href="#">AI Programming with Python</a>
                        <a href="#">Computer Vision <SpanVerde>New</SpanVerde></a>
                        <a href="#">Deep Learning</a>
                        <a href="#">Deep Reinforcement Learning <SpanBranco>18</SpanBranco></a>
                        </DGrid>

                        <DGrid>
                        <h5 >Data Science</h5>
                        <a href="#">Business Analytics</a>
                        <a href="#">Data Analyst <SpanVerde>New</SpanVerde></a>
                        <a href="#">Data Engineer</a>
                        <a href="#">Data Scientist <SpanBranco >4</SpanBranco></a>
                        <a href="#">Data Visualization</a>
                        <a href="#">Predictive Analytics for Business</a>
                        <a href="#">Programming for Data Science</a>
                        </DGrid>

                        <DGrid>
                        <h5 >Programming and Development</h5>
                        <a href="#">AI Programming with Python</a>
                        <a href="#">Android Basics</a>
                        <a href="#">Android Developer</a>
                        <a href="#">Blockchain <SpanBranco >7</SpanBranco></a>
                        <a href="#">C++</a>
                        <a href="#">Front End Web Developer</a>
                        <a href="#">Java Developer</a>
                        <a href="#">iOS <SpanVerde >New</SpanVerde></a>
                        <a href="#">Intro to Programming</a>
                        </DGrid>

                        <DGrid>
                        <h5 >Cloud Computing</h5>
                        <a href="#">Cloud Developer <SpanBranco>9+</SpanBranco></a>
                        <a href="#">Cloud Dev Ops Engineer</a>
                        </DGrid>

                        <DGrid>
                        <h5 >Business</h5>
                        <a href="#">Business Analytics</a>
                        <a href="#">Digital Marketing</a>
                        <a href="#">Marketing Analytics</a>
                        </DGrid>

                        <DGrid>
                        <h5 >Career</h5>
                        <a href="#">Applying to Jobs</a>
                        <a href="#">Interviewing</a>
                        </DGrid>
                    </div>



                    </Sidebar>
                    <div>                        
                        <ContainerFilter >
                            <ResultFilter >
                                <h5 ><span >195 courses</span> to get started</h5>
                            </ResultFilter> 
                        </ContainerFilter>
                        <ContainerCursos>                    
                            <CardImage>
                                <Image
                                    width={500}
                                    height={300}
                                    alt='Imagem Curso'                    
                                    src="/images/cursos/card-12.svg"
                                />
                                <TagImg>
                                    <small >Bestseller</small>
                                </TagImg>

                                <ImgReviews>
                                    <ContentReviews >                                        
                                        <StarContainer>
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />

                                        </StarContainer>                                
                                        <NotaReviews>
                                            <ValorSpan >4.91</ValorSpan>
                                            <TextSpan >(1.5k+ reviews)</TextSpan>
                                        </NotaReviews>
                                    </ContentReviews>
                                </ImgReviews>
                            </CardImage>

                            <CardContent >
                                <ConatinerTitle >
                                    <div >
                                        <small >CODE</small>
                                        <h3 >Complete Python Bootcamp: Go from zero to hero in Python 3</h3>
                                    </div>

                                    <ContainerPrice >
                                        <ContentPrice >
                                            <p ><del>$114.99</del></p>
                                            <h5 >$99.99</h5>
                                        </ContentPrice>
                                    </ContainerPrice>
                                </ConatinerTitle>

                                <ContainerAvatarFull>
                                    <ContainerAvatarImage className="col">

                                            <span className="avatar avatar-xs avatar-circle">

                                                <Image
                                                    width={24}
                                                    height={24}
                                                    alt='Avatar'                    
                                                    src="/images/cursos/img8.jpg"
                                                />
                                            </span>

                                    </ContainerAvatarImage>

                                    <ContainerAvatarText>
                                        <ContainesList >
                                            <ListItem >
                                                <FontAwesomeIcon icon="book-reader" /> 10 lessons /
                                            </ListItem>
                                            <ListItem >
                                                <FontAwesomeIcon icon="clock" /> 3h 25m /
                                            </ListItem>
                                            <ListItem >
                                                All levels                                            
                                            </ListItem>
                                        </ContainesList>
                                    </ContainerAvatarText>
                                    <i className="far fa-clock"></i>

                                </ContainerAvatarFull>
                                <p >Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!</p>
                            </CardContent>

                        </ContainerCursos>
                        
                        <ContainerCursos>                    
                            <CardImage>
                                <Image
                                    width={500}
                                    height={300}
                                    alt='Imagem Curso'                    
                                    src="/images/cursos/card-13.svg"
                                />


                                <ImgReviews>
                                    <ContentReviews >                                        
                                        <StarContainer>
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />

                                        </StarContainer>                                
                                        <NotaReviews >
                                            <ValorSpan >4.95</ValorSpan>
                                            <TextSpan >(1k+ reviews)</TextSpan>
                                        </NotaReviews>
                                    </ContentReviews>
                                </ImgReviews>
                            </CardImage>

                            <CardContent >
                                <ConatinerTitle >
                                    <div >
                                        <small >DESIGN & ILLUSTRATION</small>
                                        <h3 >From the Top: Adobe Illustrator for Beginners</h3>
                                    </div>

                                    <ContainerPrice>
                                        <ContentPrice >
                                            <p ><del>$129.99</del></p>
                                            <h5 >$119.99</h5>
                                        </ContentPrice>
                                    </ContainerPrice>
                                </ConatinerTitle>

                                <ContainerAvatarFull>
                                    <ContainerAvatarImage className="col">

                                            <span className="avatar avatar-xs avatar-circle">

                                                <Image
                                                    width={24}
                                                    height={24}
                                                    alt='Avatar'                    
                                                    src="/images/cursos/img5.jpg"
                                                />
                                            </span>

                                    </ContainerAvatarImage>

                                    <ContainerAvatarText>
                                        <ContainesList >
                                            <ListItem >
                                                <FontAwesomeIcon icon="book-reader" /> 7 lessons /
                                            </ListItem>
                                            <ListItem >
                                                <FontAwesomeIcon icon="clock" /> 7h 59m /
                                            </ListItem>
                                            <ListItem >
                                                All levels                                            
                                            </ListItem>
                                        </ContainesList>
                                    </ContainerAvatarText>
                                    <i className="far fa-clock"></i>

                                </ContainerAvatarFull>
                                <p >Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!</p>
                            </CardContent>

                        </ContainerCursos>


                        <ContainerCursos>                    
                            <CardImage>
                                <Image
                                    width={500}
                                    height={300}
                                    alt='Imagem Curso'                    
                                    src="/images/cursos/card-6.svg"
                                />
                                <TagImg>
                                    <small >Featured</small>
                                </TagImg>

                                <ImgReviews>
                                    <ContentReviews >                                        
                                        <StarContainer>
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />

                                        </StarContainer>                                
                                        <NotaReviews>
                                            <ValorSpan >4.91</ValorSpan>
                                            <TextSpan >(1.5k+ reviews)</TextSpan>
                                        </NotaReviews>
                                    </ContentReviews>
                                </ImgReviews>
                            </CardImage>

                            <CardContent >
                                <ConatinerTitle >
                                    <div >
                                        <small >CODE</small>
                                        <h3 >Get started with Vue.js</h3>
                                    </div>

                                    <ContainerPrice >
                                        <ContentPrice >
                                            <p ><del>$169.99</del></p>
                                            <h5 >$129.99</h5>
                                        </ContentPrice>
                                    </ContainerPrice>
                                </ConatinerTitle>

                                <ContainerAvatarFull>
                                    <ContainerAvatarImage className="col">

                                            <span className="avatar avatar-xs avatar-circle">

                                                <Image
                                                    width={24}
                                                    height={24}
                                                    alt='Avatar'                    
                                                    src="/images/cursos/img7.jpg"
                                                />
                                            </span>

                                    </ContainerAvatarImage>

                                    <ContainerAvatarText>
                                        <ContainesList >
                                            <ListItem >
                                                <FontAwesomeIcon icon="book-reader" /> 25 lessons /
                                            </ListItem>
                                            <ListItem >
                                                <FontAwesomeIcon icon="clock" /> 17h 46m /
                                            </ListItem>
                                            <ListItem >
                                                All levels                                            
                                            </ListItem>
                                        </ContainesList>
                                    </ContainerAvatarText>
                                    <i className="far fa-clock"></i>

                                </ContainerAvatarFull>
                                <p >Master Vue.js and build awesome, web apps with the successor of Vue.js</p>
                            </CardContent>

                        </ContainerCursos>


                        <ContainerCursos>                    
                            <CardImage>
                                <Image
                                    width={500}
                                    height={300}
                                    alt='Imagem Curso'                    
                                    src="/images/cursos/card-15.svg"
                                />
                                <TagImg>
                                    <small >Featured</small>
                                </TagImg>

                                <ImgReviews>
                                    <ContentReviews >                                        
                                        <StarContainer>
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />
                                            <Image
                                                width={16}
                                                height={16}
                                                alt='Imagem Curso'                    
                                                src="/images/cursos/star.svg"
                                            />

                                        </StarContainer>                                
                                        <NotaReviews>
                                            <ValorSpan >4.91</ValorSpan>
                                            <TextSpan >(1.5k+ reviews)</TextSpan>
                                        </NotaReviews>
                                    </ContentReviews>
                                </ImgReviews>
                            </CardImage>

                            <CardContent >
                                <ConatinerTitle >
                                    <div >
                                        <small >CODE</small>
                                        <h3 >The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert</h3>
                                    </div>

                                    <ContainerPrice >
                                        <ContentPrice >
                                            <p ><del>$159.99</del></p>
                                            <h5 >$119.99</h5>
                                        </ContentPrice>
                                    </ContainerPrice>
                                </ConatinerTitle>

                                <ContainerAvatarFull>
                                    <ContainerAvatarImage className="col">

                                            <span className="avatar avatar-xs avatar-circle">

                                                <Image
                                                    width={24}
                                                    height={24}
                                                    alt='Avatar'                    
                                                    src="/images/cursos/img7.jpg"
                                                />
                                            </span>

                                    </ContainerAvatarImage>

                                    <ContainerAvatarText>
                                        <ContainesList >
                                            <ListItem >
                                                <FontAwesomeIcon icon="book-reader" /> 42 lessons /
                                            </ListItem>
                                            <ListItem >
                                                <FontAwesomeIcon icon="clock" /> 31h 5m /
                                            </ListItem>
                                            <ListItem >
                                                All levels                                            
                                            </ListItem>
                                        </ContainesList>
                                    </ContainerAvatarText>
                                    <i className="far fa-clock"></i>

                                </ContainerAvatarFull>
                                <p >Learn MSQL like a Professional! Start from the basics and go all the way to creating your own applications and games!</p>
                            </CardContent>

                        </ContainerCursos>
                                                                                        
                    </div>

                    
                </ContentSection>
            </ContentContainer>        
        </Container>
    )
}





