import axios from "axios";
import React, { useEffect, useState } from 'react';



const validateStatusCode = (statusCode) => {
    if (statusCode === 302) {
      // El código de estado es 302 (OK)
      console.log('La petición fue exitosa');
      // Realiza alguna acción adicional si el resultado es exitoso
        return true;
    } else {
      // La petición tuvo un código de estado distinto a 302
      console.log('La petición no fue exitosa');
      return false;
      // Realiza alguna acción adicional si el resultado no es exitoso
    }
  };

const userValidator = async (username, password) => {
    const data = {
      email: username,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:8000/users/login', data);
      const statusCode = response.status;
      console.log('Status code: ', statusCode);     
      return validateStatusCode(statusCode);
    } catch (error) {
      console.error('Ocurrió un error al realizar la petición', error);
      // Realiza alguna acción en caso de error
      return false
    }
  }

  function GenericGet() {
    return fetch("http://localhost:8000/users/productview")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la petición GET: " + response.status);
        }
        return response.json();
      })
      .then(data => {
        // Aquí puedes hacer algo con los datos obtenidos
        console.log(data);
      })
      .catch(error => {
        console.error("Error en la petición GET:", error);
      });
  }
  


 
export {userValidator, GenericGet};