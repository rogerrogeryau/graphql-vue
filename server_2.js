const {ApolloServer, gql} = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose
    .connect(process.env.MONGO_URI)
    .then( ()=> console.log('DB connected!'))
    .catch( err => console.error(err));



const typeDefs
 = gql`
    type Todo{
        task:String
        completed:Boolean
    }

    type Query{
        getTodos: [Todo]

    }

`;




const server = new ApolloServer({
    // typeDefs:typeDefs
    typeDefs,

});

server.listen(4500).then(({url}) =>{
    console.log(`server running on : ${url}`)
});