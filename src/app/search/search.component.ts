import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  categories: any[] = [];
  meals: any[] = [];
  searchQuery: string = '';

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  searchMeals(): void {
    if (this.searchQuery) {
      this.mealService.searchByName(this.searchQuery).subscribe((data) => {
        this.meals = data.meals;
      });
    }
  }

  filterMeals(event: Event): void {
    const selectElement = event?.target as HTMLSelectElement;
    const category = selectElement.value;

    if (!category) {
      console.error('Value is null or undefined');
      return;
    }

    this.searchQuery = '';
    this.mealService.filterByCategory(category).subscribe((data) => {
      this.meals = data.meals;
    });
  }
}
