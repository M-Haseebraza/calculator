let arr=[];
function eva(a){
    field.value+=a;
    b=field.value
}
function res(){
    arr[0]=field.value
    result=eval(b);
    field.value=result
    arr[1]=result;
    console.log(arr)

}
function clr(){
    c=field.value;
    d=c.slice(0,c.length-1);
     field.value=   d;    
}
function clrl(){    
    v=field.value;  
    v="";
    field.value=v;
}