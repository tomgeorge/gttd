import { Todo} from '../todo';

export class TodoBuilder {
   
    private id: number;
    private name: string;
    private description: string;
    private inProgress: boolean;
    private time: number;
    private estimate: number;
    private completed: boolean;
    private startTime: number;
    private endTime: number;
    
    constructor(id: number) {
        this.id = id;
    }
    
    getId(): number {
        return this.id;
    }
}