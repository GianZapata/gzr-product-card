# GZR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Gian Carlo Zapata Rodríguez

## Ejemplo 

```	
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gzr-product-card';
```

```
<ProductCard 
      product={ product }
      initialValues= {{ 
         count: 4,
         maxCount: 10
      }}
   >         
      {
         () => {                  
            return (
               <>
                  <ProductCard.Image />
                  <ProductCard.Title />
                  <ProductCard.Buttons />                                                           
               </>
            );
         }
      }        
</ProductCard> 
```  