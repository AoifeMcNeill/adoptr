import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri:String = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  //Get all pets
  getAll() {
    return this.http.get(`${this.baseUri}`);
  }

  //Get pet by id
  getPetById(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by category
  getPetByCategory(category): Observable<any> {
    let url = `${this.baseUri}/read/${category}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by breed
  getPetByBreed(breed): Observable<any> {
    let url = `${this.baseUri}/read/${breed}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by colour
  getPetByColour(colour): Observable<any> {
    let url = `${this.baseUri}/read/${colour}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by coat
  getPetByCoat(coat): Observable<any> {
    let url = `${this.baseUri}/read/${coat}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by size
  getPetBySize(size): Observable<any> {
    let url = `${this.baseUri}/read/${size}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by sex
  getPetBySex(sex): Observable<any> {
    let url = `${this.baseUri}/read/${sex}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by age
  getPetByAge(age): Observable<any> {
    let url = `${this.baseUri}/read/${age}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by cat_friendly
  getPetByCatFriendly(cat_friendly): Observable<any> {
    let url = `${this.baseUri}/read/${cat_friendly}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by dog_friendly
  getPetByDogFriendly(dog_friendly): Observable<any> {
    let url = `${this.baseUri}/read/${dog_friendly}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by child_friendly
  getPetByChildFriendly(child_friendly): Observable<any> {
    let url = `${this.baseUri}/read/${child_friendly}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Get pets by adoptable
  getPetByAdoptable(adoptable): Observable<any> {
    let url = `${this.baseUri}/read/${adoptable}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Update list
  updateList(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get client-side error
      errorMessage = error.error.message;
    } else {
      //Get server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
