<template>
  <h1>PostApi</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet quos placeat quo cum tempora libero vitae. Dignissimos accusamus officiis quod fugiat esse tempora libero laboriosam atque, repellendus fugit quis?
  </p>
  <div class="row">
    <!-- New product form -->
<div class="col-6">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        v-model="product.name"
        class="form-control"
        id="name"
        placeholder="Name"
      />
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input
        type="number"
        v-model="product.price"
        class="form-control"
        id="price"
        placeholder="Price"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="product.description"
        class="form-control"
        id="description"
        placeholder="Description"
      ></textarea>
    </div>
</div>
<div class="col-6 d-flex align-items-end">
    <button
      type="submit"
      class="btn btn-success my-2"
      @click.prevent="createProduct()"
    >
      Create product
    </button>
</div>
    
    
  </div>
  <div class="row mt-5 justify-content-center">
    <!-- bootstrap card placeholder -->
    
    <div v-if="!newProduct.price && processing" class="card col-3" aria-hidden="true">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <a
          class="btn btn-primary disabled placeholder col-6"
          aria-disabled="true"
        ></a>
      </div>
    </div>
    <div v-else-if="newProduct.price" class="card col-3 py-3" aria-hidden="true">
        <img :src="newProduct.image" class="product-image" :alt="product.title">
                <h5 class="card-title">{{ newProduct.title }}</h5>
                <p class="card-text text-secondary">{{ newProduct.description }}</p>
                <a href="#" class="btn btn-success">Add to cart</a>
    </div>
  </div>
</template>

<script>
//TODO: add value processing when submitting. It must show placeholder until the new product is created.
export default {
  name: "PostApi",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
      },
      newProduct: {},
      processing: false,
    };
  },
  methods: {
    createProduct() {
        this.processing = true;
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Otras cabeceras que puedas necesitar
        },
        body: JSON.stringify({
          title: this.product.name,
          price: this.product.price,
          description: this.product.description,
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.newProduct = data;
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style scoped></style>
