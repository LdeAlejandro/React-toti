import withTask from "./withTask";
import Body from "./Body";

function App(props) {
  const tasks = props.tasks;

  return (
      <div>
        Task count: {tasks.length}
        <Body/>
      </div>
    
  );
}

/*
export default withTask(App); é a forma como você aplica o Higher-Order Component (HOC) withTask ao componente App e exporta o resultado
Um Higher-Order Component (HOC) é uma função que recebe um componente 
e retorna um novo componente com funcionalidades adicionais. 
Eles são usados para compartilhar lógica entre componentes de maneira reutilizável.
*/ 
export default withTask(App);
