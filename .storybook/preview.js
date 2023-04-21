import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from 'styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
