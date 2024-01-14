import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import * as L from "../Layout/Layout.styles";
import * as S from "../Home/Home.styles";
import { SearchBar } from "../Search";

export default function Home() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  if (isLoading) {
    return <L.Loader />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <L.Container>
        <S.SearchContainer>
          <SearchBar products={data} setFilteredProducts={setFilteredProducts} />
        </S.SearchContainer>
        <S.HomeContainer>
          {filteredProducts.map((product) => (
            <S.ProductContainer key={product.id}>
              <Link to={`product/${product.id}`}>
                <S.Image src={product.imageUrl}></S.Image>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </Link>
              <S.StyledLink to={`product/${product.id}`}>
                <S.Button>View more</S.Button>
              </S.StyledLink>
            </S.ProductContainer>
          ))}
        </S.HomeContainer>
      </L.Container>
    </>
  );
}
