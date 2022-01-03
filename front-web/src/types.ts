export type SalesByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};