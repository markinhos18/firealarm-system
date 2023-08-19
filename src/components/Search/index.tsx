import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Filter from 'components/Filter'

import Button from 'components/Button'

import ProductListChart from 'components/Charts/ProductListChart'
import ProductNotFound from 'components/ProductNotFound'
import Loading from '../../../public/img/loading.gif'
// import ImageMock from '../../../public/img/2251TB_media.jpg'

import { FileEarmarkTextFill as FileIcon } from '@styled-icons/bootstrap/FileEarmarkTextFill'

import * as S from './styles'

export type SearchProps = {
  item: string
  id: number
  img: string
  brand: string
  sku: number
  category: string
  stock: number
  priceAveragelastDays: number
  priceAverage: number
}

const Search = () => {
  const [APIData, setAPIData] = useState<any>([])
  const [searchInput, setSearchInput] = useState<any>('')
  const [isLoading, setIsLoading] = useState<any>(false)
  const [isError, setIsError] = useState<any>(false)

  const URL = `https://apifake-7l2p.onrender.com/products`

  // console.log(URL)

  useEffect(() => {
    setIsLoading(true)

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setAPIData(data)
        setIsLoading(false)
      })
      .catch((_e: any) => setIsError(true))
  }, [])

  // const searchItems = () => {}

  return (
    <S.Wrapper>
      <form>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search by brand or product"
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button id="btn_search" />
        <Filter />
      </form>

      <div className="search-results">
        {isLoading && (
          <div className="loading">
            <Image src={Loading} width={20} height={20} alt="Loading" />
          </div>
        )}
        {isError && <p>Erro</p>}

        {searchInput &&
          APIData.filter((item: any) => {
            if (
              item.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
              item.category.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return item
            }
          }).map((item: any) => {
            return (
              <S.ListProduct key={item}>
                <div className="block1">
                  <div className="item1">
                    {/* <Image src={ImageMock} alt="System Sensor 2251TB" /> */}
                    <Image
                      src={item?.img}
                      width={50}
                      height={50}
                      alt={item?.brand}
                    />
                  </div>
                  {/* <div className="item2">#43228901</div> */}
                  <div className="item2">#{item?.sku}</div>
                  {/* <div className="item3">Immediate stock: 187</div> */}
                  <div className="item3">Immediate stock: {item?.stock}</div>
                  <div className="item4">
                    {/* <FileIcon size={20} /> FSP-851 NOTIFIER */}
                    <FileIcon size={20} /> {item?.brand}
                  </div>
                </div>

                <div className="block2">
                  <div className="item2">09102020</div>
                  {/* <div className="item4 text-col2">SMOKE DETECTOR - WW3WE4</div> */}
                  <div className="item4 text-col2">{item?.category}</div>
                </div>

                <div className="block3">
                  <div className="title-grey">
                    VARIATION<br></br> OF PRICE:
                  </div>

                  <ProductListChart />

                  <div className="title-grey">
                    PRICE AVERAGE<br></br>
                    <span>LAST 30 DAYS:</span>
                    <br></br>
                    {/* <span style={{ lineHeight: '2' }}>$82.00</span> */}
                    <span style={{ lineHeight: '2' }}>
                      ${item?.priceAveragelastDays}
                    </span>
                  </div>
                  <div className="title-grey">
                    PRICE AVERAGE<br></br> <span>TODAY:</span>
                    <br></br>
                    <span style={{ color: '#0080A1', lineHeight: '2' }}>
                      ${item?.priceAverage}
                    </span>
                    {/* <span style={{ color: '#0080A1', lineHeight: '2' }}>$80.00</span> */}
                  </div>
                </div>
                <div className="block4">
                  <Link href="/sign-in" passHref>
                    <Button fullWidth size="small">
                      ADD TO QUOTE
                    </Button>
                  </Link>
                </div>
              </S.ListProduct>
            )
          })}
      </div>
    </S.Wrapper>
  )
}

export default Search
