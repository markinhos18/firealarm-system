import Home from 'templates/Home'
// import ProductListMock from 'components/Search/mock'
export default function Index() {
  return <Home />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo|leitura de context
  // retorno dos dados
  return {
    props: {
      // search: Search
      // bannerblue: Banner
      // img: ProductListMock,
      // brand: ProductListMock,
      // sku: ProductListMock,
      // category: ProductListMock,
      // stock: ProductListMock,
      // priceAveragelastDays: ProductListMock,
      // priceAverageToday: ProductListMock
    }
  }
}
