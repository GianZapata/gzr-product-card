import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface ProductProps {
   id: string;
   img?: string;
   title: string;
   count?: number;
}

export interface ProductContextProps {
   counter: number;
   increaseBy: (value: number) => void;
   maxCount?: number;
   product: ProductProps;
}

export interface ProductCardHOCProps {
   ({ children, product }: ProductCardProps ) : JSX.Element;
   Buttons: ( Props : ProductButtonsProps ) => JSX.Element;
   Image: ( Props : ProductImageProps ) => JSX.Element;
   Title: ( Props : ProductTitleProps ) => JSX.Element;
}

export interface onChangeArgs{
   product: ProductProps;
   count: number;
}

export interface ProductInCart extends ProductProps {
   count: number; 
}


export interface InitialValues {
   count?: number;
   maxCount?: number;
}

export interface ProductCardHandlers { 
   count: number
   isMaxCountReached: boolean;
   maxCount?: number;
   product: ProductProps;
   
   increaseBy: (value: number) => void;
   reset: () => void;
}