import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`
export const Content = styled.div`
  ${({ theme }) => css`
    /* margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge}; */
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.section`
  background: #0080a1;
  /* z-index: 99999; */
  justify-content: space-between;
`
