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
      category: "",
      breed: "",
      colour: "",
      coat: "",
      size: "",
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

    if(data.category == "Cats"){
      limits.category = "cats";
    }
    else if(data.category == "Dogs"){
      limits.category = "dogs";
    }
    else{
      //do nothing
    }

    if(data.breed == "Akita"){
      limits.breed = "Akita";
    }
    else if(data.breed == "Alaskan Malamute"){
      limits.breed = "Alaskan Malamute";
    }
    else if(data.breed == "Anatolian Shepherd Dog"){
      limits.breed = "Anatolian Shepherd Dog";
    }
    else if(data.breed == "Australian Shepherd"){
      limits.breed = "Australian Shepherd";
    }
    else if(data.breed == "Beagle"){
      limits.breed = "Beagle";
    }
    else if(data.breed == "Belgian Tervuren"){
      limits.breed = "Belgian Tervuren";
    }
    else if(data.breed == "Bengal"){
      limits.breed = "Bengal";
    }
    else if(data.breed == "Bernese Mountain Dog"){
      limits.breed = "Bernese Mountain Dog";
    }
    else if(data.breed == "Birman"){
      limits.breed = "Birman";
    }
    else if(data.breed == "Border Collie"){
      limits.breed = "Border Collie";
    }
    else if(data.breed == "British Short Hair"){
      limits.breed = "British Short Hair";
    }
    else if(data.breed == "Canaan"){
      limits.breed = "Canaan";
    }
    else if(data.breed == "Chesapeake Bay Retriever"){
      limits.breed = "Chesapeake Bay Retriever";
    }
    else if(data.breed == "Chinook"){
      limits.breed = "Chinook";
    }
    else if(data.breed == "Collie"){
      limits.breed = "Collie";
    }
    else if(data.breed == "Corgi"){
      limits.breed = "Corgi";
    }
    else if(data.breed == "Dalmatian"){
      limits.breed = "Dalmatian";
    }
    else if(data.breed == "Entlebucher Mountain Dog"){
      limits.breed = "Entlebucher Mountain Dog";
    }
    else if(data.breed == "Finnish Spitz"){
      limits.breed = "Finnish Spitz";
    }
    else if(data.breed == "Flat-Coated Retriever"){
      limits.breed = "Flat-Coated Retriever";
    }
    else if(data.breed == "German Shepherd"){
      limits.breed = "German Shepherd";
    }
    else if(data.breed == "Golden Retriever"){
      limits.breed = "Golden Retriever";
    }
    else if(data.breed == "Great Dane"){
      limits.breed = "Great Dane";
    }
    else if(data.breed == "Great Pyrenees"){
      limits.breed = "Great Pyrenees";
    }
    else if(data.breed == "Greater Swiss Mountain Dog"){
      limits.breed = "Greater Swiss Mountain Dog";
    }
    else if(data.breed == "Icelandic Sheepdog"){
      limits.breed = "Icelandic Sheepdog";
    }
    else if(data.breed == "Irish Wolfhound"){
      limits.breed = "Irish Wolfhound";
    }
    else if(data.breed == "Keeshond"){
      limits.breed = "Keeshond";
    }
    else if(data.breed == "Labrador Retriever"){
      limits.breed = "Labrador Retriever";
    }
    else if(data.breed == "Leonberger"){
      limits.breed = "Leonberger";
    }
    else if(data.breed == "Maine Coon"){
      limits.breed = "Maine Coon";
    }
    else if(data.breed == "Newfoundland"){
      limits.breed = "Newfoundland";
    }
    else if(data.breed == "Norwegian Buhund"){
      limits.breed = "Norwegian Buhund";
    }
    else if(data.breed == "Norwegian Elkhound"){
      limits.breed = "Norwegian Elkhound";
    }
    else if(data.breed == "Norwegian Forest Cat"){
      limits.breed = "Norwegian Forest Cat";
    }
    else if(data.breed == "Norwegian Lundehund"){
      limits.breed = "Norwegian Lundehund";
    }
    else if(data.breed == "Old English Sheepdog"){
      limits.breed = "Old English Sheepdog";
    }
    else if(data.breed == "Rottweiler"){
      limits.breed = "Rottweiler";
    }
    else if(data.breed == "Saint Bernard"){
      limits.breed = "Saint Bernard";
    }
    else if(data.breed == "Samoyed"){
      limits.breed = "Samoyed";
    }
    else if(data.breed == "Scottish Deerhound"){
      limits.breed = "Scottish Deerhound";
    }
    else if(data.breed == "Shetland Sheepdog"){
      limits.breed = "Shetland Sheepdog";
    }
    else if(data.breed == "Shiba Inu"){
      limits.breed = "Shiba Inu";
    }
    else if(data.breed == "Siberian Husky"){
      limits.breed = "Siberian Husky";
    }
    else{
      //do nothing
    }

    if(data.colour == "Black"){
      limits.colour = "black";
    }
    else if(data.colour == "Black and Rust"){
      limits.colour = "black and rust";
    }
    else if(data.colour == "Black and Tan"){
      limits.colour = "black and tan";
    }
    else if(data.colour == "Black and White"){
      limits.colour = "black and white";
    }
    else if(data.colour == "Blue Merle"){
      limits.colour = "blue merle";
    }
    else if(data.colour == "Brown"){
      limits.colour = "brown";
    }
    else if(data.colour == "Brown Tabby"){
      limits.colour = "brown tabby";
    }
    else if(data.colour == "Cream"){
      limits.colour = "cream";
    }
    else if(data.colour == "Deep Brown"){
      limits.colour = "deep brown";
    }
    else if(data.colour == "Fawn"){
      limits.colour = "fawn";
    }
    else if(data.colour == "Fawn and Black"){
      limits.colour = "Fawn and black";
    }
    else if(data.colour == "Fawn with Black Mask"){
      limits.colour = "fawn with black mask";
    }
    else if(data.colour == "Flame Point"){
      limits.colour = "flame point";
    }
    else if(data.colour == "Grey"){
      limits.colour = "grey";
    }
    else if(data.colour == "Grey and White"){
      limits.colour = "grey and white";
    }
    else if(data.colour == "Light Brown"){
      limits.colour = "light brown";
    }
    else if(data.colour == "Light Brown and White"){
      limits.colour = "light brown and white";
    }
    else if(data.colour == "Light Gold"){
      limits.colour = "light gold";
    }
    else if(data.colour == "Light Grey"){
      limits.colour = "light grey";
    }
    else if(data.colour == "Pale Honey"){
      limits.colour = "pale honey";
    }
    else if(data.colour == "Red"){
      limits.colour = "red";
    }
    else if(data.colour == "Red Tabby"){
      limits.colour = "red tabby";
    }
    else if(data.colour == "Reddish Brown"){
      limits.colour = "reddish brown";
    }
    else if(data.colour == "Sable"){
      limits.colour = "sable";
    }
    else if(data.colour == "Sable and White"){
      limits.colour = "sable and white";
    }
    else if(data.colour == "Solid Black"){
      limits.colour = "solid black";
    }
    else if(data.colour == "Tawny"){
      limits.colour = "tawny";
    }
    else if(data.colour == "Tricolour"){
      limits.colour = "tricolour";
    }
    else if(data.colour == "Wheaten"){
      limits.colour = "wheaten";
    }
    else if(data.colour == "White"){
      limits.colour = "white";
    }
    else if(data.colour == "White and Black"){
      limits.colour = "white and black";
    }
    else if(data.colour == "White with Black Spots"){
      limits.colour = "white with black spots";
    }
    else{
      //do nothing
    }

    if(data.coat == "Double"){
      limits.coat = "double";
    }
    else if(data.coat == "Long"){
      limits.coat = "long";
    }
    else if(data.coat == "Medium"){
      limits.coat = "medium";
    }
    else if(data.coat == "Semi-Long"){
      limits.coat = "semi-long";
    }
    else if(data.coat == "Short"){
      limits.coat = "short";
    }
    else{
      //do nothing
    }

    if(data.size == "Giant"){
      limits.size = "giant";
    }
    else if(data.size == "Large"){
      limits.size = "large";
    }
    else if(data.size == "Medium"){
      limits.size = "medium";
    }
    else if(data.size == "Small"){
      limits.size = "small";
    }
    else{
      //do nothing
    }

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
      this.pet = data;
      this.currentPetCategory = this.pet.category;
      //console.log(this.pet);
    })
  }

  getPetByBreed(breed){
    this.apiService.getPetByBreed(breed).subscribe((data) => {
      this.pet = data;
      this.currentPetBreed = this.pet.breed;
      //console.log(this.pet);
    })
  }

  getPetByColour(colour){
    this.apiService.getPetByColour(colour).subscribe((data) => {
      this.pet = data;
      this.currentPetColour = this.pet.colour;
      //console.log(this.pet);
    })
  }

  getPetByCoat(coat){
    this.apiService.getPetByCoat(coat).subscribe((data) => {
      this.pet = data;
      this.currentPetCoat = this.pet.coat;
      //console.log(this.pet);
    })
  }

  getPetBySize(size){
    this.apiService.getPetBySize(size).subscribe((data) => {
      this.pet = data;
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
