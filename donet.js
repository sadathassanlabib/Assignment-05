// card-01
document.getElementById("card-01")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    console.log("login button click");
    const feniDonation= document.getElementById("card-01-input").value;
    const feniCardMoney = document.getElementById("card-01-donation-money").innerText;
    const feniMoney=parseFloat(feniCardMoney);
    const feniTotalDonation = parseFloat(feniDonation);
    const finalfeniMoney= feniTotalDonation+feniMoney
    document.getElementById("card-01-donation-money").innerText= finalfeniMoney
    // total balance //
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance)
    const myFinalBalance = myTotalBlance-feniTotalDonation;
    document.getElementById("my-balance" ).innerText= myFinalBalance
})






// card-02/


document.getElementById("card-02")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    console.log("login button click");
    const noakhaliDonation= document.getElementById("card-02-input").value;
    const noakhaliCardMoney = document.getElementById("card-02-donation-money").innerText;
    const noakhakliMoney=parseFloat(noakhaliCardMoney);
    const noakhaliTotalDonation = parseFloat(noakhaliDonation);
    const finalNoakhaliMoney= noakhaliTotalDonation+noakhakliMoney
    document.getElementById("card-02-donation-money").innerText= finalNoakhaliMoney
    // total balance //
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance)
    const myFinalBalance = myTotalBlance-noakhaliTotalDonation;
    document.getElementById("my-balance" ).innerText= myFinalBalance
})

// card-03//

// card-01
document.getElementById("card-03")
    .addEventListener( 'click', function(event){
    event.preventDefault();
    console.log("login button click");
    const qoutaDonation= document.getElementById("card-03-input").value;
    const qoutaCardMoney = document.getElementById("card-03-donation-money").innerText;
    const qoutaMoney=parseFloat(qoutaCardMoney);
    const qoutaTotalDonation = parseFloat(qoutaDonation);
    const finalqoutaMoney= qoutaTotalDonation+qoutaMoney
    document.getElementById("card-03-donation-money").innerText= finalqoutaMoney
    // total balance //
    const myBlance = document.getElementById("my-balance").innerText;
    const myTotalBlance= parseFloat(myBlance)
    const myFinalBalance = myTotalBlance-qoutaTotalDonation;
    document.getElementById("my-balance" ).innerText= myFinalBalance
})