import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  text-transform: uppercase;
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    display: flex;
    justify-content: space-between;

    ${media.lessThan('medium')`
        display: block;
        text-align: center;
        line-height: 3rem;
	`}
  `}
`
