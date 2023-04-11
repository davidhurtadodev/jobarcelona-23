export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  summary: string;
  analyzedInstructions?: AnalyzedInstructionsEntity[];
  vegetarian: boolean;
  vegan: boolean;
}
export interface AnalyzedInstructionsEntity {
  name: string;
  steps?: StepsEntity[] | null;
}
export interface StepsEntity {
  number: number;
  step: string;
  ingredients?: IngredientsEntityOrEquipmentEntity[] | null;
  equipment?: (IngredientsEntityOrEquipmentEntity1 | null)[] | null;
}
export interface IngredientsEntityOrEquipmentEntity {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
export interface IngredientsEntityOrEquipmentEntity1 {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
