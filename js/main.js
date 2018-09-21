
function action(action){
    if(action === 'KeyLeft'){
        field.shiftLeft();
    }
    else if(action === 'KeyTop'){
        field.shiftTop();
    }
    else if(action === 'KeyRight'){
        field.shiftRight();
    }
    else if(action === 'KeyBottom'){
        field.shiftBottom();
    }
    else{
        console.log("Unknown command");
    }
}


class Field{
    constructor(initialColumn, initialRow, sizeSquare){
        this._column = initialColumn;
        this._row = initialRow;
        this._sizeSquare = sizeSquare;
        this._elements = initialColumn * initialRow;
        this._minSize = window.getComputedStyle(document.getElementsByClassName('field__field-square')[0], null).getPropertyValue("margin-right").slice(0, 1);
        this.updateWidth();
        this.nextMove();
        // this.shiftBottom();
    }

    updateWidth(){
        this._updateWidth = sizeSquare * this._column + this._column * this._minSize;
        document.getElementsByClassName('field__field-view-panel')[0].style.width = this._updateWidth + "px";
    }

    shiftLeft(){
        // console.log("Left");
        let element = document.getElementsByClassName("field__field-view-panel")[0];
        for(let i = this._elements - 1; i > 1; i = i - this._column){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i; j > i - this._column + 1; j--){
                        if(element.children[j].innerText != "" && element.children[j - 1].innerText == ""){
                            element.children[j - 1].innerText = element.children[j].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }        
        }
        for(let i = this._elements - 1; i > 1; i = i - this._column){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i; j > i - this._column + 1; j--){
                        if(element.children[j].innerText == element.children[j - 1].innerText){
                            element.children[j - 1].innerText = element.children[j].innerText * element.children[j - 1].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }        
        }
        for(let i = this._elements - 1; i > 1; i = i - this._column){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i; j > i - this._column + 1; j--){
                        if(element.children[j].innerText != "" && element.children[j - 1].innerText == ""){
                            element.children[j - 1].innerText = element.children[j].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }        
        }
        this.nextMove();
    }

