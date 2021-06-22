import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productFicha from './queries/productFicha.graphql'
import { InstalacionPorcelanato } from './utils/instalacion';
import { InstalacionBionly } from './utils/instalacion';
import { InstalacionFloobest } from './utils/instalacion';

interface Instalacion {
}

const Instalacion: StorefrontFunctionComponent<Instalacion> = ({}) => {

  const CSS_HANDLES = ['Instalacion']
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

  var Instalacion = data.product.items[0].referenceId[0].Value;
  
  if (InstalacionPorcelanato.indexOf(Instalacion) != -1){
    return (
      <a className={`${handles.Instalacion} db tc`} href={`https://www.sitios.knownonline.com/atika/RECOMENDACIONES-DE-INSTALACIÓN-ATIKA-PORCELANATOS-Y-CERAMICOS.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/instalacion.PNG" alt="Instalacion" className={`${handles.Instalacion}`}/>
      </a>
    )
  }else if (InstalacionBionly.indexOf(Instalacion) != -1){
    return (
      <a className={`${handles.Instalacion} db tc`} href={`https://www.sitios.knownonline.com/atika/RECOMENDACIONES-DE-INSTALACIÓN-ATIKA-ORGÁNICOS-BIONYL.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/instalacion.PNG" alt="Instalacion" className={`${handles.Instalacion}`}/>
      </a>
    )
  }else if (InstalacionFloobest.indexOf(Instalacion) != -1){
    return (
      <a className={`${handles.Instalacion} db tc`} href={`https://www.sitios.knownonline.com/atika/RECOMENDACIONES-DE-INSTALACIÓN-ATIKA-VINILICOS-FLOORBEST.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/instalacion.PNG" alt="Instalacion" className={`${handles.Instalacion}`}/>
      </a>
    )
  }

  return (
    <div className={`${handles.Instalacion} db tc`}>

    </div>
  )

}

Instalacion.schema = {
  title: 'Instalacion.title',
  description: 'Instalacion.description',
  type: 'object',
  properties: {
  },
}

export default Instalacion
