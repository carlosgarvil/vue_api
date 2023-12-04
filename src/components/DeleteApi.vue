<template>
  <h1>Delete</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat dolor
    sapiente, eius quod sunt delectus mollitia, doloremque atque, corporis
    deserunt enim nisi repellat illo. Assumenda vitae ipsam eos omnis.
  </p>
  <div>
    <h1>Lista de productos</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
          :id="'product' + product.id"
        >
          <td>{{ product.id }}</td>
          <td>
            <img :src="product.image" alt="" class="product-image" />
          </td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      limit: 10, // Valor por defecto
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=" + this.limit
        );
        if (!response.ok) {
          throw new Error("Error al obtener datos de la API");
        }

        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error(error.message);
      }
    },
    async deleteProduct(id) {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/" + id,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Error al eliminar el producto");
        }
        //add animation to the row  to be deleted
        const data = await response.json();
        const row = document.getElementById("product" + id);
        row.classList.add("animate-cell");
        //wait for the animation to finish
        setTimeout(() => {
          this.products = this.products.filter(
            (product) => product.id !== data.id
          );
        }, 2000);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.animate-cell {
  transition: opacity 2s;
  opacity: 0;
}

.product-image {
  border-radius: 5%;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  width: 80px;
  object-fit: cover;
}
</style>
