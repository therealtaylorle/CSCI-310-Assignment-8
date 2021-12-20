import React from 'react';
import Product from './Product';
import {ProductConsumer} from "../context";

class ProductList extends React.Component {

    render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div classNmae="container">
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductList;

