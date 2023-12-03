import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as C from "../Layout/Layout.styles";
import * as S from "../Home/Home.styles";

export default function Home() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <C.Container>
        <S.HomeContainer>
          {data.map((product) => (
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
      </C.Container>
    </>
  );
}
