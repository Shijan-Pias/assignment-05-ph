document.getElementById("header-btn").addEventListener("click",
    function(){
    const color ='#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
});

//1st work

document.getElementById('primary-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        
        const totalMinus=document.getElementById('minus').innerText;
        const convertedMinus=parseInt(totalMinus);
        
        const totalPlus=document.getElementById('plus').innerText;
        const convertedPlus=parseInt(totalPlus);

        if(convertedMinus>0){
            alert('Board Updated Successfully');
            const minus=convertedMinus-1;
            document.getElementById('minus').innerText=minus;
            const plus=convertedPlus+1;
            document.getElementById('plus').innerText=plus;

        this.disabled=true;
        this.classList.remove("bg-[#3752FD]");
        this.classList.add("bg-gray-300","cursor-not-allowed"); 
        const a= this.closest(".bg-slate-100").querySelector("h3").textContent;
        const comment=document.getElementById('active');
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const message = document.createElement("p");
        message.textContent = `You have completed the task ${a} at ${formattedTime}`;
        message.classList.add("text-black-300", "px-5", "py-2");

        comment.appendChild(message);
        }
           
    }
)

//second

document.getElementById('primary-btn1').addEventListener('click',
    function(event){
        event.preventDefault();
        
        const totalMinus=document.getElementById('minus').innerText;
        const convertedMinus=parseInt(totalMinus);
        
        const totalPlus=document.getElementById('plus').innerText;
        const convertedPlus=parseInt(totalPlus);

        if(convertedMinus>0){
            alert('Board Updated Successfully');
            const minus=convertedMinus-1;
            document.getElementById('minus').innerText=minus;
            const plus=convertedPlus+1;
            document.getElementById('plus').innerText=plus;

            this.disabled = true;
            this.classList.remove("bg-[#3752FD]");
            this.classList.add("bg-gray-200","cursor-not-allowed"); 
    
            const a= this.closest(".bg-slate-100").querySelector("h3").textContent;
            const comment=document.getElementById('active');
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
    
            const message = document.createElement("p");
            message.textContent = `You have completed the task ${a} at ${formattedTime}`;
            message.classList.add("text-black-300", "px-5", "py-2");
    
            comment.appendChild(message);
    
        }
          
    }
)

//third

document.getElementById('primary-btn2').addEventListener('click',
    function(event){
        event.preventDefault();
        
        const totalMinus=document.getElementById('minus').innerText;
        const convertedMinus=parseInt(totalMinus);
        
        const totalPlus=document.getElementById('plus').innerText;
        const convertedPlus=parseInt(totalPlus);

        if(convertedMinus>0){
            alert('Board Updated Successfully');
            const minus=convertedMinus-1;
            document.getElementById('minus').innerText=minus;
            const plus=convertedPlus+1;
            document.getElementById('plus').innerText=plus;

            this.disabled = true;
            this.classList.remove("bg-[#3752FD]");
            this.classList.add("bg-gray-200", "cursor-not-allowed"); 
    
            const a= this.closest(".bg-slate-100").querySelector("h3").textContent;
            const comment=document.getElementById('active');
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
    
            const message = document.createElement("p");
            message.textContent = `You have completed the task ${a} at ${formattedTime}`;
            message.classList.add("text-black-300", "px-5", "py-2");
    
            comment.appendChild(message);
        }
                
    }
)

//four

document.getElementById('primary-btn3').addEventListener('click',
    function(event){
        event.preventDefault();
        
        const totalMinus=document.getElementById('minus').innerText;
        const convertedMinus=parseInt(totalMinus);
        
        const totalPlus=document.getElementById('plus').innerText;
        const convertedPlus=parseInt(totalPlus);

        if(convertedMinus>0){
            alert('Board Updated Successfully');
            const minus=convertedMinus-1;
            document.getElementById('minus').innerText=minus;
            const plus=convertedPlus+1;
            document.getElementById('plus').innerText=plus;

            this.disabled = true;
            this.classList.remove("bg-[#3752FD]");
            this.classList.add("bg-gray-200", "cursor-not-allowed"); 
    
            const a= this.closest(".bg-slate-100").querySelector("h3").textContent;
            const comment=document.getElementById('active');
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
    
            const message = document.createElement("p");
            message.textContent = `You have completed the task ${a} at ${formattedTime}`;
            message.classList.add("text-black-300", "px-5", "py-2");
    
            comment.appendChild(message);
    

        }  
                
    }
)

//five

document.getElementById('primary-btn4').addEventListener('click',
    function(event){
        event.preventDefault();
        
        const totalMinus=document.getElementById('minus').innerText;
        const convertedMinus=parseInt(totalMinus);
        
        const totalPlus=document.getElementById('plus').innerText;
        const convertedPlus=parseInt(totalPlus);

        if(convertedMinus>0){
            alert('Board Updated Successfully');
            const minus=convertedMinus-1;
            document.getElementById('minus').innerText=minus;
            const plus=convertedPlus+1;
            document.getElementById('plus').innerText=plus;

        this.disabled = true;
        this.classList.remove("bg-[#3752FD]");
        this.classList.add("bg-gray-200", "cursor-not-allowed"); 

        const a= this.closest(".bg-slate-100").querySelector("h3").textContent;
        const comment=document.getElementById('active');
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const message = document.createElement("p");
        message.textContent = `You have completed the task ${a} at ${formattedTime}`;
        message.classList.add("text-black-300", "px-5", "py-2");

        comment.appendChild(message);

        }
                
    }
)

//six

document.getElementById('primary-btn5').addEventListener('click',
    function(event){
        event.preventDefault();
        
        const totalMinus=document.getElementById('minus').innerText;
        const convertedMinus=parseInt(totalMinus);
        
        const totalPlus=document.getElementById('plus').innerText;
        const convertedPlus=parseInt(totalPlus);

        if(convertedMinus>0){
            alert('Board Updated Successfully');
            const minus=convertedMinus-1;
            document.getElementById('minus').innerText=minus;
            const plus=convertedPlus+1;
            document.getElementById('plus').innerText=plus;

        this.disabled = true;
        this.classList.remove("bg-[#3752FD]");
        this.classList.add("bg-gray-200", "cursor-not-allowed"); 

        const a= this.closest(".bg-slate-100").querySelector("h3").textContent;
        const comment=document.getElementById('active');
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();

        const message = document.createElement("p");
        message.textContent = `You have completed the task ${a} at ${formattedTime}`;
        message.classList.add("text-black-300", "px-5", "py-2");

        comment.appendChild(message);
        }   
                
    }
)

// clear

document.getElementById('clear').addEventListener('click',
    function(){
        const comment=document.getElementById('active');
        comment.querySelectorAll('p').forEach(msg => msg.remove());
    }
)

//new pages

document.getElementById('page1').addEventListener('click',
    function(event){
        event.preventDefault();
        window.location.href="./new.html";


    }
)