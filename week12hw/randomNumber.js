        
        let alphabet='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        let newWord = '';

        function generateIndex(length){
            return Math.floor(Math.random()*length)
        }
        const onGenerate=()=>{
            newWord = alphabet[generateIndex(alphabet.length)]+alphabet[generateIndex(alphabet.length)]+
            alphabet[generateIndex(alphabet.length)]+alphabet[generateIndex(alphabet.length)];
            document.getElementById('result').innerText=newWord;
        }