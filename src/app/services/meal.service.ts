import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiURL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiURL}/categories.php`);
  }

  searchByName(name: string): Observable<any> {
    return this.http.get(`${this.apiURL}/search.php?s=${name}`);
  }

  filterByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiURL}/filter.php?c=${category}`);
  }

  getMealDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/lookup.php?i=${id}`);
  }
}
