const dc = document.getElementById('index');

function teste(){
    fetch('/delivery/getAll', { 
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
    }).then((att)=>{
        console.log(att);
    }).catch((err)=>{
        console.log('ERRO:',err);
    });
}