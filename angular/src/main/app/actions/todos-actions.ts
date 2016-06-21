import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as Redux from 'redux';
import { IAppState } from '../store/store';


@Injectable()
export class TodosActions {
    constructor(
        private ngRedux: NgRedux<IAppState>
    ) {}

    static ADD_TODO: string = 'ADD_TODO';
    static REMOVE_TODO: string = 'REMOVE_TODO';
}