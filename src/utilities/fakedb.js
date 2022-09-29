// use local storage to manage cart data
const addToDb = id =>{
    let selectedPackages = {};

    //get the shopping cart from local storage
    const storedPackages = localStorage.getItem('selected-packages');
    if(storedPackages){
        selectedPackages = JSON.parse(storedPackages);
    }

    // add quantity
    const quantity = selectedPackages[id];
    if(quantity){
        const newQuantity = quantity + 1;
        selectedPackages[id] = newQuantity;
    }
    else{
        selectedPackages[id] = 1;
    }
    localStorage.setItem('selected-packages', JSON.stringify(selectedPackages));
}


// const getStoredPackages = () =>{
//     let selectedPackages = {};

//     const storedCart = localStorage.getItem('selected-packages');
//     if(storedCart){
//         selectedPackages = JSON.parse(storedCart);
//     }
//     return selectedPackages;
// }