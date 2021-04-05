import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { siteName } from '../config';
import SEO from './SEO';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  max-width: var(--maxWidth);
  align-items: top;
  gap: 2rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      status
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Product } = data;
  return (
    <ProductStyles>
      <SEO pageTitle={Product.name} />
      <img
        src={Product?.photo?.image?.publicUrlTransformed}
        alt={Product?.photo?.altText}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
}
