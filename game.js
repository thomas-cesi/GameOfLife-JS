var grille = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];

function getNombreCellulesMortes(x, y) {
    var _dead = 0;
    var _maxX = grille.length - 1;
    var _maxY = grille[0].length - 1;

    if (x > 0 && y > 0 && grille[x-1][y-1] == 0)
        _dead++;
    if (y > 0 && grille[x][y-1] == 0)
        _dead++;
    if (x < _maxX && y > 0 && grille[x+1][y-1] == 0)
        _dead++;
    if (x > 0 && grille[x-1][y] == 0)
        _dead++;
    if (x < _maxX && grille[x+1][y] == 0)
        _dead++;
    if (x > 0 && y < _maxY && grille[x-1][y+1] == 0)
        _dead++;
    if (y < _maxY && grille[x][y+1] == 0)
        _dead++;
    if (y < _maxY && x < _maxX && grille[x+1][y+1] == 0)
        _dead++;

    return _dead;
}

function estCelluleMourrante(x,y) {
    if(grille[x][y] == 0) {
        if(getNombreCellulesMortes(x,y) > 2 || getNombreCellulesMortes(x,y) < 3 ) {
            return true;
            // Cellule est mourrante
        }
        else {
            return false;
            // Cellule reste vivante
        }
    }
}

// On parcours la grille
for (indexLigne = 0; indexLigne < 5; indexLigne++) {
    for (indexColonne = 0; indexColonne < 5; indexColonne++) {

    }
}
