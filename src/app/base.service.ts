import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  animals: AngularFireList<any>

  constructor(private db: AngularFireDatabase) { 
    this.animals=this.db.list('animals')
  }

  getAnimals(){
    return this.animals
  }

  saveAnimal(animal:any){
    this.animals.update(animal.key, animal)
  }
  deleteAnimal(animal:any){
    this.animals.remove(animal.key)
  }

  addAnimal(animal:any){
    this.animals.push(animal)
  }
}
