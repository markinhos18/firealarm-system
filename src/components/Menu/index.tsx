import Link from 'next/link'
import { useState } from 'react'
import { CartCheck as CartIcon } from '@styled-icons/bootstrap/CartCheck'
import { LogIn as LoginIcon } from '@styled-icons/boxicons-regular/LogIn'
import { Assignment as AssignmentIcon } from '@styled-icons/material-outlined/Assignment'

import { User as UserIcon } from '@styled-icons/heroicons-outline/User'
import { Navigation as MenuIcon } from '@styled-icons/fluentui-system-regular/Navigation'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Container } from 'components/Container'
import Button from 'components/Button'
// import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

export type MenuProps = {
  username?: string
}

export type sizeIcon = {
  size?: number
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <Button icon={<CartIcon />} size="small" />
        </S.IconWrapper>
        <S.IconWrapper>
          <Button icon={<UserIcon />} size="small" />
        </S.IconWrapper>
        {/* <MediaMatch greaterThan="small"> */}
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
        {/* </MediaMatch> */}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          {!username && (
            <S.RegisterBox>
              <Link href="/login" passHref>
                <Button
                  icon={<LoginIcon style={{ width: '25' }} />}
                  fullWidth
                  size="large"
                >
                  Login
                </Button>
              </Link>
              <span style={{ color: 'white' }}>or</span>
              <Link href="/signup" passHref>
                <S.CreateAccount href="#" title="Sign Up">
                  <Button
                    icon={<AssignmentIcon style={{ width: '25' }} />}
                    fullWidth
                    size="large"
                  >
                    Sign Up
                  </Button>
                </S.CreateAccount>
              </Link>
            </S.RegisterBox>
          )}
          <S.Wrapper>
            <Container>
              <S.Box>
                <h3>Are you supplier? </h3>
                <p>
                  If you want to enter the biggest Fire Alarm platform in the
                  United States, this is the opportunity.
                </p>
                <a className="display-center" href="#">
                  Be a Supplier
                </a>
              </S.Box>
            </Container>
          </S.Wrapper>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
