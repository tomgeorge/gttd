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

    constructor() { }

    get Id() {
        if (this.id) {
            return this.id;
        } else {
            return 1;
        }
    }

    setId(id: number): TodoBuilder {
        this.id = id;
        return this;
    }

    get Name() {
        if (this.name) {
            return this.name;
        } else {
            return 'Default';
        }
    }

    setName(name: string): TodoBuilder {
        this.name = name;
        return this;
    }

    get Description() {
        if (this.description) {
            return this.description;
        } else {
            return 'Default';
        }
    }

    setDescription(description: string): TodoBuilder {
        this.description = description;
        return this;
    }

    get InProgress() {
        if (this.inProgress) {
            return this.inProgress;
        } else {
            return false;
        }
    }

    setInProgress(inProgress: boolean): TodoBuilder {
        this.inProgress = inProgress;
        return this;
    }

    get Completed() {
        if (this.completed) {
            return this.completed;
        } else {
            return false;
        }
    }

    setCompleted(completed: boolean): TodoBuilder {
        this.completed = completed;
        return this;
    }

    get Time() {
        if (this.time) {
            return this.time;
        } else {
            return 0;
        }
    }

    setTime(time: number): TodoBuilder {
        this.time = time;
        return this;
    }

    get Estimate() {
        if (this.estimate) {
            return this.estimate;
        } else {
            return 0;
        }
    }

    setEstimate(estimate: number): TodoBuilder {
        this.estimate = estimate;
        return this;
    }

    get StartTime() {
        if (this.startTime) {
            return this.startTime;
        } else {
            return 0;
        }
    }

    setStartTime(startTime: number): TodoBuilder {
        this.startTime = startTime;
        return this;
    }

    get EndTime() {
        if (this.endTime) {
            return this.endTime;
        } else {
            return 0;
        }
    }

    setEndTime(endTime: number): TodoBuilder {
        this.endTime = endTime;
        return this;
    }

    build(): Todo {
        return new Todo(this);
    }
}

export class Todo {
    id: number;
    name: string;
    description: string;
    inProgress: boolean;
    time: number;
    estimate: number;
    completed: boolean;
    startTime: number;
    endTime: number;

    constructor(todoBuilder: TodoBuilder) {
        this.id = todoBuilder.Id;
        this.name = todoBuilder.Name;
        this.description = todoBuilder.Description;
        this.inProgress = todoBuilder.InProgress;
        this.time = todoBuilder.Time;
        this.estimate = todoBuilder.Estimate;
        this.completed = todoBuilder.Completed;
        this.startTime = todoBuilder.StartTime;
        this.endTime = todoBuilder.EndTime;
    }
}
