import React, {useEffect, useContext, useState} from "react";
import { useRouteMatch } from 'react-router-dom';

import { api } from '../../services/api';

import Loading from '../../components/FullLoader';
import { Pagination } from "../Pagination";

import ApplicationContext from "../../context/application";

import { Section, Container, Produtos} from "./styles";

//import imgDefault from '../../assets/images/no-photo.jpeg';

interface codeParamsGroup {
  group_code: string;
}

export function GroupProducts() {
  const { loadingProducts, page, totalPages, handlePage } = useContext(ApplicationContext);

  const { params } = useRouteMatch<codeParamsGroup | null>();

  const [group, setGroup] = useState([])

  useEffect(() => {
    async function Group() {
      const response = await api.get(`products/products-by-group/${params?.group_code}`);
      
      setGroup(response.data)
     //console.log("result.entries", response.data);
      
    }
    if(params)Group();
  }, [params])

  return (
    <>
    <Section>
      <Container>
        <Loading show={loadingProducts} />
      </Container>
      <Container>
        <Produtos>
        { group.map((product) => {
            const {
              name,
              code,
              product_url,
              group_code,
              unity,
              reference,
              fraction_reference,
              unity_reference

            } = product;
            return(
            <div className="card">
              <img src={product_url} alt={name} />
              <p>
                {name}
              </p>
              <span><strong>Código:</strong> {code}</span>
              {unity &&<span><strong>{unity} </strong> {reference}
              </span>}
              {fraction_reference &&<span><strong>{fraction_reference} </strong> {unity_reference}
              </span>}
              <a href={
                `https://api.whatsapp.com/send?phone=5541996739627&text=Bem-vindo(a)%20a%20Reflexa%20Embalagens!
                Gostaria de orçar o produto:
                Código:${group_code}
                Nome: ${name}
                `
              } rel="noreferrer" target="_blank"> Orçar Produto</a>
              <span className="obs">* As especificações podem ser alteradas sem aviso prévio</span>
              <span className="obs">** Imagem meramente ilustrativa</span>
            </div>
            );
          })}
        </Produtos>
      </Container>
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={handlePage}
      />
    </Section>
    </>
  )
}