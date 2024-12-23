
document.getElementById("obtenerClima").addEventListener("click", () => {
    const API_KEY = "d6f677f44cddff30f5cb6fc1862b439a";  // 

    const lat = -34.617171585652265; 
    const lon = -58.495943833429;  
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
    
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.cod == "200"){
          mostrarClima(data);

        }
        else{
            console.error('Message del data:', data.message);
            document.getElementById("resultadoClima").innerHTML = `
            <h2>Error al obtener el clima</h2>
            <p>${data.message}</p>
        `;
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos del clima:', error);
      });
    
    });
    

    const mostrarClima = (data) => {
        const { name, main, weather } = data; 
        const temperatura = main.temp;
    
        const descripcion = weather[0].description;
    
        const humedad = main.humidity;
    
        document.getElementById("resultadoClima").innerHTML = `
            <h2 class="text-center">Clima en ${name}</h2> 
            <p>Temperatura: ${temperatura}°C</p>
            <p>Descripción: ${descripcion}</p> 
            <p>Humedad: ${humedad}%</p>
        `;
    };
    
