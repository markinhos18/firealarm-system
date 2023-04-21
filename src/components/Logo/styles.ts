import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  color: #0099dd;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}

  .highlight {
    color: ${theme.colors.secondary};
    font-style: normal;
  }

  .slogan {
  }
`

export const Logo = styled.img`
  width: 28rem;

  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};

    ${media.lessThan('small')`
            width: 18rem;
        `}
  `}
`