    shiftTop(){
        // console.log("Top");
        let element = document.getElementsByClassName("field__field-view-panel")[0];
        for(let i = this._elements - 1; i > this._elements - 1 - this._column; i--){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i - this._column; j >= 0; j = j - this._column){
                        if(element.children[j + this._column].innerText != "" && element.children[j].innerText == ""){
                            element.children[j].innerText = element.children[j + this._column].innerText;
                            element.children[j + this._column].innerText = "";
                        }
                    }
                }        
        }
        for(let i = this._elements - 1; i > this._elements - 1 - this._column; i--){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i - this._column; j >= 0; j = j - this._column){
                        if(element.children[j + this._column].innerText == element.children[j].innerText){
                            element.children[j + this._column].innerText = element.children[j + this._column].innerText * element.children[j + this._column].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }     
        }
        for(let i = this._elements - 1; i > this._elements - 1 - this._column; i--){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i - this._column; j >= 0; j = j - this._column){
                        if(element.children[j + this._column].innerText != "" && element.children[j].innerText == ""){
                            element.children[j].innerText = element.children[j + this._column].innerText;
                            element.children[j + this._column].innerText = "";
                        }
                    }
                }        
        }
        this.nextMove();
    }

    shiftRight(){
        // console.log("Right");
        let element = document.getElementsByClassName("field__field-view-panel")[0];
        for(let i = this._elements - 1; i > 1; i = i - this._column){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i; j > i - this._column + 1; j--){
                        if(element.children[j - 1].innerText != "" && element.children[j].innerText == ""){
                            element.children[j].innerText = element.children[j - 1].innerText;
                            element.children[j - 1].innerText = "";
                        }
                    }
                }        
        }
        for(let i = this._elements - 1; i > 1; i = i - this._column){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i; j > i - this._column + 1; j--){
                        if(element.children[j].innerText == element.children[j - 1].innerText){
                            element.children[j].innerText = element.children[j - 1].innerText * element.children[j].innerText;
                            element.children[j - 1].innerText = "";
                        }
                    }
                }        
        }
        for(let i = this._elements - 1; i > 1; i = i - this._column){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i; j > i - this._column + 1; j--){
                        if(element.children[j - 1].innerText != "" && element.children[j].innerText == ""){
                            element.children[j].innerText = element.children[j - 1].innerText;
                            element.children[j - 1].innerText = "";
                        }
                    }
                }        
        }
        this.nextMove();
    }

    shiftBottom(){
        // console.log("Bottom");
        let element = document.getElementsByClassName("field__field-view-panel")[0];
        for(let i = this._elements - 1; i > this._elements - 1 - this._column; i--){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i - this._column; j >= 0; j = j - this._column){
                        if(element.children[j + this._column].innerText == "" && element.children[j].innerText != ""){
                            element.children[j + this._column].innerText = element.children[j].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }        
        }
        for(let i = this._elements - 1; i > this._elements - 1 - this._column; i--){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i - this._column; j >= 0; j = j - this._column){
                        if(element.children[j + this._column].innerText == element.children[j].innerText){
                            element.children[j + this._column].innerText = element.children[j + this._column].innerText * element.children[j + this._column].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }     
        }
        for(let i = this._elements - 1; i > this._elements - 1 - this._column; i--){
                for(let k = 0; k < 3; k++ ){
                    for(let j = i - this._column; j >= 0; j = j - this._column){
                        if(element.children[j + this._column].innerText == "" && element.children[j].innerText != ""){
                            element.children[j + this._column].innerText = element.children[j].innerText;
                            element.children[j].innerText = "";
                        }
                    }
                }        
        }
        this.nextMove();
    }

    lastNumber(number, max, delta){
        let newNumber = number;
        for( newNumber; newNumber < max; newNumber = newNumber + delta ){}
        return newNumber;
    }

    sorting(last, delta){
        if( document.getElementsByClassName("field__field-view-panel")[0].children[last].innerText === "" ){ 
            console.log("  free  ");
            return true; 
        }
        else{ 
            console.log("  object  ");
            return false; 
        }
    }

    nextMove(){
        for(let i = 0; i < this._elements; i++ ) {
            if(document.getElementsByClassName("field__field-view-panel")[0].children[i].innerHTML == "43046721"){
                alert(" Вы набрали 43046721. Поздравляем!!! ");
                for(let j = 0; j < this._elements; j++ ) {
                    document.getElementsByClassName("field__field-view-panel")[0].children[j].innerHTML = "";
                }
            }
        }

        // for(let i = 0; i < this._elements / 2; i++ ) {
        //     document.getElementsByClassName("field__field-view-panel")[0].children[i].innerHTML = "3";
        // }

        // for(let i = 3; i < this._elements; i = i + 4 ) {
        //     document.getElementsByClassName("field__field-view-panel")[0].children[i].innerHTML = "3";
        // }

        for(let i = 0; i < this._elements; i++ ) {
            if(document.getElementsByClassName("field__field-view-panel")[0].children[i].innerHTML == "0"){
                document.getElementsByClassName("field__field-view-panel")[0].children[i].innerHTML = "";
            }
        }

        if( this.chekAll() == true ){
            // console.log(" Все места заняты. Game over!!! ");
            alert(" Все места заняты. Game over!!! ");
            for(let i = 0; i < this._elements; i++ ) {
                document.getElementsByClassName("field__field-view-panel")[0].children[random].innerHTML = "";
            }
        } 
        else{
            let random = this.random();
            while( this.chekSpase(random) != true ) {
              random = this.random();
            }
            document.getElementsByClassName("field__field-view-panel")[0].children[random].innerHTML = "3";
        }
    }

    chekAll(){
        let chekAll = true;
        for(let i = 0; i < this._elements; i++ ) {
            if(this.chekSpase(i) == true){ 
                chekAll = false; 
            }
        }
        return chekAll;
    }

    chekSpase(number){
        if( document.getElementsByClassName("field__field-view-panel")[0].children[number].innerText == "" ){ 
            return true; 
        }
        else{ 
            return false; 
        }
    }

    random(){
        return Math.ceil(Math.random() * this._elements) - 1;
    }
}


let sizeSquare = document.getElementsByClassName('field__field-square')[0].offsetWidth;
const Column = Row = 4;
const field = new Field(Column, Row, sizeSquare);


function moveRect(e){
    if( e.keyCode == 37 ){ action('KeyLeft'); }
    if( e.keyCode == 38 ){ action('KeyTop'); }
    if( e.keyCode == 39 ){ action('KeyRight'); }
    if( e.keyCode == 40 ){ action('KeyBottom'); }
}
addEventListener("keydown", moveRect);
