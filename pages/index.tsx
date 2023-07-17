import React from 'react'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

/* Static Side Generation */
// // HomePage props: ({ productList }: { productList: TProduct[] })
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://nextjs-introduction.vercel.app/api/products')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

/* Server Side Rendering */
// // HomePage props: ({ productList }: { productList: TProduct[] })
// export const getServerSideProps = async () => {
//   const response = await fetch('https://nextjs-introduction.vercel.app/api/avo')
//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList,
//     },
//   }
// }

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  /* Client Side Rendering */
  // Also we need to delete {productList} props as parameter in HomePage()
  // const [productList, setProductList] = useState<TProduct[]>([]);

  // const apiPetition = async () => {
  //   const response = await fetch('/api/products')
  //   const {data, length} = await response.json()
  //   console.log(data);
  //   setProductList(data)
  // }
  
  // useEffect(() => {
  //   apiPetition()
  // },[])

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
