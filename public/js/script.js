
window.onload = function(){
    
    const startBtn = document.getElementById('start_button');

    startBtn.addEventListener('click', async ()=>{
        const result = await fetch('/game/start');
        
        if(result.ok && result.status === 200){
            startBtn.style.display = 'none';
        }
    });
}

