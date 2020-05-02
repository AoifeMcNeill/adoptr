import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../../service/api.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-adopt-page',
  templateUrl: './adopt-page.component.html',
  styleUrls: ['./adopt-page.component.css']
})
export class AdoptPageComponent implements OnInit {

  pet;
  currentPetByName = '';
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
  queryForm : FormGroup;
  str = "";

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
    ) { 
    // this.getPetByName(this.pet);
    // this.getPetByCategory(this.pet);
    // this.getPetByBreed(this.pet);
    // this.getPetByColour(this.pet);
    // this.getPetByCoat(this.pet);
    // this.getPetBySize(this.pet);
    // this.getPetBySex(this.pet);
    // this.getPetByAge(this.pet);
    // this.getPetByCatFriendly(this.pet);
    // this.getPetByDogFriendly(this.pet);
    // this.getPetByChildFriendly(this.pet);
    // this.getPetByAdoptable(this.pet);

    this.queryForm = this.formBuilder.group({
      sex: "",
      age: "",
      cat_friendly: false,
      dog_friendly: false,
      child_friendly: false,
      adoptable: false
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log('clicked');
    //console.log(this.queryForm.get("adoptable").value)
    console.log(data)

   // if(data.child_friendly == "Yes"){
     // this.getPetByChildFriendly(true);
      //console.log("Is child friendly");
   // }
    //else if(data.child_friendly == "No") {
      //this.getPetByChildFriendly(false);
      //console.log("Is not child friendly")
    //}
   // else {
     // console.log("Child friendly not selected")
    //}

    //if(data.adoptable == "Yes"){
      //this.apiService.getPetByAdoptable(true).subscribe()
     // this.getPetByAdoptable(true);
       // console.log("Is adoptable")
    //} 
   // else if(data.adoptable == "No") {
      //this.getPetByAdoptable(false);
     // console.log("Is not adoptable")
   // } 
    //else {
     // console.log("Adoptable not selected")
    //}

    // if(data.child_friendly == "Yes" && data.adoptable == "Yes"){
    //   this.getPetByChildFriendly(true);
    //   this.getPetByAdoptable(true);
    //   console.log ("1|1")
    // }
    // else if (data.child_friendly == "Yes" && data.adoptable == "No"){
    //   this.getPetByChildFriendly(true);
    //   this.getPetByAdoptable(false);
    //   console.log ("1|0")
    // }
    // else if (data.child_friendly == "No" && data.adoptable == "Yes"){
    //   this.getPetByChildFriendly(false);
    //   this.getPetByAdoptable(true);
    //   console.log("0|1")
    // }
    // else if (data.child_friendly == "No" && data.adoptable == "No"){
    //   this.getPetByChildFriendly(false);
    //   this.getPetByAdoptable(false);
    //   console.log("0|0")
    // }
    // else {
    //   consaole.log("Other selected")
    // }

    let limits: {[k: string]: any} = {};

    if(data.sex == "Male"){
      limits.sex = "M";
    }
    else if(data.sex == "Female"){
      limits.sex = "F";
    }
    else{
      //do nothing
    }

    if(data.age == "0"){
      limits.age = "0";
    }
    else if(data.age == "1"){
      limits.age = "1";
    }
    else if(data.age == "2"){
      limits.age = "2";
    }
    else if(data.age == "3"){
      limits.age = "3";
    }
    else if(data.age == "4"){
      limits.age = "4";
    }
    else if(data.age == "5"){
      limits.age = "5";
    }
    else if(data.age == "6"){
      limits.age = "6";
    }
    else if(data.age == "7"){
      limits.age = "7";
    }
    else if(data.age == "8"){
      limits.age = "8";
    }
    else if(data.age == "9"){
      limits.age = "9";
    }
    else if(data.age == "10"){
      limits.age = "10";
    }
    else if(data.age == "11"){
      limits.age = "11";
    }
    else if(data.age == "12"){
      limits.age = "12";
    }
    else{
      //do nothing
    }

    if(data.cat_friendly == "Yes"){
      limits.cat_friendly = true;
    }
    else if(data.cat_friendly == "No"){
      limits.cat_friendly = false;
    }
    else{
      //do nothing
    }

    if(data.dog_friendly == "Yes"){
      limits.dog_friendly = true;
    }
    else if(data.dog_friendly == "No"){
      limits.dog_friendly = false;
    }
    else{
      //do nothing
    }

    if(data.child_friendly == "Yes"){
      limits.child_friendly = true;
    }
    else if(data.child_friendly == "No"){
      limits.child_friendly = false;
    }
    else{
      //do nothing
    }

    if(data.adoptable == "Yes"){
      limits.adoptable = true;
    }
    else if(data.adoptable == "No"){
      limits.adoptable = false;
    }
    else{
      //do nothing
    }

    console.log(limits)

    this.apiService.getSome(limits).subscribe((data) => {
      this.pet = data
    })

    // if(document.getElementById("selectAdoptable").value == "true"){
    //   this.str = this.str + " Pet: " + this.getPetByAdoptable
    // }
  }

  //submitQuery(){
    //console.log('Button Clicked');
  //}

  getPetByName(name){
    this.apiService.getPetByName(name).subscribe((data) => {
      this.pet = data[0];
      this.currentPetByName = this.pet.name;
      //console.log(this.pet);
    })
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
      this.pet = data;
      this.currentPetSex = this.pet.sex;
      //console.log(this.pet);
    })
  }

  getPetByAge(age){
    this.apiService.getPetByAge(age).subscribe((data) => {
      this.pet = data;
      this.currentPetAge = this.pet.age;
      //console.log(this.pet);
    })
  }

  getPetByCatFriendly(cat_friendly){
    this.apiService.getPetByCatFriendly(cat_friendly).subscribe((data) => {
      this.pet = data;
      this.currentPetCatFriendly = this.pet.cat_friendly;
      //console.log(this.pet);
    })
  }

  getPetByDogFriendly(dog_friendly){
    this.apiService.getPetByDogFriendly(dog_friendly).subscribe((data) => {
      this.pet = data;
      this.currentPetDogFriendly = this.pet.dog_friendly;
      //console.log(this.pet);
    })
  }

  getPetByChildFriendly(child_friendly){
    this.apiService.getPetByChildFriendly(child_friendly).subscribe((data) => {
      this.pet = data;
      this.currentPetChildFriendly = this.pet.child_friendly;
      //console.log(this.pet);
    })
  }

  getPetByAdoptable(adoptable){
    this.apiService.getPetByAdoptable(adoptable).subscribe((data) => {
      console.log(data)
      this.pet = data;
      this.currentPetAdoptable = this.pet.adoptable;
      //console.log(this.pet);
    })
  }
}
