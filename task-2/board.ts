const createChessDesk = (size: number) => {
    let desk: string = '';

    for (let i: number = 1; i <= size; i++){
         if(i === size) {
            return desk;
        } else if(i % 2 === 1) {
            for (let j: number = 1; j <= size; j++){
                if (j % 2 === 1){
                    desk += '  ';
                } else if(j === size) {
                    desk += '██\n';
                } else {
                    desk += '██';
                }
            }
        } else {
            for (let j: number = 1; j <= size; j++){
                if (j % 2 === 1){
                    desk += '██';
                } else if (j === size) {
                    desk += '  \n';
                } else {
                    desk += '  ';
                }
            }
        }
    }
};

console.log(createChessDesk(8));