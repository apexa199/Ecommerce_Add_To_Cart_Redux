 export const add = (product) => {
    return{
        type:"ADDTOCART",
        payload:product
    }
 }
  export const removeOne = (product) => {
    return{
        type:"REMOVECART",
        payload:product
    }
 }
 export const remove = (product) => {
    return{
        type:"REMOVE",
        payload:product
    }
 }
 export default add
 
