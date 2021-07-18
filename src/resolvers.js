import { tasks } from "./sample";
export const resolvers = {
    Query:{
        hello: () =>{
            return 'Hello World with graphql'
        },
        greet(root,{name}){
            console.log(name);
            return `Hello! ${name}`       
        },
        tasks(){
            return tasks
        },
    },
    Mutation:{
        createTask(_, {input}){
            input._id = tasks.length;
            tasks.push(input);
            return input;

        }
    }
}