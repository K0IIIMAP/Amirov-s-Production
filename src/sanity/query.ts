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
