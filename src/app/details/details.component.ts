import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  meal: any;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mealService.getMealDetails(id!).subscribe((data) => {
      this.meal = data.meals[0];
    });
  }
}
