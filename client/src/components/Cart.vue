<script setup lang="ts"> 
    import { useCart } from '@/model/cart';
    import { getProducts } from '@/model/products';

    const cart = useCart();
    const products = getProducts();

    cart.value.push({
        product: products[5],
        productId: 5,
        quantity: 1,
    })

    cart.value.push({
        product: products[13],
        productId: 13,
        quantity: 4,
    })

    cart.value.push({
        product: products[3],
        productId: 3,
        quantity: 4,
    })
</script>

<template> 
    <div class="cart">
        <h1 class="title">
            Cart
            <small>
                $777
                ({{ cart.length }} items)
            </small>
        </h1>
        <p></p>
        <div class="cart-item" v-for="item in cart">
            <img :src="item.product.thumbnail" alt="product image" />
            <div>
                <b> {{ item.product.title }} </b>
                <p>
                    ${{ item.product.price }}
                    x{{ item.quantity }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped> <\-- scoped means that this style is only applied to this component -->
    .cart{
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .cart-item{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        padding-right: 5px;
        border-radius: 15px;
        overflow: hidden;
        background-color: lavenderblush;
      
    }
    .cart-item img{
        width: 100px;
        height: 100px;
    }
    
    small{
        font-size: 0.5em;
    }

</style>