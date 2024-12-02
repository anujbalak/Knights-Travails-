class Square {
    constructor(location, neighbours = []) {
        this.location = location;
        this.neighbours = neighbours;
    }
}

function knightMoves(initial, target) {
    errorHandler(initial, target)

    if (initial[0] === target[0] && initial[1] === target[1]) {
        return declareMoves(initial, target);
    }

    let newSquare = new Square(initial);
    generateNeighbours(initial, newSquare);
    let totalNeighbours = generateNeighbours.length;
    for(let i = 0; i < totalNeighbours; i++) {
        knightMoves(newSquare.neighbours[i], target);
    }
}

function declareMoves(initial, target) {
    return `You made it in 2 moves! Here's your path: [${initial}] -> [${target}]`
}

function errorHandler(initial, target) {
    if (initial.length === 1 && target.length === 1) {
        throw new Error('Value should be in 2D')
    }
}

function generateNeighbours(initial, square) {

    const max = 8;
    const min = -1;
    let count = 0

    while (count < 8) {
        switch (count) {
            case 0: { 
                let x = initial[0];
                let y = initial[1];
                x += 2;
                y += 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 1: {
                let x = initial[0];
                let y = initial[1]; 
                x += 2;
                y -= 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 2: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 2;
                y += 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 3: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 2;
                y -= 1;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 4: {
                let x = initial[0];
                let y = initial[1]; 
                x += 1;
                y += 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 5: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 1;
                y += 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 6: {
                let x = initial[0];
                let y = initial[1]; 
                x += 1;
                y -= 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            case 7: {
                let x = initial[0];
                let y = initial[1]; 
                x -= 1;
                y -= 2;
                let node = [x, y];
                if (conditions(x, y, min, max)) {
                    square.neighbours.push(node)
                }        
                break; 
            }
            default:
                break;
        }
        count++;
    }
}

function conditions(x, y, min, max) {
    if (x > min && x < max && y > min && y < max) {
        return true;
    } else {
        return false;
    }
}

knightMoves([1, 2], [1, 3])