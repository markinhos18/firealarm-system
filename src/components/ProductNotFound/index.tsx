import Image from 'next/image'
import { Container } from 'components/Container'
import image from '../../../public/img/smile_sad.png'
import * as S from './styles'

const ProductNotFound = () => (
  <S.Wrapper>
    <Container>
      <Image src={image} alt="Sad smile" />
      <h3>Your search did not find any matching product.</h3>
      <p>
        {`Go back to the search and make sure you didn't type something wrong`}
      </p>
    </Container>
  </S.Wrapper>
)

export default ProductNotFound
