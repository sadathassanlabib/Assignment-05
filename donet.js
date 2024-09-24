




// card-01
document.getElementById("card-01")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    
    const feniDonation= document.getElementById("card-01-input").value;
    const feniCardMoney = document.getElementById("card-01-donation-money").innerText;
    const feniMoney=parseFloat(feniCardMoney);
    const feniTotalDonation = parseFloat(feniDonation);
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance);

    if( 
         feniTotalDonation >= myTotalBlance || feniTotalDonation === 0|| feniTotalDonation === "null"  ){ 
            //document.getElementById("my_modal_5").classList.add("hidden");
            
            alert("invalid Number");
            return



    }
  
    else {
            
    const finalfeniMoney= feniTotalDonation+feniMoney
    document.getElementById("card-01-donation-money").innerText= finalfeniMoney

    // total balance //
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance);
    const myFinalBalance = myTotalBlance-feniTotalDonation;
    document.getElementById("my-balance" ).innerText= myFinalBalance
    // history//
    const historyItem1= document.createElement('div');
    historyItem1.className= 'bg-slate-50 p-8 mt-9 rounded-lg md-3 border-1-2 border-indigo-500';

    historyItem1.innerHTML= 

    `<p class="">${feniTotalDonation} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
    <p>${new Date ().toLocaleDateString()};</p>`
    
    const historyResult=document.getElementById("history1")
    historyResult.insertBefore(historyItem1,historyResult.firstChild);
    }
})








// card-02/


document.getElementById("card-02")
    .addEventListener( 'click', function(event){
    event.preventDefault();

    
    const noakhaliDonation= document.getElementById("card-02-input").value;
    const noakhaliCardMoney = document.getElementById("card-02-donation-money").innerText;
    const noakhakliMoney=parseFloat(noakhaliCardMoney);
    const noakhaliTotalDonation = parseFloat(noakhaliDonation);

    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance)
    if( 
        noakhaliTotalDonation >= myTotalBlance || noakhaliTotalDonation === 0   ){ 
       
           alert("invalid Number")

   }
   else{
    const finalNoakhaliMoney= noakhaliTotalDonation+noakhakliMoney
    document.getElementById("card-02-donation-money").innerText= finalNoakhaliMoney
    // total balance //
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance)
    const myFinalBalance = myTotalBlance-noakhaliTotalDonation;
    document.getElementById("my-balance" ).innerText= myFinalBalance

    // history//
    const historyItem2= document.createElement('div');
    historyItem2.className= 'bg-slate-50 p-8 mt-9 rounded-lg md-3 border-1-2 border-indigo-500';

    historyItem2.innerHTML= 

    `<p class="">${noakhaliTotalDonation} Taka is Donated for famine-2024 at Noakhali, Bangladesh </p>
    <p>${new Date ().toLocaleDateString()};</p>`
    
    const historyResult=document.getElementById("history1")
    historyResult.insertBefore(historyItem2,historyResult.firstChild);}
})

// card-03//


document.getElementById("card-03")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    console.log("login button click");
    const qoutaDonation= document.getElementById("card-03-input").value;
    const qoutaCardMoney = document.getElementById("card-03-donation-money").innerText;
    const qoutaMoney=parseFloat(qoutaCardMoney);
    const qoutaTotalDonation = parseFloat(qoutaDonation);
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance)

    if( 
        qoutaTotalDonation >= myTotalBlance || qoutaTotalDonation === 0   ){ 
       
           alert("invalid Number")

   }
    else{const finalqoutaMoney= qoutaTotalDonation+qoutaMoney
    document.getElementById("card-03-donation-money").innerText= finalqoutaMoney
    // total balance //
   
    const myFinalBalance = myTotalBlance-qoutaTotalDonation;
    document.getElementById("my-balance" ).innerText= myFinalBalance

    // history//
    const historyItem3= document.createElement('div');
    historyItem3.className= 'bg-slate-50 p-8 mt-9 rounded-lg md-3 border-1-2 border-indigo-500';

    historyItem3.innerHTML= 

    `<p class="">${qoutaTotalDonation} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
    <p>${new Date ().toLocaleDateString()};</p>`
    
    const historyResult= document.getElementById("history1")
    historyResult.insertBefore(historyItem3,historyResult.firstChild);}
})


       

 