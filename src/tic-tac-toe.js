class TicTacToe {
    constructor() {
        this.CurrentSymbol='x';
        this.i=3;
        this.j=3;
        this.board=[[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
       return this.CurrentSymbol;

    }
    nextTurn(i, j) {
        if (this.board[i][j]==null){
            this.board[i][j]=this.CurrentSymbol;
           if (this.CurrentSymbol=='x') {
                this.CurrentSymbol='o';
            }
           else {
               this.CurrentSymbol='x';
           }
        }
    }

    isFinished() {
       if ( this.board[0][0]=='x' && this.board[0][1]=='x' && this.board[0][2]=='x'||
            this.board[1][0]=='x' && this.board[1][1]=='x' && this.board[1][2]=='x'||
            this.board[2][0]=='x' && this.board[2][1]=='x' && this.board[2][2]=='x'||
            this.board[0][0]=='x' && this.board[1][0]=='x' && this.board[2][0]=='x'||
            this.board[0][1]=='x' && this.board[1][1]=='x' && this.board[2][1]=='x'||
            this.board[0][2]=='x' && this.board[1][2]=='x' && this.board[2][2]=='x'||
            this.board[0][0]=='x' && this.board[1][1]=='x' && this.board[2][2]=='x'||
            this.board[2][0]=='x' && this.board[1][1]=='x' && this.board[0][2]=='x' ) {
            return true;
        }

        else {
            if (this.board[0][0]=='o' && this.board[0][1]=='o' && this.board[0][2]=='o'||
                this.board[1][0]=='o' && this.board[1][1]=='o' && this.board[1][2]=='o'||
                this.board[2][0]=='o' && this.board[2][1]=='o' && this.board[2][2]=='o'||
                this.board[0][0]=='o' && this.board[1][0]=='o' && this.board[2][0]=='o'||
                this.board[0][1]=='o' && this.board[1][1]=='o' && this.board[2][1]=='o'||
                this.board[0][2]=='o' && this.board[1][2]=='o' && this.board[2][2]=='o'||
                this.board[0][0]=='o' && this.board[1][1]=='o' && this.board[2][2]=='o'||
                this.board[2][0]=='o' && this.board[1][1]=='o' && this.board[0][2]=='o' )
                {
              return true;
            }
            else {
                if  (this.board[0][0]!=null&&
                     this.board[0][1]!=null&&
                     this.board[0][2]!=null&&
                     this.board[1][0]!=null&&
                     this.board[1][1]!=null&&
                     this.board[1][2]!=null&&
                     this.board[2][0]!=null&&
                     this.board[2][1]!=null&&
                     this.board[2][2]!=null){
                    return true;
                }

                else {
                   return false;
                }
            }    
        }   
   }

    getWinner() {
        if (this.board[0][0]=='x' && this.board[0][1]=='x' && this.board[0][2]=='x'||
            this.board[1][0]=='x' && this.board[1][1]=='x' && this.board[1][2]=='x'||
            this.board[2][0]=='x' && this.board[2][1]=='x' && this.board[2][2]=='x'||
            this.board[0][0]=='x' && this.board[1][0]=='x' && this.board[2][0]=='x'||
            this.board[0][1]=='x' && this.board[1][1]=='x' && this.board[2][1]=='x'||
            this.board[0][2]=='x' && this.board[1][2]=='x' && this.board[2][2]=='x'||
            this.board[0][0]=='x' && this.board[1][1]=='x' && this.board[2][2]=='x'||
            this.board[2][0]=='x' && this.board[1][1]=='x' && this.board[0][2]=='x' ){
            return 'x';
        }
        else {
            if (this.board[0][0]=='o' && this.board[0][1]=='o' && this.board[0][2]=='o'||
                this.board[1][0]=='o' && this.board[1][1]=='o' && this.board[1][2]=='o'||
                this.board[2][0]=='o' && this.board[2][1]=='o' && this.board[2][2]=='o'||
                this.board[0][0]=='o' && this.board[1][0]=='o' && this.board[2][0]=='o'||
                this.board[0][1]=='o' && this.board[1][1]=='o' && this.board[2][1]=='o'||
                this.board[0][2]=='o' && this.board[1][2]=='o' && this.board[2][2]=='o'||
                this.board[0][0]=='o' && this.board[1][1]=='o' && this.board[2][2]=='o'||
                this.board[2][0]=='o' && this.board[1][1]=='o' && this.board[0][2]=='o' ){
                return 'o'; 
            }
            else {
                return null;
            }
        }
    }

    noMoreTurns() {
        if (this.board[0][0]!=null&&
            this.board[0][1]!=null&&
            this.board[0][2]!=null&&
            this.board[1][0]!=null&&
            this.board[1][1]!=null&&
            this.board[1][2]!=null&&
            this.board[2][0]!=null&&
            this.board[2][1]!=null&&
            this.board[2][2]!=null){
              return true;
            }
            else {
                return false
            }

    }

    isDraw() {
        if (this.board[0][0]=='x' && this.board[0][1]=='x' && this.board[0][2]=='x'||
            this.board[1][0]=='x' && this.board[1][1]=='x' && this.board[1][2]=='x'||
            this.board[2][0]=='x' && this.board[2][1]=='x' && this.board[2][2]=='x'||
            this.board[0][0]=='x' && this.board[1][0]=='x' && this.board[2][0]=='x'||
            this.board[0][1]=='x' && this.board[1][1]=='x' && this.board[2][1]=='x'||
            this.board[0][2]=='x' && this.board[1][2]=='x' && this.board[2][2]=='x'||
            this.board[0][0]=='x' && this.board[1][1]=='x' && this.board[2][2]=='x'||
            this.board[2][0]=='x' && this.board[1][1]=='x' && this.board[0][2]=='x' ) {
            return false;
        }

        else {
            if (this.board[0][0]!=null&&
                this.board[0][1]!=null&&
                this.board[0][2]!=null&&
                this.board[1][0]!=null&&
                this.board[1][1]!=null&&
                this.board[1][2]!=null&&
                this.board[2][0]!=null&&
                this.board[2][1]!=null&&
                this.board[2][2]!=null){
              return true;
            }
            else {
                return false
            }
        }   
        if (this.board[0][0]=='o' && this.board[0][1]=='o' && this.board[0][2]=='o'||
            this.board[1][0]=='o' && this.board[1][1]=='o' && this.board[1][2]=='o'||
            this.board[2][0]=='o' && this.board[2][1]=='o' && this.board[2][2]=='o'||
            this.board[0][0]=='o' && this.board[1][0]=='o' && this.board[2][0]=='o'||
            this.board[0][1]=='o' && this.board[1][1]=='o' && this.board[2][1]=='o'||
            this.board[0][2]=='o' && this.board[1][2]=='o' && this.board[2][2]=='o'||
            this.board[0][0]=='o' && this.board[1][1]=='o' && this.board[2][2]=='o'||
            this.board[2][0]=='o' && this.board[1][1]=='o' && this.board[0][2]=='o' ) {
            return false;
        }

        else {
            if (this.board[0][0]!=null&&
                this.board[0][1]!=null&&
                this.board[0][2]!=null&&
                this.board[1][0]!=null&&
                this.board[1][1]!=null&&
                this.board[1][2]!=null&&
                this.board[2][0]!=null&&
                this.board[2][1]!=null&&
                this.board[2][2]!=null){
              return true;
            }
            else {
                return false
            }
        }

    }

    getFieldValue(i, j) {
        return this.board[i][j];

    }
        
}

module.exports = TicTacToe;
