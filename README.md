# Mini Aplicación de Tareas en React (Actividad 4)

Proyecto configurado con Vite y React. Consiste en una aplicación de Lista de Tareas donde el usuario puede agregar nuevas tareas, marcarlas como completadas/desmarcadas y eliminarlas. El proyecto demuestra el uso de componentes, props, estado (useState) y renderizado de listas con `.map()`.

## Cuestionario

**a) ¿Qué diferencia hay entre props y state en React?**
*   **State (estado):** Es la memoria interna de un componente. Es información que puede cambiar con el tiempo y, cuando cambia hace que el componente se vuelva a renderizar.
*   **Props (propiedades):** Son argumentos que se pasan de un componente padre a un componente hijo. Son de solo lectura y el componente hijo no puede modificar sus propias props, solo leerlas para saber qué mostrar.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
Porque ayuda a React a identificar de manera única qué elementos de una lista han cambiado, se han agregado o se han eliminado. Sin una `key` única, si el arreglo se modifica, React tendría que volver a renderizar toda la lista.

**c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.**
La función `useState` es un Hook que le permite a los componentes funcionales recordar informacion. Cuando la llamamos, nos devuelve un arreglo con el valor actual del estado y una función para actualizar ese valor. 
*Ejemplo en mi app:* Usé `const [tasks, setTasks] = useState([...])` en el componente `App.jsx`. Esto crea una variable `tasks` que guarda mi lista de tareas. Cuando el usuario agrega o borra una tarea, llamo a `setTasks()` pasándole la nueva lista; esto le avisa a React que debe redibujar la pantalla con los datos actualizados.

## Enlaces del Proyecto
**d) Repositorio de GitHub:** 
[Código fuente del Repositorio](https://github.com/IrvingJosePG/t3_act4_react)

**e) Proyecto Desplegado (GitHub Pages):**
[Git Hub Pages](https://irvingjosepg.github.io/t3_act4_react/)