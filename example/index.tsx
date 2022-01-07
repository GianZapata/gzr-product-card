import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  // img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

const App = () => {  
  return (
    <>
      <ProductCard 
            product={ product }
            initialValues= {{ 
              count: 2,
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
