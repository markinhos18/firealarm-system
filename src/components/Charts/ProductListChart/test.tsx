import { render, screen } from '@testing-library/react'

import ProductListChart from '.'

describe('<ProductListChart />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductListChart />)

    expect(
      screen.getByRole('heading', { name: /ProductListChart/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
