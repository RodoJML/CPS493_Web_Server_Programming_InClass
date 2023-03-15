<script setup lang="ts">
import { useCart, total, removeFromCart } from '@/model/cart';
const cart = useCart();
</script>

<template>
    <div class="cart">
        <h1 class="title">
            Cart
            <small>
                ${{ total }}
                ({{ cart.length }} items)
            </small>

        </h1>

        <p></p>

        <div class="cart-item" v-for="item, i in cart">
            <img :src="item.product.thumbnail" alt="product image" />
            <div>
                <b> {{ item.product.title }} </b>
                <p>
                    ${{ item.product.price }}
                    x
                    <!-- v-model is a directive that binds the value of the select element -->
                    <!-- to the quantity property of the item object -->
                    <select v-model="item.quantity" class="quantity-dropdown">
                        <!-- v-for is a directive that creates a new option element for each number in the range 1 to 10 -->
                        <option v-for="n in 10" :key="n" :value="n"> {{ n }} </option>
                    </select>
                </p>
            </div>

            <button class="button is-danger" @click="removeFromCart(i)">
                <span class="icon">
                    <i class="fas fa-trash"></i>
                </span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.cart {
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.cart-item {
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

.cart-item img {
    width: 100px;
    height: 100px;
}

small {
    font-size: 0.5em;
}
</style>