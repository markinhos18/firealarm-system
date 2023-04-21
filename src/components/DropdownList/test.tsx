import { render, screen } from '@testing-library/react'

import DropdownList from '.'

describe('<DropdownList />', () => {
  it('should render the heading', () => {
    const { container } = render(<DropdownList />)

    expect(
      screen.getByRole('heading', { name: /DropdownList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
