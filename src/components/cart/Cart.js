import React from 'react';
import CartColums from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from'./CartTotals';

class Cart extends React.Component {
    render() { 
        return (
        <section>
            <ProductConsumer>
                {value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return(
                            <React.Fragment>
                                <CartColums />
                                <CartList value={value}/>
                                <CartTotals value={value} />
                            </React.Fragment>
                        )
                    }
                    else {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
        );
    }
}
 
export default Cart;