import Base from 'templates/Base'

import { Container } from 'components/Container'
import Search from 'components/Search'
import Banner from 'components/Banner'

import { Wrapper } from './styles'

// export type HomeTemplateProps = {
//   search: Search
//   bannerblue: Banner
// }

const Home = () => {
  return (
    <Base>
      <Wrapper>
        <Container>
          <Search />
        </Container>

        <Banner />
      </Wrapper>
    </Base>
  )
}

export default Home
