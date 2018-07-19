// Welcome to Launchpad!
// Log in to edit and save pads, and run queries in GraphiQL on the right.


import {makeExecutableSchema, addMockFunctionsToSchema,} from 'graphql-tools';


const typeDefs = `
  type User {
     id: String,
     age:Boolean
  }
  type Query {
    text(message:Int!):[User]
    hello: String
    aString: String
    aBoolean: Boolean
    anInt: Int
    author:[User],
    message(msg:String):String
    
  }
`;

const resolvers = {
  Query: {
    aString(){
      return 'string';
    },
    hello(){
      return 'hello world'
    },
    text(root, {message}, context){
      return [{id: message, age: 18}, {id: 2, age: 0}]
    },
    author(){
      return [{id:'author', age: 18}, {id: 2, age: 0}]
    },
    message(root,{msg},context){
      return `+${msg}`;
    }

  }
};

export const schema = makeExecutableSchema({typeDefs, resolvers});


//addMockFunctionsToSchema({schema});  //自动模拟数据

