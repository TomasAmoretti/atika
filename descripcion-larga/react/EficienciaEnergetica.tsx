import React, {  } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productSpecs from './queries/productSpecs.graphql'

interface EficienciaEnergeticaProps {
}

const EficienciaEnergetica: StorefrontFunctionComponent<EficienciaEnergeticaProps> = ({}) => {

  const CSS_HANDLES = ['eficiencia']
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

  var eficiencia = "";
  var eficienciaValue = "";

  for(let i=0;i<data.product.specificationGroups.length;i++){
    if(data.product.specificationGroups[i].specifications){
      for(let j=0;j<data.product.specificationGroups[i].specifications.length;j++){
        if(data.product.specificationGroups[i].specifications[j].name == "Eficiencia energética"){
          eficiencia = data.product.specificationGroups[i].specifications[j].name;
          eficienciaValue = data.product.specificationGroups[i].specifications[j].values;
        }
      }
    }
  }

  if(eficiencia == "Eficiencia energética"){
    return (
      <div className={`${handles.eficiencia} db tc`}>
        <img src={`/arquivos/ov_${eficienciaValue}.png`} className="imagen-eficiencia-pdp"/>
      </div>
    )
  }else{
    return (
      <div className={`${handles.eficiencia} db tc`}>
      </div>
    )
  }

}

EficienciaEnergetica.schema = {
  title: 'eficiencia.title',
  description: 'eficiencia.description',
  type: 'object',
  properties: {
  },
}

export default EficienciaEnergetica
