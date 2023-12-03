<template>
  <div v-if="product" class="row justify-content-start">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="IdfloatingInput"
        v-model="product.id"
        readonly disabled
      />
      <label for="IdfloatingInput">Id</label>
    </div>
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="TitlefloatingInput"
        v-model="product.title"
        placeholder="Title"
        readonly
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
        readonly
      />
      <label for="PricefloatingInput">Price</label>
    </div>
    <div class="form-floating">
      <!--TODO textarea rows doesnt work. With computed, calculate needed lines according to description.lenght -->
        <textarea
      :rows="num_filas"
        class="form-control"
        id="DescriptionfloatingInput"
        v-model="product.description"
        placeholder="Description"
        readonly
      />
      <label for="DescriptionfloatingInput">Description</label>
    </div>
    <button
      type="button"
      class="btn btn-success"
      @click="editProduct">Edit</button>
    
    
  </div>

</template>
<script>
export default {
  emits: ["editProduct"],
  data() {
    return {
      product: {},
      description: "",
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/" + this.id
        );
        if (!response.ok) {
          throw new Error("Error al obtener datos de la API");
        }

        const data = await response.json();
        this.product = data;
        this.description = data.description;
      } catch (error) {
        console.error(error.message);
      }
    },
    editProduct() {
      this.$emit("editProduct", this.product);
    },
  },
  watch: {
    id() {
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    num_filas() {
      return Math.floor(this.description.length / 100);
    },
  },
};
</script>
<style scoped>

.form-floating > input,textarea{
  cursor: not-allowed;
}
</style>
