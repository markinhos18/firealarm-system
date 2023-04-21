/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

const Banner = () => (
  <S.Wrapper>
    <div className="item">
      <p className="phrase">
        Lorem ipsum dolor sit amet
        <br />
        Lorem ipsum dolor sit amet
      </p>
      <img src="/img/bannerfooter.png" />
    </div>
    <div className="blueline"></div>
  </S.Wrapper>
)

export default Banner
