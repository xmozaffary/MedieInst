function myfirstjavascript(){
    let p1 = document.getElementById("age").value;
    let p = Array.from(String(p1), Number);
    let len = p.length;
    if (len < 9){
        document.getElementById("demo").innerHTML = "Det är för kort: " + p;

    }else{
        for (let i in p){
            if(i % 2 == 0){
                p[i] = p[i] * 2
                console.log(p[i]);
            }else {
                console.log(p[i]);
            }
        }
    
        console.log(p);
        for (let j in p){
            if(p[j] > 9){
                p[j] = p[j] % 10 + 1
                console.log(p[j]);
            }
        }
    
        console.log(p);
    
        let sum = 0;
        for(let x in p){
            sum += p[x]
        }
        
        console.log(sum);
    
        let k = (10 - (sum % 10)) % 10
        console.log(k);
        document.getElementById("demo").innerHTML = "=>: " + k;
    }
}