
export interface IBudget{
    expenses:IExpense[]
    budget:number
}
export interface IExpense {
    id: number
    name: string
    cost: number
  }
 