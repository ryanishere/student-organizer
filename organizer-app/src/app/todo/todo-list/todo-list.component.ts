import { Component, OnInit } from '@angular/core';
import { Activity } from './todo-item/Activity';
import { Todolist } from './Todolist';
import {EditEventComponent} from './todo-item/edit-event/edit-event.component';
import {TodoItemComponent} from './todo-item/todo-item.component'
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent implements OnInit {
   text;
   items: FirebaseListObservable<string[]>; // listname
   user:  FirebaseObjectObservable<any[]>; 

   todoLists: FirebaseListObservable<any[]>;

   userData = JSON.parse(localStorage.getItem('userData')); // used for UID
   search: FirebaseListObservable<any[]>;
   searchItem: string;
   searchText;
   key;

   needName = false;


   tex; // holds activity name for user input
   tex2;// holds time name for user input
   tex3;// holds priority name for user input
   tex4; // hold listname

   Activity;

  constructor(af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`);  // all items of every todolist
    this.user = af.object(path);
    this.todoLists = af.list(path + `/todolists` )
  }

  ngOnInit() {
  }


// onTodoDrop(e: any) {
//  this.todos.push(e.dragData);
// }

  showInput() {
    this.needName = !this.needName;
  }
  onAddList() {

  }

  
  addTodoList(){
    console.log("clicked");
    let todo = new Todolist(this.tex4);
    this.todoLists.push(todo);
  }

  deleteTodoList(key){
    this.todoLists.remove(key);
  }


  deleteTodoItems(key){
    this.items.remove(key);
  }
  addTodoItems(listName,activityName) {
      console.log("test" + listName + activityName);
      this.tex3 = ""; // placeholder for edit button later
      let temp = new Activity(activityName, listName, this.tex3);

    this.items.push({
        Activity: temp
    });

  }

}
