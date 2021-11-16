//import styled from 'styled-components'
import Layout from '../components/Layout'
import Home from '../components/Pages/Home'

/*
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function Index() {
  return (
    <Layout>

      <Home />


    </Layout>
  )
}