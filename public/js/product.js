const onSubmitHandler=(e)=>{
  e.preventDefault();
  console.log("Hii i am here");

  const product=e.target.productName.value;

  const obj={
    "productName":product
  }
  console.log(obj);
  
  axios.post(`http://localhost:4000/product-ecommerce`,obj).then((res)=>{
      console.log(res.data);
      
  })
}