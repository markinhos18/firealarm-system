import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  background-color: #61c2ed;
  width: 100%;

  .item {
    display: flex;

    justify-content: space-between;

    ${media.lessThan('small')`
      display: block;
      
    `};
  }

  .phrase {
    display: flex;
    align-items: center;
    margin-left: 10%;
    justify-content: center;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.medium};
        padding: 2rem;
        margin-left: 0;
        
    `}
  }

  img {
    height: 20rem;
    background: url(/img/bannerfooter.png);
    ${media.lessThan('medium')`
    width: 100%;
    height: auto;
    background-size: cover;
  `};
  }

  .blueline {
    width: 100%;
    height: 30px;
    background-color: ${theme.colors.primary};
  }
`
