export default (await import('vue')).defineComponent({
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
});
