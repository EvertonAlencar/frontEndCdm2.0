export var DATA = [
/*     {
      id: 0,
      title: '',
      quantity: 0,
      apartamentNumber : 0,
      tableNumber: 0,
      orderObservation: '',
      clothesDescription: ''
    } */
  ];

export function addOrder(order){
    DATA.push(order)
}


export function removeOrder(title){

    DATA.forEach((itemData,index)=>{
        if(itemData.title == title){
            DATA.splice(index,1)
            console.log('entrou')
        }
    })

}

export function updateOrder(title, newQuantity){
    
    DATA.forEach((itemData, index)=>{
        if(itemData.title == title){
            DATA[index].quantity += newQuantity
        }
    })

}

export function setIdItemInData(){
    var id = Math.floor(Date.now() * Math.random()).toString(36)
    return id
}

export function updateQuantityItensInCart(){
    var quantityItensInCart = DATA.length
    return quantityItensInCart
}

export function resetData(){
    DATA = [];
}
