import styles from '../styles/styles.module.css';
import React, { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks';
import { ProductContextProps, ProductProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export interface Props {   
   product: ProductProps;
   // children?: ReactElement | ReactElement[];
   children: ( args : ProductCardHandlers ) => JSX.Element | JSX.Element[]; 
   className?: string;
   style?: CSSProperties;
   onChange?: ( args : onChangeArgs ) => void;
   value?: number;
   initialValues?: InitialValues;   
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className = '', style, onChange, value, initialValues } : Props ) => {         
   const { counter, increaseBy, maxCount, reset } = useProduct({ onChange, product, value, initialValues });
   
   return ( 
      <Provider value={{ 
         counter, 
         increaseBy,
         maxCount, 
         product
      }}>
         <div className= {`${styles.productCard} ${className}`} style={ style } >         
            {  children({
                  count: counter,
                  isMaxCountReached: !!maxCount && counter === maxCount,
                  maxCount,
                  product,                  
                  reset,
                  increaseBy
               }) 
            }
         </div>
      </Provider>
   )
}
