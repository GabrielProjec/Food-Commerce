import { Outlet } from 'react-router-dom'
import { Container } from './styles'

import { ReactComponent as LogoImg } from '../../assets/logo.svg'

import { Sidebar } from '../../components/Sidebar'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <LogoImg />
        <Outlet />
      </section>
    </Container>
  )
}
