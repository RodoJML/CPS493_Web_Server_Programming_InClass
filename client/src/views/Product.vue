<script setup lang="ts">
import {ref} from 'vue'
import {getProducts, type Product} from '../model/products'
const products = ref(getProducts());

</script>

<template>
    <div>
        <h1 class="title">These will be the products</h1>

        <h2> If you got here you are logged in</h2>

        <div class="product-list">
            <div class="product" v-for="product in products" :key="product.id">
                <img :src="product.thumbnail" alt="productTitle"/>
                <h3>{{ product.title }}</h3>
                <p> {{ product.description }}</p>
                <p>
                    <span>$</span>
                    <i class="price">{{ product.price }}</i>
                </p>
                <button class="button is-primary"> + </button>

            </div>
        </div>
    </div>
</template>


<style scoped>

.product-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: aliceblue;
}

.product{
    width: 30rem;
    padding: 1rem;
    margin: 1rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0);
}
.price{
    
}

</style>