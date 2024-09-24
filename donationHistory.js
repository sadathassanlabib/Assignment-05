// donation button/
document.getElementById("Donation").addEventListener(
    'click', function(event){
        event.preventDefault();
        document.getElementById("donation1").classList.remove("hidden");
        document.getElementById("history1").classList.add("hidden")

        document.getElementById("Donation")
         .classList.add("bg-green-400" )
        document.getElementById("History")
         .classList.remove ("bg-green-400")
    }
)

document.getElementById("History").addEventListener(
    'click', function(event){
        event.preventDefault();
        document.getElementById("donation1").classList.add("hidden");
        document.getElementById("history1").classList.remove("hidden")

        document.getElementById("Donation")
         .classList.remove("bg-green-400" )
        document.getElementById("History" )
         .classList.add ("bg-green-400")
        
        // history added//
    
    }
)

// color change//
document.getElementById("History").addEventListener(
    'click', function(event){
        event.preventDefault();
        document.getElementById("Donation")
           .classList.remove('bg-green-400')
        document.getElementById("History").classList.add ("bg-green-400")
    
    })


// blogs//

// blogs button/
document.getElementById("blogs").addEventListener('click', function(event){
    event.preventDefault();
    window.location.href="/nm.html";
})

//home button//
document.getElementById("home").addEventListener('click', function(event){
    event.preventDefault();
    window.location.href="/index.html";
})