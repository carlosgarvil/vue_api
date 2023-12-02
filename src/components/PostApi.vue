<template>
    <h1>PostApi</h1>
    <div class="container">
        <!-- New product form -->
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="product.name" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Price">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="product.description" class="form-control" id="description" placeholder="Description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="createProduct()">Create product</button>
    </div>
    <div class="row mt-5">
        <!-- bootstrap card placeholder -->
        <div class="card col-3" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
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
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>

    </div>
</template>
    
<script>
    export default {
        name: 'PostApi',
        data(){
            return{
                product:{
                    name:'',
                    price:'',
                    description:''
                },
                newProduct:{
                    name:'',
                    price:'',
                    description:'',
                    image:'',
                    category:''
                }
            }
        },
        methods:{
            createProduct(){
                console.log(this.product)
                fetch('https://fakestoreapi.com/products',{
                    method:"POST",
                    body:JSON.stringify(
                        {
                            title: this.product.name,
                            price: this.product.price,
                            description: this.product.description,
                            image: 'https://i.pravatar.cc',
                            category: 'electronic'
                        }
                    )
                })
                    .then(res=>res.json())
                    .then(json=>this.newProduct=json)
            }
        }
    }

</script>
    
<style scoped></style>