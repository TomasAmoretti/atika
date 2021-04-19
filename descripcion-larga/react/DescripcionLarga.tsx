import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productSpecs from './queries/productSpecs.graphql'

interface DescripcionLargaProps {
}

const DescripcionLarga: StorefrontFunctionComponent<DescripcionLargaProps> = ({}) => {

  const CSS_HANDLES = ['descripcionLarga']
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()
  const { data, loading, error } = useQuery(productSpecs, {
    variables: {
      slug: product?.linkText,
    },
    ssr: false
  })


  if (!product) {
    return (
      <div>
        <span>There is no product context.</span>
      </div>
    )
  }
  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <span>Error!</span>
      </div>
    )
  }

  return (
    <div className={`${handles.descripcionLarga} db tc`}>
      Descripcion: {`${data.product.metaTagDescription}`}
    </div>
  )

}

DescripcionLarga.schema = {
  title: 'descripcion-larga.title',
  description: 'descripcion-larga.description',
  type: 'object',
  properties: {
  },
}

export default DescripcionLarga
