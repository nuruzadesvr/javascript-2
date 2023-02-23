const log=console.log;
let a=3;
let b=3;
let c=2;
let p_1=(a+b+c)/2;              //Heron dusturundaki yarimperimetr
let p_2=a+b+c;                 //adi ucbucagin perimetri
let sahe=Math.sqrt((p_1*(p_1-a)*(p_1-b)*(p_1-c)));

if(a==b || a==c || b==c){         //beraberyanli ucbucag
       log(sahe)  
}
else if(a!=b && a!=c && b!=c){    //muxtelifterefli ucbucag
        log(p_2)
}
else if(a==b && a==c && b==c){    //beraberterefli ucbucag
    log((p*sahe))
}