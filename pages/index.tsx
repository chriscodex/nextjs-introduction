import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar'

function Index() {
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
    <div>
      <Navbar />
      <p>Hola Nextjs</p>
      {productList.map((product) => {return <p>{product.name}</p>})}
    </div>
  )
}

export default Index