import {Component} from 'angular2/core';
import TodoStore from '../store/todostore';
import TodoItem from '../todoitem/todoitem';
import ItemUpdatedEvent from '../todoitem/itemupdatedevent';
import {addItem, removeItem, updateItemText, updateItemCompletion} from '../store/actions';
import 'todolist/todolist.html';
import Html from "todolist.html!text";

declare module "todolist.html!text" {
    var html: number;
    export default x;
}

@Component({
  selector: 'todo-list',
  templateUrl: 'todolist.html',
  styleUrls: ['todolist/todolist.css'],
  directives: [TodoItem]
})
export  class TodoList {
  newItem = 'test';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  addItem() {
    this.store.dispatch(addItem(this.newItem));
    this.newItem = '';
  }

  removeItem(itemId: string) {
    this.store.dispatch(removeItem(itemId));
  }

  itemUpdated(event: ItemUpdatedEvent) {
    if (event.text !== undefined) {
      if (event.text === '') {
        this.store.dispatch(removeItem(event.itemId));
      } else {
        this.store.dispatch(updateItemText(event.itemId, event.text));
      }
    }
    if (event.completed !== undefined) {
      this.store.dispatch(updateItemCompletion(event.itemId, event.completed));
    }
  }
}
