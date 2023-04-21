import { render, screen } from '@testing-library/react'

import FormLogin from '.'

describe('<FormLogin />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormLogin />)

    expect(
      screen.getByRole('heading', { name: /FormLogin/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
