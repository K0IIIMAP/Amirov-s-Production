import { groq } from "next-sanity";

export const mainPageProds = groq`
 *[_type == "product" && (
  title match "*cap*" ||
  title match "*hat *" ||
  title match "*unisex white shirt*" ||
  title match "*t-shirt black women*"
)]{
  title,
  price,
  "sex": sex->title,
"slug": slug.current,
  images[0]{
    asset->{
      _id,
      url
    
    }
  }

}
`;
export const APPAEREL_PAGE_PRODS = groq`
 *[_type == "product" && type != "accessories"]{
  title,
  price,
  "sex": sex->title,
"slug": slug.current,
  images[0]{
    asset->{
      
      url
    
    }
  }

}
`;
export const ACCESSORIES_PAGE_PRODS = groq`
 *[_type == "product" && type=="accessories"]{
  title,
  price,
  "sex": sex->title,
"slug": slug.current,
  images[0]{
    asset->{
      
      url
    
    }
  }

}
`;

export const MEN_PAGE_PRODS = groq`
 *[_type == "product" && sex->title == "men" && type != "accessories"]{
  title,
  price,
  "sex": sex->title,
"slug": slug.current,
  images[0]{
    asset->{
      
      url
    
    }
  }

}
`;
export const WOMEN_PAGE_PRODS = groq`
 *[_type == "product" && sex->title == "women"]{
  title,
  price,
  "sex": sex->title,
"slug": slug.current,
  images[0]{
    asset->{
      
      url
    
    }
  }

}
`;
export const PRODUCT_BY_SLUG = groq`
  *[_type == "product" && slug.current == $slug][0]{
    title,
    price,
    "sex": sex->title,
    "slug": slug.current,
    description,
    discount,
    images[]{
    asset->{url}}
  }
`;
export const PRODUCT_BY_SLUG_FOR_CART = groq`
  *[_type == "product" && slug.current == $slug]{
    title,
    price,
discount,
    "slug": slug.current,


    images[0]{
    asset->{url}}
  }
`;

export const CART_BY_ID = groq`
 *[_type == "customer" && googleId == $id][0] {cart}
`;

export const HISTORY_BY_ID = groq`
  *[_type == "customer" && googleId == $id][0] {history}
  `;
export const CUSTOMER_BY_GOOGLEID = groq`
 *[_type == "customer" && googleId == $id][0] {
 name}
`;
