// import Banner from 'components/Banner'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Logo from 'components/Logo'
import Menu from 'components/Menu'

import { Content, SectionFooter, Wrapper } from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <Wrapper>
    <Container>
      <Menu />
      <Logo />
    </Container>

    <Content>{children}</Content>

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </Wrapper>
)

export default Base
