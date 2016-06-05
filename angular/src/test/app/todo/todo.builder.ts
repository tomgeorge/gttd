

module TodoBuilder {
    
    export class TodoBuilder {    
     build: Todo {
            return {
            
        };
    }
    
    class Todo {
        id: number;
        name: string;
        description: string;
        inProgress: boolean;
        time: number;
        estimate: number;
        completed: boolean;
        startTime: number;
        endTime: number;
        
        constructor(builder: TodoBuilder) {
            this.id = builder.id;
        }
    }
}