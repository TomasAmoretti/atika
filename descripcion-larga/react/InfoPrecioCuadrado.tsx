import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context'
import { getDefaultSeller } from './modules/seller'

interface InfoPrecioCuadradoProps {
}

const InfoPrecioCuadrado: StorefrontFunctionComponent<InfoPrecioCuadradoProps> = ({}) => {

  const CSS_HANDLES = ['InfoPrecioCuadrado']
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()

  const productContextValue = useProduct()

  const seller = getDefaultSeller(productContextValue?.selectedItem?.sellers)

  const commercialOffer = seller?.commertialOffer

  if (!commercialOffer || commercialOffer?.AvailableQuantity <= 0 || productContextValue?.selectedItem?.unitMultiplier === 1) {
    return null
  }

  if (!product) {
    return null;
  }

  return (
    <div className={`${handles.InfoPrecioCuadrado} db tc`}>
      <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--titulo-m2">
        <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--titulo-m2">
          <p className="vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--titulo-m2">
            Ingresa los m2 que necesitas cubrir. Venta por caja
            <br /> Se recomienda agregar un 10% adicional a los m2 a cubrir
          </p>
        </div>
      </div>
    </div>
  );
}

InfoPrecioCuadrado.schema = {
  title: 'info-precio.title',
  description: 'info-precio.description',
  type: 'object',
  properties: {
  },
}

export default InfoPrecioCuadrado
