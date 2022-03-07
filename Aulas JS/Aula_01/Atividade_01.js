function nprimo (n) {

    if ( !Number.isInteger(n) || n < 2 || !(n%2) ) {
        return false;
    }
    
    if (n === 2) {
        return true
    }

    for(let i = 3; i <= Math.sqrt(n); i+2) {

        if (n % i === 0) {
            return false;
        }
    }
        return true;
}
