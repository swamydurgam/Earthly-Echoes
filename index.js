const products = [
  // RICE & GRAINS
  {name:"Basmati Rice", price:120, img:"https://images.unsplash.com/photo-1586201375761-83865001e31c"},
  {name:"Brown Rice", price:90, img:"https://images.unsplash.com/photo-1604908176997-431fc5f1c7d4"},
  {name:"Wheat Flour", price:60, img:"https://images.unsplash.com/photo-1586444248902-2f64eddc13df"},

  // DAIRY
  {name:"Milk", price:25, img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"},
  {name:"Butter", price:50, img:"https://images.unsplash.com/photo-1589985270958-7c5b8c3a87a0"},
  {name:"Cheese", price:80, img:"https://images.unsplash.com/photo-1585238342028-1f3c2e3c2b8c"},
  {name:"Curd", price:30, img:"https://images.unsplash.com/photo-1604908554164-cf98d2c0e3a1"},

  // FRUITS
  {name:"Apples", price:120, img:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"},
  {name:"Bananas", price:40, img:"https://images.unsplash.com/photo-1574226516831-e1dff420e42e"},
  {name:"Mangoes", price:150, img:"https://images.unsplash.com/photo-1591073113125-e46713c829ed"},
  {name:"Oranges", price:80, img:"https://images.unsplash.com/photo-1580910051074-3eb694886505"},

  // VEGETABLES
  {name:"Tomatoes", price:40, img:"https://images.unsplash.com/photo-1592928302636-c83cf1a2f6f9"},
  {name:"Potatoes", price:30, img:"https://images.unsplash.com/photo-1582515073490-dc8c3c5bcb0f"},
  {name:"Onions", price:35, img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38"},
  {name:"Carrots", price:50, img:"https://images.unsplash.com/photo-1582515073490-dc8c3c5bcb0f"},

  // SNACKS
  {name:"Biscuits", price:20, img:"https://images.unsplash.com/photo-1585238342028-1f3c2e3c2b8c"},
  {name:"Chips", price:30, img:"https://images.unsplash.com/photo-1585238342028-1f3c2e3c2b8c"},
  {name:"Namkeen", price:60, img:"https://images.unsplash.com/photo-1604908176997-431fc5f1c7d4"},
  {name:"Chocolate", price:90, img:"https://images.unsplash.com/photo-1606312619344-86d77a8f2c91"},

  // BEVERAGES
  {name:"Tea Powder", price:120, img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},
  {name:"Coffee", price:150, img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},
  {name:"Soft Drink", price:40, img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"},
  {name:"Fruit Juice", price:60, img:"https://images.unsplash.com/photo-1553530666-ba11a90bb0c7"},

  // HOUSEHOLD
  {name:"Soap", price:30, img:"https://images.unsplash.com/photo-1585238342028-1f3c2e3c2b8c"},
  {name:"Shampoo", price:120, img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30"},
  {name:"Toothpaste", price:70, img:"https://images.unsplash.com/photo-1588776814546-ec7e1c1b7c3e"},
  {name:"Detergent", price:150, img:"https://images.unsplash.com/photo-1581578731548-c64695cc6952"},

  // EXTRA ITEMS
  {name:"Eggs (12 pcs)", price:70, img:"https://images.unsplash.com/photo-1517959105821-eaf2591984c7"},
  {name:"Bread", price:30, img:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec"},
  {name:"Cooking Oil", price:180, img:"https://images.unsplash.com/photo-1586201375761-83865001e31c"},
  {name:"Salt", price:20, img:"https://images.unsplash.com/photo-1604908176997-431fc5f1c7d4"},
  {name:"Sugar", price:45, img:"https://images.unsplash.com/photo-1604908176997-431fc5f1c7d4"}
];

let cart = [];

/* DISPLAY PRODUCTS */
function displayProducts(data){
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  data.forEach(p=>{
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add</button>
      </div>
    `;
  });
}

displayProducts(products);

/* ADD TO CART */
function addToCart(name){
  const product = products.find(p => p.name === name);
  cart.push(product);
  updateCart();
}

/* UPDATE CART */
function updateCart(){
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{
    total += item.price;

    cartItems.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

/* REMOVE ITEM */
function removeItem(index){
  cart.splice(index,1);
  updateCart();
}

/* TOGGLE CART */
function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}

/* SEARCH */
document.getElementById("search").addEventListener("input", function(){
  const value = this.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

/* SHOW PAYMENT */
function showPayment(){
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  document.getElementById("cart").classList.remove("active");

  const paymentSection = document.getElementById("paymentSection");
  paymentSection.classList.remove("hidden");
  paymentSection.scrollIntoView({behavior:"smooth"});
}

/* PROCESS PAYMENT */
function processPayment(){
  const method = document.getElementById("paymentMethod").value;

  if(method === ""){
    alert("Select payment method");
    return;
  }

  document.getElementById("paymentMsg").innerHTML =
    "✅ Payment Successful via " + method;

  cart = [];
  updateCart();

  setTimeout(()=>{
    alert("🎉 Order Confirmed!");
    window.scrollTo({top:0,behavior:"smooth"});
    document.getElementById("paymentSection").classList.add("hidden");
  },1000);
}



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".product, .categories, .trust").forEach(el=>{
  el.classList.add("fade-in");
  observer.observe(el);
});






window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}



