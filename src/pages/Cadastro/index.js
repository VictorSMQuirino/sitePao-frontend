import React, { useState, useEffect } from 'react';
import { IoLogIn } from 'react-icons/io5';
import { RiShoppingBagFill } from 'react-icons/ri';
import './style.css';
import { Link, useHistory, useParams } from "react-router-dom";
import api from '../../services/api';


export default function Profile() {

    const { id } = useParams();

    const history = useHistory();

    const initUser = {
        name: '',
        rua: '',
        bairro: '',
        numero: '',
        complemento: '',
        telefone: '',
        email: '',
        senha: ''
    }
    const [user, setUser] = useState(initUser);

    useEffect(() => {
        if (id) {
            api.get(`/users/${id}`).then(response => {
                //console.log(response.data)
                setUser(...response.data)
            })
        }
    }, []);

    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id ? `/users/${id}` : `/users`;

        //api.post('/users',user).then((response)=>{
        api[method](url, user).then((response) => {
            history.push('/')
        })
    }

    function onChange(ev) {
        const { name, value } = ev.target;
        setUser({ ...user, [name]: value })
        //console.log(user)
    }

    return (
        /*<h1>Profile</h1>*/
        <div id="profile-container">
            <div id="menu">
                <h1>
                    <Link to={`/cadastro`}>Cadastrar-se</Link>
                </h1>
                <h1>
                    <Link to={`/listProduto`}>Produtos</Link>
                </h1>
                <h1>
                    {<Link to={`/sacola`}>Sacola <RiShoppingBagFill id="iconLog" /></Link>}
                </h1>
                <h1>
                    <Link /*to={`/listProduto`}*/>Login <IoLogIn id="iconLog" /></Link>
                </h1>
            </div>
            <div id="meio">
                <h1 id="titulo1">Cadastro de Cliente</h1>
                <div id="centralizaTudo">
                    <form onSubmit={onSubmit}>
                        <strong>Nome:</strong>
                        <input name="name" onChange={onChange} value={user.name} />
                        <strong>Rua:</strong>
                        <input name="rua" onChange={onChange} value={user.rua} />
                        <strong>Bairro:</strong>
                        <input name="bairro" onChange={onChange} value={user.bairro} />
                        <strong>Nº:</strong>
                        <input name="numero" onChange={onChange} value={user.numero} />
                        <strong>Complemento:</strong>
                        <input name="complemento" onChange={onChange} value={user.complemento} />
                        <strong>Telefone:</strong>
                        <input name="telefone" onChange={onChange} value={user.telefone} />
                        <strong>Email:</strong>
                        <input name="email" onChange={onChange} value={user.email} />
                        <strong>Senha:</strong>
                        <input name="senha" onChange={onChange} value={user.senha} />

                        <div className="actions">
                            {/*<Link className="button"  to={"/"}>Volta</Link>*/}
                            <Link className="button" onClick={() => history.push('/')}>Volta </Link>
                            <button className="button" type="subimit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}