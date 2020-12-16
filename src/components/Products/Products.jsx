import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Windows Laptop',
    price: '$400',
    image:
      'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'
  },
  {
    id: 2,
    name: 'Smartphone',
    description: 'OnePlus 7T Pro',
    price: '$900',
    image: 'https://www.notebookcheck.net/uploads/tx_nbc2/OnePlus.jpg'
  }
];
const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
