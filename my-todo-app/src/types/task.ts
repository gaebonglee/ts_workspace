export type Category = {
  id: number;
  text: string;
};

export type Task = {
  id: number;
  categoryId: number;
  text: string;
  completed: boolean;
};
