import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  margin: 14% 0;

  .loading {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #search {
    background-color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 50px 15px 80px;
    border-radius: 20px;
    width: 100% !important;
    height: 42px;
    font-weight: 300;
    color: #8795a2;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: 0;
  }

  #btn_search {
    width: 100px;
    height: 43px;
    background: url(/img/btn_search.png) no-repeat;
    background-size: contain;
    cursor: pointer !important;
    border: 0 none;
    outline: 0;
    /* transform: translateY(-50%); */
    padding: 0;
    position: relative;
    top: -42px;
    left: 0;
  }
`

export const ListProduct = styled.li`
  ${({ theme }) => css`
    list-style: none;
    margin-bottom: 2rem;
    border: 1px solid #e2e2e2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
    border-radius: 6px;
    padding: 1.5rem 3.5rem 4rem;
    .block1 {
      display: grid;
      grid-template-areas:
        'col1 col2 col3'
        'col1 col4 col4';
      gap: 1rem;
      margin-right: ${theme.spacings.xxsmall};
      width: 25%;
      text-align: center;
      float: left;
      ${media.lessThan('medium')`
			/* margin-left: ${theme.spacings.small}; */
		`}
    }
    .block2 {
      display: grid;
      grid-template-areas:
        'col2 col3'
        'col4 col4 ';
      gap: 1rem;
      width: 24%;
      text-align: center;
      float: left;
    }
    .block3 {
      display: flex;
      gap: 2rem;
      background: #F3F3F3;
      width: 40%;
      padding: 10px;
      border-radius: ${theme.border.radius};
      float: left;
    }
    .block4 {
      display: flex;
      /* gap: 6rem; */
      /* width: 40%; */
      padding: 10px;
      /* border-radius: ${theme.border.radius}; */
    }

    .item1 {
      display: flex
      align-items: center;
      grid-area: col1;
      margin-right: ${theme.spacings.small};
    }

    .item2 {
      grid-area: col2;
      background: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      padding: ${theme.spacings.xxxsmall};
      color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
    }
    .item3 {
      grid-area: col3;
      background: ${theme.colors.green};
      font-size: ${theme.font.sizes.xsmall};
      padding: ${theme.spacings.xxxsmall};
      color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
    }
    .item4 {
      grid-area: col4;
      text-transform: uppercase;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
      text-align: left;
    }

    .text-col2{
      font-size: 1.6rem;
      text-align: left;
    }

    .title-grey{
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      
      span {
        font-weight: bold;
      }
    }

    
  `}
`
