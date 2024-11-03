export interface IMeal {
  category: string,
  description: string,
  kcal: number,
}

export interface IMeals {
  id: string,
  category: string,
  description: string,
  kcal: number,
}

export interface IMealsApi {
  [id: string]: IMeals;
}