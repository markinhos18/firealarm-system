import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  color: ${theme.colors.gray};

  input {
    width: 100% !important;
  }

  .inputLogin {
    padding: 15px;
    border-radius: ${theme.border.radius};
    border: 1px solid #676767;
    width: 100%;
    margin-top: 40px;
  }

  .inputs {
    display: flex;
    justify-content: space-between;

    ${media.lessThan('small')`
      display: block;
    `}
  }

  .formColumn {
    width: 100%;
    padding: 0 ${theme.spacings.xlarge} 0 0;

    ${media.lessThan('small')`
    padding: 0;
    `}
  }

  .addresses {
    border-top: 1px solid #595959;
    border-bottom: 1px solid #595959;
    margin-top: ${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.xxlarge};
    padding: ${theme.spacings.large} 0;
  }

  .signinBtn {
    border-radius: 20px;
    margin: 30px 0px;
  }

  h2 {
    margin: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.xxlarge};
  }

  .requiredLabel {
    margin: ${theme.spacings.medium} 0 ${theme.spacings.xxlarge} 0;
  }

  .signinBtn {
    width: 15%;

    ${media.lessThan('medium')`
    width: 50%;
    `}
  }
`
