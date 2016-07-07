import { Request, Response } from 'express';


export function index(request: Request, response: Response) {
    response.send('index');
}
