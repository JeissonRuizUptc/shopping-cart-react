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

  function userValidator(userName, dPassword) {
    const url = "http://localhost:8000/users/login"
    const data = { email: userName , password: dPassword };
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Cuerpo de
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la petición POST: " + response.status);
        }
        console.log(response.status);
        return response.status;
        
      })
      .then(responseData => {
        // Aquí puedes hacer algo con los datos de respuesta
        console.log(responseData);
      })
      .catch(error => {
        console.error("Error en la petición POST:", error);
      });
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