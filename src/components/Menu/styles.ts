import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    > div {
      margin-left: ${theme.spacings.small};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.secondary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}
export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.secondary};
    position: fixed;
    z-index: ${theme.layers.modal};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xxsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.white};
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.small};
    }
  `}
`
export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: rgba(255, 255, 255, 0.3);

    width: 40rem;
    ${media.lessThan('medium')`
    width: 100%;
		`}
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    line-height: 3rem;
    h3 {
      padding: 0 0 1rem;
    }

    .display-center {
      display: flex;
      justify-content: center;
      margin: 2rem ${theme.spacings.medium} 0;
    }

    a {
      padding: 1.3rem ${theme.spacings.small};
      background-color: ${theme.colors.primary};
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      text-decoration: none;
      color: ${theme.colors.white};
    }
  `}
`

// export const LogIn = styled.svg`
//   width: 2.5rem;
// `
