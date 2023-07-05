import { useState, useEffect } from 'react';
import './Semaforo.css'

//Adjunto comentarios para explicar que es lo que hace cada parte dentro del código
//Se que es buemo relizar comentarios dentro del código pero ya depende como se acuerde dentro del equipo.

export const Semaforo = () => {

    // Aquí almacenamos el color actual del semáforo. Inicializado en 'red' por defecto y posteriormente poder avanzar al siguiente.
    const [color, setColor] = useState('red');

    // En este caso, se usa para establecer un temporizador que cambiará el color del semáforo después de 2 segundos.
    // Se crea un temporizador utilizando setTimeout, que ejecutará la función changeColor después de 2000 milisegundos (2 segundos).
    // La función changeColor se encarga de cambiar el color del semáforo.
    // El temporizador se guarda en la variable 'timer' para que se pueda limpiar o cancelar más adelante en el retorno del efecto.
    // En este caso, no hay dependencias especificadas, por lo que el efecto se ejecutará solo una vez, cuando el componente se monte.

    useEffect(() => {

        const timer = setTimeout(() => {
            changeColor();
        }, 2000);

        // la función "changeColor" cambia el color del semáforo según el estado actual.
        const changeColor = () => {

            //Utilizamos un "switch" para realizar los cambios según el color actual, si es rojo pasa a amarillo y asi sucesivamnete
            switch (color) {
                case 'red':
                    setColor('green');
                    break;
                case 'green':
                    setColor('yellow');
                    break;
                case 'yellow':
                    setColor('red');
                    break;

                default:
                    // En caso de cualquier otro color, establece 'red' por defecto.
                    setColor('red');
            }
        };

        // Limpia el temporizador al desmontar el componente.
        return () => clearTimeout(timer);
        // La dependencia 'color' indica que el efecto se ejecutará cada vez que 'color' cambie.
    }, [color]);

    return (
        //mostramos en pantalla el renderizado de los colores del semaforo que cambia cada 2 segundos.
        //usamos className ya que no poedmos usar la palabra reservada class.
        <div className="semaforo-container">
            <div className={`semaforo-light ${color}`} />
        </div>
    );
};
