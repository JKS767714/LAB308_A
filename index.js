let counter = 0;

function cs(){
    try {
        counter++;
        console.log(counter)
    }
    
    catch (error) {
        console.log(error)
    
    }

}

try {
    cs(error)
} catch (error){
    console.log(error)
}