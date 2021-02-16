import { Component, OnInit } from '@angular/core';
import {Todo} from './../../app/models/Todo' // on fait l'imporation du fichier todo.ts qui contient les deux variables

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[]; // todos est un tableau de Todo, Todo est un type => une classe déja declaré sous src->models->todo.ts

  inputTodo:string = ""; // déclaration d'une chaine de caractére vide

  constructor() { }

  ngOnInit(): void { // ngOnInit : la premiere chause afficher le temps du lencement du projet
    this.todos = [] // affichge du tableau todos deja déclarer en haut
  }

  // cette fonction sert a supprimer une ligne de la liste quand l'utilisateur clique sur le bouton de suppression
 deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
 }

  // cette fonction sert a ajouter une ligne à la liste quand l'utilisateur tappe le texte a jouter et clique sur le bouton a coté
 addTodo (){
   this.todos.push({
      content: this.inputTodo,
      completed: false
   });
   this.inputTodo= ""; // liste sera vide juste apres le clique de bouton de l'ajout
 }
  
}
