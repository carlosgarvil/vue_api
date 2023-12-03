<template>
    <h1>GetApi</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat dolor sapiente, eius quod sunt delectus
        mollitia, doloremque atque, corporis deserunt enim nisi repellat illo. Assumenda vitae ipsam eos omnis.</p>
    <div>
        <h1>Productos de la API:</h1>
        <div class="row align-items-start my-2">
            <div class="col-1">
                <input type="number" class="form-control" v-model="limit" min="0">
            </div>
            <div class="col-11">
                <button @click="fetchData" class="btn btn-success">Obtener Productos</button>
            </div>

        </div>
        <div class="row justify-content-start">
            <div class="product col-6 col-md-4 col-lg-3 col-xl-2 p-3" v-for="product in products" :key="product.id">
                <img :src="product.image" class="product-image" :alt="product.title">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text text-secondary">{{ truncateDescription(product.description) }}</p>
                <a href="#" class="btn btn-success">Add to cart</a>

            </div>
        </div>

    </div>
</template>
    
<script>
export default {
    data() {
        return {
            products: [],
            limit: 5, // Valor por defecto
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=' + this.limit);
                if (!response.ok) {
                    throw new Error('Error al obtener datos de la API');
                }

                const data = await response.json();
                this.products = data;
            } catch (error) {
                console.error(error.message);
            }
        },
        truncateDescription(description) {
            return description.substring(0, 50) + '...';
        },
    },
    
};
</script>
    
<style scoped>
.product{
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
}
.product:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>