import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';

export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';

export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
      Title: ProductTitle,
      Buttons: ProductButtons,
      Image: ProductImage
});

export default ProductCard;