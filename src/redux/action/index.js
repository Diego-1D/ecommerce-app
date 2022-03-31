//Adicionar item no carrinho
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
} 

//Deletando item no carrinho
export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
} 