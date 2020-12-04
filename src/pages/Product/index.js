import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import './style.css';

export default function Product(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        api.get('products').then(response =>{
            setProducts(response.data);
        })
    },[])
    return(
        <div id="product-container">
            <h1>Produtos</h1>
            <ul className="product-list">
                {products.map(product =>(
                    <li key={product.id}>
                        <strong>{product.name}</strong>
                        <p>Descrição do produto: {product.descricao}</p>
                        <p>Quantidade: {product.quantidade}</p>
                        <p>R$ {product.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}