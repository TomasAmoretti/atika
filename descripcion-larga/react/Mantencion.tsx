import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productFicha from './queries/productFicha.graphql'
import { MantencionKrono } from './utils/mantencion';
import { MantencionBoen } from './utils/mantencion';
import { MantencionFloobest } from './utils/mantencion';

interface Mantencion {
}

const Mantencion: StorefrontFunctionComponent<Mantencion> = ({}) => {

  const CSS_HANDLES = ['Mantencion']
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

  var Mantencion = data.product.items[0].referenceId[0].Value;
  
  if (MantencionKrono.indexOf(Mantencion) != -1){
    return (
      <a className={`${handles.Mantencion} db tc`} href={`http://sitios.knownonline.com/atika/RECOMENDACIONES-DE-MANTENCION-ATIKA-KRONO-BIONYL.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/limpieza-mantencion.PNG" alt="Mantencion" className={`${handles.Mantencion}`}/>
      </a>
    )
  }else if (MantencionBoen.indexOf(Mantencion) != -1){
    return (
      <a className={`${handles.Mantencion} db tc`} href={`http://sitios.knownonline.com/atika/RECOMENDACIONES-DE-MANTENCION-ATIKA-MADERA-BOEN.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/limpieza-mantencion.PNG" alt="Mantencion" className={`${handles.Mantencion}`}/>
      </a>
    )
  }else if (MantencionFloobest.indexOf(Mantencion) != -1){
    return (
      <a className={`${handles.Mantencion} db tc`} href={`http://sitios.knownonline.com/atika/RECOMENDACIONES-DE-MANTENCION-ATIKA-VINILICOS-FLOORBEST.pdf`} target="_blank">
        <img title="ficha-tecnica" src="/arquivos/limpieza-mantencion.PNG" alt="Mantencion" className={`${handles.Mantencion}`}/>
      </a>
    )
  }

  return (
    <div className={`${handles.Mantencion} db tc`}>

    </div>
  )

}

Mantencion.schema = {
  title: 'mantencion.title',
  description: 'mantencion.description',
  type: 'object',
  properties: {
  },
}

export default Mantencion
