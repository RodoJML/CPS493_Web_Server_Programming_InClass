import { computed, ref } from 'vue';
import type { Product } from './products';

const cart = ref([] as CartItem[]);

export function useCart() {
  return cart;
}

export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

export function addToCart(product: Product) {

  // This "const" has a function as value.
  // The function is called "item" and it returns a CartItem.
  // The function iterates over the "cart" array and returns the first item that matches the product id.
  // If the product is not in the cart, it returns undefined.
  // This const helps us to check if the product is already in the cart.
  const item = cart.value.find((p) => p.productId == product.id);

  if (item) {
    // If the item already exist in the cart array, just update its quantity.
    item.quantity++;
  } else {
    // If the item does not exist in the cart array, add a new cartItem to the array.
    // push() adds an item to the end of an array.
    cart.value.push({
      productId: product.id,
      product,
      quantity: 1,
    });
  }
}

export function removeFromCart(index: number) {
  // splice() removes items from an array.
    // The first parameter is the index of the item to be removed.
    // The second parameter is the number of items to be removed.
    // In this case, we are removing only one item.
  cart.value.splice(index, 1);
}

// This function returns the total number of items in the cart.
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// The reduce() method works by looping through the array and at each iteration, it calls the provided function.

// The function takes four arguments: // accumulator, current value, current index, source array.
// The first time the function is called, the accumulator and current value can be one of two values.
// If an initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue and current value will be equal to the first value in the array.
// If no initialValue is provided, then accumulator will be equal to the first value in the array and current value will be equal to the second.
// The function returns the accumulator.

export const quantity = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));

// computed() is a function that takes a function as a parameter.
// The function returns a value that is computed from the cart array.
// The function is called whenever the cart array changes.

export const total = computed(() => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0));