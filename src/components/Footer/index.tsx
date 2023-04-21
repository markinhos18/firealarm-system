import * as S from './styles'

import { PhoneCall as PhoneCallIcon } from '@styled-icons/boxicons-solid/PhoneCall'

const Footer = () => {
  const today = new Date()
  return (
    <S.Wrapper>
      <S.Copyright>
        <div>{today.getFullYear()} | © All rights reserved | OnFire</div>
        <div>
          <PhoneCallIcon size={20} />
          1.800.258.7841
        </div>
        <div>Privacy Policy</div>
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
