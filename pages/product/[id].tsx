import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

/* Static Side Generation */
// ProductPage props: ({ product }: { product: TProduct })
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://nextjs-introduction.vercel.app/api/products')
  const { data }: TAPIAvoResponse = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch(
    `https://nextjs-introduction.vercel.app/api/products/${params?.id}`
  )
  const product = await response.json()

  // Pass post data to the page via props
  return { props: { product } }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  /* Client Side Rendering */
  // // Also we need to delete {productList} props as parameter in ProductPage()
  // const {query} = useRouter()
  // const [product, setProduct] = useState<TProduct>()

  // useEffect(() => {
  //   if (query.id) {
  //     fetch(`/api/products/${query.id}`)
  //     .then((response) => response.json())
  //     .then((data: TProduct) => {
  //       setProduct(data)
  //     })
  //   }
  // })
  
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
