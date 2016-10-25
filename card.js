$(document).ready(go);
  
function go (){
  console.log("ready to go...");
    var c = {l: function (a){console.log(a)}};
    
    var randome = {min:1,max:13},
        winPoint = {lose:0,win:0};
    
  /*  c.l(randome.max);
    c.l(randome.min);
    c.l(winPoint.lose);
    c.l(winPoint.win);  */  



function change (){
    var rand1 = Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min);
    var rand2 = Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min);
    var rand3 = Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min);
    var rand4 = Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min);
    var rand5 = Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min);
    var rand6 = Math.floor(Math.random()*(randome.max-randome.min+1)+randome.min);
    var allRand = [rand1,rand2,rand3,rand4,rand5,rand6];
   ;
   
    
    /*c.l(allRand);*/
    return allRand;
}
    
function tar (){  
        var allRand = change();  // იღებს რანდომ მნიშვნელობებს და ათავსებს ცვლადში
     allRand.forEach(function (element,index,array){
       if (element<10) {element = "0"+element};
         
         allRand.push(element); // ამატებს ნოლებს წინ
         
   })
    var mastRand =[];
        /* c.l(allRand);*/
    for(var i=0; i<7; i++){
       var mastisFeri = Math.floor(Math.random()*(3-0+1)+0);
        mastRand.push(mastisFeri);
    }
        // რანდომ მასტი
    var masti=["c_","b_","p_","t_"];
    
    
 /*   c.l(masti[0])
    c.l(masti[1])
    c.l(masti[2])
    c.l(masti[3])
    c.l("es arsi masti: "+mastRand[0]);
    c.l("es arsi masti: "+mastRand[1]);
    c.l("es arsi masti: "+mastRand[2]);
    c.l("es arsi masti: "+mastRand[3]);
    c.l("es arsi masti: "+mastRand[4]);
    c.l("es arsi masti: "+mastRand[5]);*/
  /*  var erti = masti[mastRand[0]] + allRand[6] ,
        ori = masti[mastRand[1]] + allRand[7],
        sami = masti[mastRand[2]] + allRand[8],
        otxi = masti[mastRand[3]] + allRand[9],
        xuti = masti[mastRand[4]] + allRand[10],
        eqvsi = masti[mastRand[5]] + allRand[11];*/
    
    
    
    var suratebi = [masti[mastRand[0]] + allRand[6],
                    masti[mastRand[1]] + allRand[7],
                    masti[mastRand[2]] + allRand[8],
                   masti[mastRand[3]] + allRand[9],
                   masti[mastRand[4]] + allRand[10],
                   masti[mastRand[5]] + allRand[11]]
    
    // ცვლის სურათებს
            $("#one").attr('src',"img/obr/" + suratebi[0] + ".jpg");
            $("#two").attr('src',"img/obr/" + suratebi[1] + ".jpg");
            $("#three").attr('src',"img/obr/" + suratebi[2] + ".jpg");
            $("#four").attr('src',"img/obr/" + suratebi[3] + ".jpg");
            $("#five").attr('src',"img/obr/" + suratebi[4] + ".jpg");
            $("#six").attr('src',"img/obr/" + suratebi[5] + ".jpg");
            $("#seven").attr('src',"img/kard/" + suratebi[mastRand[6]] + ".svg");
    
           /* $("#good").text("good"); */   
               
    
    // c.l(suratebi[mastRand[6]]);
   // c.l(suratebi);
    
    
    $("IMG").one("click",function(e){
        /*c.l(e.currentTarget.src);*/
        /*c.l(e.currentTarget.src.match(suratebi[mastRand[6]]));*/
        if (e.currentTarget.src.match(suratebi[mastRand[6]])) {
            
            $("#good").text(winPoint.win++); 
            // c.l(e.currentTarget.src.match(suratebi[mastRand[6]]))
            $("IMG").off('click');
            tar();
        } else {
            $("#bad").text(winPoint.lose--); 
        }
    
    })
       

}  // tar(); 
        

    tar();  // თარგეთ-ს ცვლის
}
