import Link from 'next/link'
import * as S from './styles'

export type LogoProps = {
  size?: 'small' | 'medium' | 'large'
}

const Logo = () => (
  <S.Wrapper>
    <Link href="/">
      <a>
        <S.Logo src="/img/Logo.png" />
      </a>
    </Link>

    <div className="slogan">
      <p>
        Your search portal for the <i className="highlight">BEST</i> fire alarm
        system <i className="highlight">PRICE</i>
      </p>
    </div>
  </S.Wrapper>
)

export default Logo
