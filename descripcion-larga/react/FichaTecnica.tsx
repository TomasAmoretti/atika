import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { useQuery } from "react-apollo";
import useProduct from "vtex.product-context/useProduct";
import productFicha from "./queries/productFicha.graphql";
import { FichatecnicaString } from "./utils/ficha-tecnica";

interface FichaTecnica {}

const FichaTecnica: StorefrontFunctionComponent<FichaTecnica> = ({}) => {
  const CSS_HANDLES = ["fichaTecnica"];
  const handles = useCssHandles(CSS_HANDLES);
  const { product } = useProduct();
  const { data, loading, error } = useQuery(productFicha, {
    variables: {
      slug: product?.linkText,
    },
    ssr: false,
  });

  if (!product) {
    return (
      <div>
        <span>No es pagina de producto.</span>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <span></span>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <span></span>
      </div>
    );
  }

  var fichaTecnica = data.product.items[0].referenceId[0].Value;

  if (FichatecnicaString.indexOf(fichaTecnica) != -1) {
    return (
      <a
        className={`${handles.fichaTecnica} db tc`}
        href={`http://sitios.knownonline.com/atika/${fichaTecnica}-FT.pdf`}
        target="_blank"
      >
        <img
          title="ficha-tecnica"
          src="/arquivos/ficha-tecnica2.svg"
          alt="Ficha Tecnica"
          className={`${handles.fichaTecnica}`}
        />
      </a>
    );
  }

  return <div className={`${handles.fichaTecnica} db tc`}></div>;
};

FichaTecnica.schema = {
  title: "ficha-tecnica.title",
  description: "ficha-tecnica.description",
  type: "object",
  properties: {},
};

export default FichaTecnica;
