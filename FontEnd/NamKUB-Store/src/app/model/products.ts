
export interface Products {
    Product_ID: number
    Product_Name: string
    Product_Picture: string
    Product_Size: number
    Product_Price: number
    Sup_ID: string
    Stock_Quantity: number
    Product_status : string
  }

export interface Stock {
  Stock_ID : number
  Product_Name : string 
  Stock_Quantity : number
  Sup_Unitprice : number
  Sup_Name : string

}
export interface Restock{
  Product_Name : string
  Restock_ID : number
  Restock_Date :  string
  Restock_Quantity : number
  Restock_Unitprice : number
  Restock_TotalPrice : number
  Stock_ID : number
} 
export interface Users{
  User_ID : number,
  firstname : string,
  lastname : string,
  username : string,
  email : string,
  phone :string, 
  role : string,
}

export interface Orders{
  Order_Date : string,
  Order_ID : number,
  Product_Name : string,
  Order_Quantity : number,
  Total_Price : number
}