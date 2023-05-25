import React , {useState}from "react";
import './FormRegister.css';
import tortuga from '../assets/fonts/login.png';
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { registerValidator} from "../rest/RegisterValidator";

const FormRegister = () => {

    const [miLogin, setLogin] = useState("false");
    const [usu, setUsu] = useState("");  
    const [nam, setNam] = useState(""); 
    const [sur, setSur] = useState(""); 
    const [ema, setEma] = useState(""); 
    const [pas, setPas] = useState(""); 

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtnam = document.getElementById("txtnam").value;
        var txtsur = document.getElementById("txtsur").value;
        var txtema = document.getElementById("txtema").value;
        var txtpas = document.getElementById("txtpas").value;
        if(txtema.leng===0 || txtpas===0 || txtnam===0 || txtsur===0){
            alert("llene los campos")
        }else{
            if(registerValidator(txtusu ,txtnam, txtsur, txtema, txtpas)){
                setLogin("true");
                alert("Login exitoso");
            }else{
                document.getElementById("txtusu").value = "";
                document.getElementById("txtnam").value = "";
                document.getElementById("txtsur").value = "";
                document.getElementById("txtema").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
        }
    }

    return (
        <div className="formRegister">
            <div className="formRegister_image">
            </div>
            
            <div className="formRegister_title">
                <h2>Registro de usuario</h2>
            </div>
            
            <form className="formRegister_form" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="">Usuario</label>
                <div className="inputName">
                    <input type="text" id="txtusu"
                        laceholder="Crea tu nombre de usuario" 
                        className="form-control" 
                        name="username"
                        onChange={(e)=>setUsu(e.target.value)}
                        {...register('username', {
                            required:true
                        })}/>
                </div>

                <div className="formRegister_form-names">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <div className="inputName">
                            <input type="text" id="txtnam" placeholder="Nombre" className="form-control"
                            name="name"
                            onChange={(e)=>setNam(e.target.value)}
                             {...register('name', {
                                required:true
                            })}/>
                        </div>
                    </div>
                    
                    <div className="formRegister_form-names-surname">
                        <label htmlFor="">Apellido</label>
                        <div className="inputName">
                            <input type="text" id="txtsur" placeholder="Apellido" className="form-control"  
                            name="surname"
                            onChange={(e)=>setSur(e.target.value)}
                            {...register('surname', {
                            required:true,
                            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
                        })}/>
                        </div>
                    </div>
                </div>


                <div></div>
                <div></div>
                
                <label htmlFor="">Correo electronico</label>
                <div className="inputName">
                    <input type="email" id="txtema" placeholder="user@example.com" className="form-control"
                    name="email"
                    onChange={(e)=>setEma(e.target.value)}
                    {...register('email', {
                    required:true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
                })} 
                    />
                </div>

                <label htmlFor="">Contraseña</label>
                <div className="inputPassword">
                    <input type="password" id="txtpas" placeholder="Tu contraseña"
                    onChange={(e)=>setPas(e.target.value)}
                    className="form-control" />
                </div>

                <label htmlFor="">Confirmación de contraseña</label>
                <div className="inputName">
                    <input type="password" className="form-control" />
                </div>

                <div className="divButton">
                    <input type="submit" className="btn btn-secondary" value="Registrar" onClick={onSubmit} />
                </div>

                <Link to="/">
                    <a href="">¿Tienes usuario? Iniciar Sesion</a>
                </Link>
                
            </form>


        </div>
    )
};

export default FormRegister;