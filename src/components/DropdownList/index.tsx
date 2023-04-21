import * as S from './styles'
import React from 'react'

const DropdownList = () => {
  return (
    <S.Wrapper>
      <select className="dropdownInput">
        <option>Select</option>
        <option>Opt1</option>
        <option>Opt2</option>
      </select>
    </S.Wrapper>
  )
}
export default DropdownList
