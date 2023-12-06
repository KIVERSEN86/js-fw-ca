import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../Layout/Layout.styles";
import * as S from "./Product.styles";
import { DefaultHr } from "../Layout/Layout.styles";

export default function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  const reviewComponent = data.reviews.map((review, id) => (
    <div key={id}>
      <p>Rating: {review.rating}/5</p>
      <h3>{review.username}</h3>
      <p>{review.description}</p>
      <DefaultHr />
    </div>
  ));

  function displayReviews() {
    if (data.reviews.length > 0) {
      return reviewComponent;
    } else {
      return <p>This product has no reviews yet.</p>;
    }
  }

  return (
    <Container>
      <S.ProductContainer>
        <S.Img src={data.imageUrl}></S.Img>
        <S.DetailsContainer>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>{data.price}</p>
          <S.Button>Add to cart</S.Button>
          <DefaultHr />
          <S.reviewContainer>
            <h2>Reviews</h2>
            {displayReviews()}
          </S.reviewContainer>
        </S.DetailsContainer>
      </S.ProductContainer>
    </Container>
  );
}
