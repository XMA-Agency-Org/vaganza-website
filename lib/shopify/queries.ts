/** GraphQL documents for the Shopify Storefront API. */

const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    tags
    availableForSale
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 8) {
      nodes {
        url
        altText
        width
        height
      }
    }
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 25) {
      nodes {
        id
        title
        availableForSale
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
`;

export const GET_PRODUCTS_QUERY = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int!) {
    products(first: $first, sortKey: BEST_SELLING) {
      nodes {
        ...ProductFields
      }
    }
  }
`;

export const GET_PRODUCT_QUERY = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
`;

export const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;
