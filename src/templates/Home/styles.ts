import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;

  margin: 0 auto;
  min-height: 70vh;
  flex-direction: column;
  ${media.lessThan('small')`
    min-height: 63vh;
	`}
`
