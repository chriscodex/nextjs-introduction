import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// export const getServerSideProps = async () => {
//   const response = await fetch(`${process.env.API_HOST}/api/avo`)
//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList,
//     },
//   }
// }



const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  const apiPetition = async () => {
    const response = await fetch('/api/avo')
    const {data, length} = await response.json()
    console.log(data);
    setProductList(data)
  }
  
  useEffect(() => {
    apiPetition()
  },[])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
