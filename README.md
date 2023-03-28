Previo a las respuestas, quiero agradecer esto a mis mentores: Sergio Jaramillo y Cristian Buitrago. Además, también agradezco mucho, pero mucho a mis compañeros Andrés Vélez y Oscar Nuñez.

Sin ustedes, no creo que el proyecto esté en este estado

Respuesta a las preguntas:

1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

Respuesta:

Consta de cuatro ceremonias, las cuales son:

    - Sprint Planning: La planificación de lo que se va a hacer y cómo se va a hacer en un periodo de tiempo. El sprint planning involucra al producto y los backlogs de este

    - Daily Scrum: Reunión donde los miembros del equipo de desarrollo comentan qué hicieron, qué dificultades han tenido y cómo
    han avanzado con la meta del sprint

    - Sprint Review: es una reunión que ocurre al final del sprint, en el que el equipo de desarrollo y el cliente muestran
    lo que lograron, mientras que estos reciben feedback de las partes colaboradoras (o interesadas)

    - Sprint Retrospective: Sirve para hacer una retrospectiva del sprint reciente y poder identificar mejoras o fallas para proximos sprints

2. ¿Qué son los Wireframes?

Respueta:

Los wireframes son un prototipo de una página web o de una aplicación. Un ejemplo de cuando se emplea esto es en un maquetado,
ya bien sea hecho por un equipo de UX/UI o un desarrollador de Front-End, se diseña en programas tales como Adobe XD o Figma y
es "llevado a la vida" mediante HTML,CSS y JS

3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará:

Respuesta:

Existen multiples diferencias entre estas tres variables, aquí se resaltan las más importantes:
-var funciona en un ambito global, mientras que let y const lo hacen en un ambito de bloque
-var y let pueden ser modificadas, const no
-let y var pueden ser declaradas sin ser inicializadas (e.j: let a=;), pero const debe ser inicializada

Dada a la introducción de ES6, el uso de let y const ha superado el uso de var. Let se usaría en caso que se desea alterar un valor
(como el de una sumatoria), const se emplea para declarar una función flecha, estados en React, objetos o arreglos que no van a ser alterados directamente, etc.

4. Explicar la diferencia entre git merge y git rebase:

Respuesta:

Rebase unifica las ramas y elimina todo el historial de los commits. Merge lo que hace es mantener el historia de los commits a salvo, al costo de crear un commit que se le puede considerar como "de relleno"

5. Cuál es la diferencia entre Pull Request (PR) y el comando git pull

Respuesta:

Git pull lo que hace es descargar o actualizar un repositorio con los cambios que otras personas han hecho a este. El pull request
lo que hace es una contribución al código mediante una rama externa a la main y, a su paso, una unificación de esas dos ramas

6. ¿Qué es el Virtual DOM?

Respuesta:

El virtual DOM es una copia del DOM, es decir, usa una representación de la memoria del DOM para evitar la alteración
al DOM real y solo se actualice las partes que deseamos o requerimos

7. Comandos para crear una rama llamada rama-1

Respuesta:
-git checkout rama-1 (crea la rama y nos dirige a ella)
-git branch rama-1 (crea la rama desde el main)

8. Código CSS:

   .c-services {
   box-sizing: border-box;
   display: grid;
   grid-template-columns: 49% 49%;
   gap: 1rem;
   width: 100%;
   list-style-type: none;
   justify-content: space-between;
   padding: 0;
   }

   .c-section\_\_title {
   width: 100%;
   background-color: black;
   color: white;
   text-align: center;
   padding: 1.5rem 0;
   border-top: 15px solid #B7B7B7;
   }

   .c-services\_\_item{
   background-color: #F8F8FF;
   padding: 1.2rem;
   box-sizing:border-box;
   }

   .c-services\_\_item:hover{
   box-shadow: 0 4px 4px rgba(5,0,0,0.3)
   }

   .c-section h3{
   padding-left: 1rem;
   font-size: 20px;
   font-weight: 600;
   line-height: 1.5;
   }

   .c-section p{
   padding-left: 1rem;
   line-height: 1.4rem;
   }
