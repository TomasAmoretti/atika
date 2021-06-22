import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productFicha from './queries/productFicha.graphql'
import { GarantiaKrono } from './utils/garantias';
import { GarantiaItopker } from './utils/garantias';

interface Garantia {
}

const Garantia: StorefrontFunctionComponent<Garantia> = ({}) => {

  const CSS_HANDLES = ['Garantia']
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

  var Garantia = data.product.items[0].referenceId[0].Value;
  
  if (GarantiaKrono.indexOf(Garantia) != -1){
    return (
      <a className={`${handles.Garantia} db tc`} href={`https://www.sitios.knownonline.com/atika/GARANTIA-ATIKA-PISOS-ORGANICOS-KRONO.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/garantia.PNG" alt="Garantia" className={`${handles.Garantia}`}/>
      </a>
    )
  }else if (GarantiaItopker.indexOf(Garantia) != -1){
    return (
      <a className={`${handles.Garantia} db tc`} href={`https://www.sitios.knownonline.com/atika/GARANTÍA-ATIKA-SUPERFICIES-ULTRA-COMPACTAS-ITOPKER-.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/garantia.PNG" alt="Garantia" className={`${handles.Garantia}`}/>
      </a>
    )
  }

  return (
    <div className={`${handles.Garantia} db tc`}>

    </div>
  )

}

Garantia.schema = {
  title: 'Garantia.title',
  description: 'Garantia.description',
  type: 'object',
  properties: {
  },
}

export default Garantia
