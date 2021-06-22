import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productFicha from './queries/productFicha.graphql'
import { BimString } from './utils/bim';

interface Bim {
}

const Bim: StorefrontFunctionComponent<Bim> = ({}) => {

  const CSS_HANDLES = ['Bim']
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()
  const { data, loading, error } = useQuery(productFicha, {
    variables: {
      slug: product?.linkText,
    },
    ssr: false
  })


  if (!product) {
    return (
      <div>
        <span>No es pagina de producto.</span>
      </div>
    )
  }
  if (loading) {
    return (
      <div>
        <span></span>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <span></span>
      </div>
    )
  }
 
  var Bim = data.product.items[0].referenceId[0].Value;
  
  if (BimString.indexOf(Bim) != -1){
    return (
      <a className={`${handles.Bim} db tc`} href={`https://www.sitios.knownonline.com/atika/BIM-BIONYL.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/bim.png" alt="Bim" className={`${handles.Bim}`}/>
      </a>
    )
  }

  return (
    <div className={`${handles.Bim} db tc`}>

    </div>
  )

}

Bim.schema = {
  title: 'bim.title',
  description: 'bim.description',
  type: 'object',
  properties: {
  },
}

export default Bim
