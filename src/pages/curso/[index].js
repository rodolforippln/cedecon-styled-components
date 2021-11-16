//import styled from 'styled-components'
import Layout from '../../components/Layout'
import Curso from '../../components/Pages/Cursos/CursoDetalhePage/cursos'

/*
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function CursosPage() {
  return (
    <Layout>

      <Curso />



    </Layout>
  )
}