/*export const fetchData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const decodedData = data.map(item => {
        const decodedItem = {};
        Object.keys(item).forEach(key => {
          decodedItem[key] = JSON.parse(item[key]);
        });
        return decodedItem;
      });

      // Convertir los datos a formato de cadena
      const dataAsString = JSON.stringify(decodedData);

      // Imprimir las columnas
      const columnas = Object.keys(decodedData[0]);
      console.log("Columnas:");
      console.log(columnas);

      // Imprimir las filas
      console.log("Filas:");
      decodedData.forEach((fila, index) => {
        console.log(`Fila ${index + 1}:`);
        console.log(Object.values(fila));
      });

      return dataAsString;
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
};

/*
const url = 'http://127.0.0.1:8000/api/blogs';

fetchData()
  .then(data => {
    // Utilizar los datos obtenidos de la API
    console.log("Datos retornados:", data);
  });
*/



/*
export const fetchData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const decodedData = data.map(item => {
        const decodedItem = {};
        Object.keys(item).forEach(key => {
          decodedItem[key] = JSON.parse(item[key]);
        });
        return decodedItem;
      });

      // Imprimir las columnas
      const columnas = Object.keys(decodedData[0]);
      console.log("Columnas:");
      console.log(columnas);

      // Imprimir las filas
      console.log("Filas:");
      decodedData.forEach((fila, index) => {
        console.log(`Fila ${index + 1}:`);
        console.log(Object.values(fila));
      });

      return decodedData;
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
};

const url = 'http://127.0.0.1:8000/api/blogs';

fetchData()
  .then(data => {
    // Utilizar los datos obtenidos de la API
    console.log("Datos retornados:", data);
  });

/*





const url = 'https://my-json-server.typicode.com/typicode/demo/comments';
fetchData(url)
  .then(data => {
    // Utilizar los datos obtenidos de la API
    console.log("Datos retornados:");
    console.log(data);
  });

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Columnas:");
      console.log(Object.keys(data[0]));
      console.log("Filas:");
      data.forEach((fila, index) => {
        console.log(`Fila ${index + 1}:`);
        console.log(Object.values(fila));
      });
      return data;
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
}




/*

const url = 'http://127.0.0.1:8000/api/blogs';

export const fetchData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const decodedData = data.map(item => {
        const decodedItem = {};
        Object.keys(item).forEach(key => {
          decodedItem[key] = JSON.parse(item[key]);
        });
        return decodedItem;
      });
      return decodedData;
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
};
*/

/*
const data = [
    ["Total Bill", "tipos", "Payer Gender", "Payer Smoker", "Day of Week", "Meal", "Party Size"],
    [16.99, 1.01, "Female", "Non-Smoker", "Sunday", "Dinner", 2],
    [27.18, 2, "Female", "Smoker", "Saturday", "Dinner", 2],
    [22.67, 2, "Male", "Smoker", "Saturday", "Dinner", 2],
    [17.82, 1.75, "Male", "Non-Smoker", "Saturday", "Dinner", 2],
    [18.78, 3, "Female", "Non-Smoker", "Thursday", "Dinner", 2]
  ];
  */
  /*
  // Función para imprimir los datos en el formato deseado
  function printData(data) {
    // Recorrer cada fila de datos
    for (let i = 0; i < data.length; i++) {
      let row = '';
      // Recorrer cada elemento de la fila
      for (let j = 0; j < data[i].length; j++) {
        row += data[i][j] + ', '; // Concatenar el elemento seguido de una coma y un espacio
      }
      console.log(row); // Imprimir la fila de datos
    }
  }
  
  // Llamar a la función para imprimir los datos
  printData(data);
  */

