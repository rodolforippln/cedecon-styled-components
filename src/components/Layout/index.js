import Header from '../Header'
import Footer from '../Footer'

import { Container, ContentContainer } from './styles'

export default function Layout({ children } ) {
    return (
        <>
            <Header></Header>
                {children}
            <Footer></Footer>
        </>
    )
}