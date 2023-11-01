myFunction(){
    const prn = "00097";

    for (let i = 0; i < array.length; i++) {
        const element = prn[i];
        if(i % 2 === 0){
            const prod = element * 2;
            if(prod > 9){
                sum += 1 + prod % 10;
            }
        }else {
            sum += element;
        }
    }

    
}