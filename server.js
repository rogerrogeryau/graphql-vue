const {ApolloServer, gql} = require('apollo-server');


const todos = [
    {task:'wash cars', completed:true},
    {task:'sweep the desk', completed:true},
    {task:'sleeping', completed:true},
]


const typeDefs = gql`
    type Todo{
        task:String
        completed:Boolean
    }

    type Query{
        getTodos: [Todo]

    }

    type Mutation{
        addTodos(task:String, completed:Boolean):Todo
    }
`;

const resolvers = {
    Query:{
        // getTodos: function(){
        //     return todos;
        // }

        // es6 syntax
        // getTodos: () => {
        //     return todos
        // }

        getTodos: () => todos
    },

    Mutation:{
        addTodos: (_,args) =>{
            const todo = {task:args.task, completed: args.completed};
            todos.push(todo);
            return todo;
        }
    }
}


const server = new ApolloServer({
    // typeDefs:typeDefs
    typeDefs,
    resolvers
});

server.listen(4500).then(({url}) =>{
    console.log(`server running on : ${url}`)
});