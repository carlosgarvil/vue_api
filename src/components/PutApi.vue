<template>
  <h1>PutApi</h1>
  <div class="row mb-2">
    <div class="form-group col-1">
      <input
        type="number"
        v-model="productoId"
        class="form-control"
        id="id"
        placeholder="Id"
      />
    </div>
    <div class="col-11">
      <p>
        Seleccione un id de producto y se mostrará el formulario para
        modificarlo.
      </p>
    </div>
  </div>
  <hr />
  <div v-if="Object.entries(product).length === 0" class="row">
    <GetProduct
      :id="productoId"
      @editProduct="(producto) => (this.product = producto)"
    ></GetProduct>
  </div>
  <div v-else class="row">
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="TitlefloatingInput"
        v-model="product.title"
        placeholder="Title"
      />
      <label for="TitlefloatingInput">Title</label>
    </div>
    <div class="form-floating">
      <input
        type="number"
        class="form-control"
        id="PricefloatingInput"
        v-model="product.price"
        placeholder="Price"
      />
      <label for="PricefloatingInput">Price</label>
    </div>
    <div class="form-floating">
      <!--TODO textarea rows doesnt work. With computed, calculate needed lines according to description.lenght -->
      <textarea
        rows="5"
        class="form-control"
        id="DescriptionfloatingInput"
        v-model="product.description"
        placeholder="Description"
      />
      <label for="DescriptionfloatingInput">Description</label>
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="updateProduct">Update</button>
  </div>
  <!-- Bootstrap toast when updateProduct -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="...">
      <strong class="me-auto">Product updated</strong>
      <small>Just now!</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      <p>Id: {{ product.id }}</p>
      <p>Title: {{ product.title }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
  </div>
</div>
</template>

<script>
import GetProduct from "./GetProduct.vue";
import { Toast } from "bootstrap";
export default {
  components: {
    GetProduct,
  },
  data() {
    return {
      productoId: 1,
      product: {},
    };
  },
  methods: {
    updateProduct() {
      fetch(`https://fakestoreapi.com/products/${this.product.id}`, {
        method: "PUT",
        body: JSON.stringify(this.product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then((response) => response.json())
        .then((json) => this.product = json)
        .then(console.log(this.product));
    },
  },
  watch: {
    productoId: function (val) {
      this.product = {};
    },
  },
};
</script>

<style scoped></style>
