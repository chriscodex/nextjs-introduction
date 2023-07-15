import { useRouter } from 'next/router'

function productId() {
  const router = useRouter()

  return (
    <div>
      Pagina dinamica: {router.query.id}
    </div>
  )
}

export default productId