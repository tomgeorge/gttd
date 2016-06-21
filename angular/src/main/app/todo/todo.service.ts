import { Injectable }    from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Todo } from './todo.builder';
import { Observable } from 'rxjs/Observable';
import { ConsoleLogService  } from '../shared/console.log.service';


@Injectable()
export class TodoService {

    todoUrl: string = 'api/todos';

    constructor(private http: Http, private logger: ConsoleLogService) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.todoUrl)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    getTodo(id: number) : Observable<Todo> {
        return this.getTodos()
        .reduce((acc, value) => value.filter( t => t.id == id),
        []
        )[0];
    }


    private post(todo: Todo): Observable<Todo> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let body = JSON.stringify(todo);
        let options = new RequestOptions({ headers: headers });
        this.logger.log(`headers: [${JSON.stringify(headers)}] body: ${body}`)
        return this.http
            .post(this.todoUrl, body, options)
            .map(response => {
                this.logger.log(`POST response body ${JSON.stringify(response)}`);
                return response.json().data;
            })
            .catch(this.handleError);
    }

    private put(todo: Todo) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.todoUrl}/${todo.id}`;

        return this.http
            .put(url, JSON.stringify(todo), { headers: headers })
            .map(() => todo)
            .catch(this.handleError);
    }

    delete(todo: Todo) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let url = `${this.todoUrl}/${todo.id}`;

        return this.http
            .delete(url, { headers: headers })
            .map((response: Response) => {
                this.logger.log(`del response ${JSON.stringify(response)}`);
            })
    }

    save(todo: Todo): Observable<Todo> {
        if (todo.id) {
            return this.put(todo);
        }
        return this.post(todo);
    }

    createTodo(todo: Todo): Observable<Todo> {
        return this.post(todo);
    }


    private extractData(response: Response) {
        this.logger.log('extractData()');
        let body = response.json();
        this.logger.log(`response body: ${body}`);
        return body.data || { };
    }

    private handleError(error: any) {
        this.logger.log('handleError()');
        let errorMessage = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        this.logger.info(`error ${errorMessage}`);
        return Observable.throw(errorMessage);
    }
}