/*
  fetch('http://localhost:8000/api/ventas')
  .then(response => response.json())
  .then(data => {
    // Aquí tienes acceso a los datos devueltos por la API en la variable 'data'
    console.log(data);
    // Puedes realizar cualquier otra operación que necesites con los datos
  })
  .catch(error => {
    // Manejo de errores en caso de que la solicitud falle
    console.error('Error:', error);
  });
 */
  /*
 fetch('http://localhost:8000/api/ventas')
  .then(response => response.json())
  .then(data1 => {
    // Aquí tienes acceso a los datos devueltos por la API en la variable 'data'
    console.log(data1);
    // Puedes realizar cualquier otra operación que necesites con los datos

    // Convertir los datos a una cadena JSON
    const Data = JSON.stringify(data1);

    // Aquí tienes los datos en forma de cadena JSON
    console.log(Data);
  })
  .catch(error => {
    // Manejo de errores en caso de que la solicitud falle
    console.error('Error:', error);
  });
*/
/*
async function fetchDataFromAPI() {
  try {
    const response = await fetch('http://localhost:8000/api/ventas');
    const data = await response.json();
    
    const tips = [];
    
    // Recorre cada objeto del arreglo de datos
    data.forEach((obj) => {
      const record = [];
      
      // Obtiene las claves de cada objeto
      const keys = Object.keys(obj);
      
      // Recorre las claves y obtiene los valores correspondientes
      keys.forEach((key) => {
        // Si el valor es null o está ausente, se considera como "null"
        const value = obj[key] === null || obj[key] === undefined ? 'null' : obj[key];
        
        // Agrega el valor al registro
        record.push(value);
      });
      
      // Agrega el registro al resultado final
      tips.push(record);
    });
    
    return tips;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    return [];
  }
}

// Llama a la función y maneja el resultado
fetchDataFromAPI()
  .then((tips) => {
    console.log(tips);
  })
  .catch((error) => {
    console.error('Error al obtener los datos:', error);
  });

  */
  export default [
    {
      "id": 1,
      "fecha_venta": "2023-01-01",
      "cliente": "Cliente 1",
      "producto": "Producto 1",
      "cantidad": 5,
      "precio": "10.99",
      "total": "54.95",
      "created_at": "2023-06-08T14:54:18.000000Z",
      "updated_at": "2023-06-08T14:54:18.000000Z"
      },
      {
      "id": 2,
      "fecha_venta": "2023-01-02",
      "cliente": "Cliente 2",
      "producto": "Producto 2",
      "cantidad": 3,
      "precio": "15.99",
      "total": "47.97",
      "created_at": "2023-06-08T14:54:18.000000Z",
      "updated_at": "2023-06-08T14:54:18.000000Z"
      },
      {
      "id": 3,
      "fecha_venta": "2023-01-03",
      "cliente": "Cliente 3",
      "producto": "Producto 1",
      "cantidad": 2,
      "precio": "10.99",
      "total": "21.98",
      "created_at": "2023-06-08T14:54:18.000000Z",
      "updated_at": "2023-06-08T14:54:18.000000Z"
      },
      {
      "id": 4,
      "fecha_venta": "2023-01-04",
      "cliente": "Cliente 4",
      "producto": "Producto 3",
      "cantidad": 1,
      "precio": "25.50",
      "total": "25.50",
      "created_at": "2023-06-08T14:54:18.000000Z",
      "updated_at": "2023-06-08T14:54:18.000000Z"
      },
      {
      "id": 5,
      "fecha_venta": "2023-01-05",
      "cliente": "Cliente 2",
      "producto": "Producto 1",
      "cantidad": 4,
      "precio": "10.99",
      "total": "43.96",
      "created_at": "2023-06-08T14:54:18.000000Z",
      "updated_at": "2023-06-08T14:54:18.000000Z"
      },
  ];
  

/*
  const data = [
    ["Total Bill","tipos","Payer Gender","Payer Smoker","Day of Week","Meal","Party Size"],
    [16.99,1.01,"Female","Non-Smoker","Sunday","Dinner",2],
    [10.34,1.66,"Male","Non-Smoker","Sunday","Dinner",3],
    // ...
  ];
  */


 /*
  export async function sendDataToAPI(data) {
    try {
      const response = await fetch('http://localhost:8000/api/ventas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Datos enviados correctamente');
      } else {
        console.error('Error al enviar los datos:', response.status);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  }
  */