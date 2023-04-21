import Link from 'next/link'
import { useState } from 'react'

import { Sliders as FilterIcon } from '@styled-icons/bootstrap/Sliders'

import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

export type FilterProps = {
  username?: string
}

const Filter = ({ username }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      {/* <MediaMatch greaterThan="small"> */}
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        {/* <MenuIcon aria-label="Open Menu" /> */}
        <FilterIcon size="small" aria-label="Open Filter" />
      </S.IconWrapper>
      {/* </MediaMatch> */}

      <S.FilterFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Filter" onClick={() => setIsOpen(false)} />
      </S.FilterFull>
    </S.Wrapper>
  )
}
export default Filter
