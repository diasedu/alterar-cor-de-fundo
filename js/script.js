'use strict'

const btn = document.getElementById('btn');

const colors = ['blue', 'green', 'red'];

const textResult = document.getElementById('result');

// console.log(colors.length) = 3

btn.addEventListener('click', function(e) {
    
    e.preventDefault();

    function changeBgColors() {

        const sizeArr = colors.length;
        const colorSort = colors[Math.floor(Math.random() * sizeArr)];

        document.body.style.backgroundColor = colorSort;

        function translateToUser() {
            
            let en = colorSort;
            let br;

            if (en == 'blue') br = 'azul';
            if (en == 'green') br = 'verde';
            if (en == 'red') br = 'vermelho';

            //console.log(br);

            return textResult.innerHTML = `Agora o plano de fundo terá a cor ${br}`;
        }
        
        translateToUser();

        
    }
    
    changeBgColors();
});