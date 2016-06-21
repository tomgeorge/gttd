import { Request, Response } from 'express';


export function index(request: Request, response: Response) {
    response.send('eat shit Andrew');
}