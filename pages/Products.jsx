import React, { useEffect, useState } from 'react'

const Products = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts = async () =>{
        try{
            const products= await fetch('https://fakestoreapi.com/products')
            const data = await products.json();
            setProducts(data)
            setLoading(false)
        }
        catch(e){
            setError(e)
        }};
        fetchProducts();

    },[]);
    

    return(
        <div style={{color: 'green'}}>
            <h1 style={{ margin: '50px'}}>Our products</h1>
            <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'}}>
                {products.map((product)=>(
                    <div key={product.id} style={{
                        padding: '40px',display: 'flex', flexDirection: 'column'}}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products