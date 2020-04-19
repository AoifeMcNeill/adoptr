import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pet;
  currentPetCategory = 'cats';
  currentPetBreed = 'Birman';
  currentPetColour = 'flame point';
  currentPetCoat = 'semi-long';
  currentPetSize = 'large';
  currentPetSex = 'M';
  currentPetAge = '2 - 3';
  currentPetCatFriendly = true;
  currentPetDogFriendly = true;
  currentPetChildFriendly = true;
  currentPetAdoptable = true;

  constructor(private apiService: ApiService) { 
    this.getPetByCategory(this.pet);
    this.getPetByBreed(this.pet);
    this.getPetByColour(this.pet);
    this.getPetByCoat(this.pet);
    this.getPetBySize(this.pet);
    this.getPetBySex(this.pet);
    this.getPetByAge(this.pet);
    this.getPetByCatFriendly(this.pet);
    this.getPetByDogFriendly(this.pet);
    this.getPetByChildFriendly(this.pet);
    this.getPetByAdoptable(this.pet);
  }

  ngOnInit(): void {
  }

  getPetByCategory(category){
    this.apiService.getPetByCategory(category).subscribe((data) => {
      this.pet = data[0];
      this.currentPetCategory = this.pet.category;
      //console.log(this.pet);
    })
  }

  getPetByBreed(breed){
    this.apiService.getPetByBreed(breed).subscribe((data) => {
      this.pet = data[0];
      this.currentPetBreed = this.pet.breed;
      //console.log(this.pet);
    })
  }

  getPetByColour(colour){
    this.apiService.getPetByColour(colour).subscribe((data) => {
      this.pet = data[0];
      this.currentPetColour = this.pet.colour;
      //console.log(this.pet);
    })
  }

  getPetByCoat(coat){
    this.apiService.getPetByCoat(coat).subscribe((data) => {
      this.pet = data[0];
      this.currentPetCoat = this.pet.coat;
      //console.log(this.pet);
    })
  }

  getPetBySize(size){
    this.apiService.getPetBySize(size).subscribe((data) => {
      this.pet = data[0];
      this.currentPetSize = this.pet.size;
      //console.log(this.pet);
    })
  }

  getPetBySex(sex){
    this.apiService.getPetBySex(sex).subscribe((data) => {
      this.pet = data[0];
      this.currentPetSex = this.pet.sex;
      //console.log(this.pet);
    })
  }

  getPetByAge(age){
    this.apiService.getPetByAge(age).subscribe((data) => {
      this.pet = data[0];
      this.currentPetAge = this.pet.age;
      //console.log(this.pet);
    })
  }

  getPetByCatFriendly(cat_friendly){
    this.apiService.getPetByCatFriendly(cat_friendly).subscribe((data) => {
      this.pet = data[0];
      this.currentPetCatFriendly = this.pet.cat_friendly;
      //console.log(this.pet);
    })
  }

  getPetByDogFriendly(dog_friendly){
    this.apiService.getPetByDogFriendly(dog_friendly).subscribe((data) => {
      this.pet = data[0];
      this.currentPetDogFriendly = this.pet.dog_friendly;
      //console.log(this.pet);
    })
  }

  getPetByChildFriendly(child_friendly){
    this.apiService.getPetByChildFriendly(child_friendly).subscribe((data) => {
      this.pet = data[0];
      this.currentPetChildFriendly = this.pet.child_friendly;
      //console.log(this.pet);
    })
  }

  getPetByAdoptable(adoptable){
    this.apiService.getPetByAdoptable(adoptable).subscribe((data) => {
      this.pet = data[0];
      this.currentPetAdoptable = this.pet.adoptable;
      //console.log(this.pet);
    })
  }
}
