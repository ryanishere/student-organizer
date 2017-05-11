import { Component, OnInit } from '@angular/core';
import { Activity } from '../Activity';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   todos;
   text;
   items: FirebaseListObservable<string[]>; // listname
   user:  FirebaseObjectObservable<any[]>;
   userData = JSON.parse(localStorage.getItem('userData')); // used for UID
   search: FirebaseListObservable<any[]>;
   searchItem: string;  
   searchText;
   key;


   tex; // holds activity name for user input
   tex2;// holds time name for user input
   tex3;// holds priority name for user input
   tex4; // idk maybe in the future

   Activity;

  constructor(af: AngularFireDatabase) {
    const path = `/users/${this.userData.uid}`; // access user data
    this.items = af.list(path + `/items`); // should be replaced by listname
    this.user = af.object(path);
  }

  ngOnInit() {
    this.todos = [

    ];
  }


//onTodoDrop(e: any) {
//  this.todos.push(e.dragData);
//}



  //theres a bug in the delete function. It will delete multiples of the same item with one delete click*******************8
  deleteTodo(key){
    this.items.remove(key);
  }
  bubblesort(){
        // crappy bubble sort for now
        for( var i = 0 ; i < this.todos.length; i++){
            for(var j = 1; j < this.todos.length ; j++){
                if(this.todos[j-1].Activity.name > this.todos[j].Activity.name)
                {
                  /*
                  let temp : string = this.todos[j-1].Activity.name;
                  this.todos[j-1].Activity.name = this.todos[j].Activity.name ;
                  this.todos[j].Activity.name = temp;
                  */
                  let temp : Activity = this.todos[j-1].Activity;
                  this.todos[j-1].Activity = this.todos[j].Activity ;
                  this.todos[j].Activity = temp;
                  }
              }
            }
  }
  addTodo(){
    let temp = new Activity(this.tex, this.tex4, this.tex3);

    this.items.push({ 
                      Activity: temp
    });
    this.bubblesort();
  }

}

/*******************
import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   todos;
   text;
  constructor() { }

  ngOnInit() {
    this.todos = [

    ];  
  }
  addTodo(){
    this.todos.push({
      text: this.text
    });
  }

}

*******************/