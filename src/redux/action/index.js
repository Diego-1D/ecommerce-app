//Adicionar item no carrinho
export const addItem = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
} 

//Deletando item no carrinho
export const delItem = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
} 