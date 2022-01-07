import { useEffect, useRef, useState } from 'react';
import { ProductProps, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs { 
   product: ProductProps;
   onChange?: ( args: onChangeArgs ) => void;
   value?: number;
   initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues } : useProductArgs ) => {            
   
   const [counter, setCounter] = useState<number>( initialValues?.count ?? value );   

   const isMounted = useRef(false);
   
   const increaseBy = ( value: number ) => {
         
      let newValue = Math.max( counter + value, 0); 

      if( initialValues?.maxCount ) {
         
         newValue = Math.min( newValue, initialValues.maxCount );
         
      }      

      setCounter( newValue );
         
      onChange && onChange({ count: newValue, product });
   }

   const reset = () => {
      setCounter( initialValues?.count ?? value );
   };

   useEffect(() => {     
      if ( !isMounted.current ) return; 
      setCounter(value) 
   }, [value]);

   useEffect(() => {
      isMounted.current = true;            
   }, [ isMounted ]);

   return {
      counter,
      isMaxCountReached: !!initialValues?.count && counter === counter,
      maxCount: initialValues?.maxCount,
      increaseBy,
      reset
   }
}
