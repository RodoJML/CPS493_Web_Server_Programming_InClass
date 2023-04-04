<script setup lang="ts">
import { ref } from 'vue';
import { getProducts, type Product } from '../../model/products'

const products = ref<Product[]>([]);

getProducts().then((whateverName) => {
    products.value = whateverName.data;
});

</script>

<template>
    <div class="admin-product-list">
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td> <img :src="product.thumbnail" alt="" class="adminpr"></td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }} / {{ product.brand }}</td>
                    <td>{{ product.stock }}</td>
                    <td>
                        <button class="button is-primary">Edit</button>
                        <button class="button is-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<style scoped></style>