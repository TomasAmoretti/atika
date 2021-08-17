import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context'

interface InfoPrecioCuadradoProps {
}

const InfoPrecioCuadrado: StorefrontFunctionComponent<InfoPrecioCuadradoProps> = ({}) => {

  const CSS_HANDLES = ['InfoPrecioCuadrado']
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()

  const productContextValue = useProduct()
  const unitMultiplier = productContextValue?.selectedItem?.unitMultiplier ?? 1

  if (!product) {
    return null
  }

  if (unitMultiplier*1000 !== 1){
    return (
        <div className={`${handles.InfoPrecioCuadrado} db tc`}>
        <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--titulo-m2">
            <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--titulo-m2">
                <p className="vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--titulo-m2">
                    Ingresa los m2 que necesitas cubrir. Venta por caja<br/> Se recomienda agregar un 10% adicional a los m2 a cubrir
                </p>
            </div>
        </div>
        </div>
    )
  }

  return null

}

InfoPrecioCuadrado.schema = {
  title: 'info-precio.title',
  description: 'info-precio.description',
  type: 'object',
  properties: {
  },
}

export default InfoPrecioCuadrado
