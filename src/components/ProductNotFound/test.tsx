import { render, screen } from '@testing-library/react'

import ProductNotFound from '.'

describe('<ProductNotFound />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductNotFound />)

    expect(
      screen.getByRole('heading', { name: /ProductNotFound/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
