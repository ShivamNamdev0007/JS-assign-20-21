
 let hour=document.querySelector(".hour");
 let minute=document.querySelector(".minute");
 let second=document.querySelector(".second");
 let ampm=document.querySelector(".ampm");
 
 function digital(){  
    let d= new Date();
        let h=d.getHours();
        let m=d.getMinutes();
        let s=d.getSeconds();     
        
        let seasion="AM";
        if(h>=12){
            h=h-12;
            seasion="PM";        
        }
        h= h < 10? "0"+h : h;
        m= m < 10? "0"+m : m;
        s= s < 10? "0"+s : s;
        
        hour.innerHTML=h;
        minute.innerHTML=m;
        second.innerHTML=s;
        ampm.innerHTML=seasion;  
               
    }
    setInterval(digital,1000);
digital();

// analog clock

setInterval(()=>
{
   
      
    let hour_hand=document.querySelector(".hour-hand");
    let minute_hand=document.querySelector(".minute-hand");
    let second_hand=document.querySelector(".second-hand");
    let d= new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds(); 

    let h_rotation=30*h+m/2;
    let m_rotation=6*m;
    let s_rotation=6*s;

    hour_hand.style.transform=`rotate(${h_rotation}deg)`;
    minute_hand.style.transform=`rotate(${m_rotation}deg)`;
    second_hand.style.transform=`rotate(${s_rotation}deg)`;
 },10);



