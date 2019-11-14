exports.parse = (n) => {
    if (validate(n) == false) {
        return;
    }
    var sum = 0
    for (var i = 0; i < n.length; i++) {

        var letter = n.charAt(i)
        var next = n.charAt(i + 1)

        if (letter === 'I') {
            if (next && (next === 'V' || next === 'X')) {
                sum--
            } else sum += 1
        }

        if (letter === 'V') sum += 5

        if (letter === 'X') {
            if (next && (next === 'L' || next === 'C')) {
                sum -= 10
            } else sum += 10
        }

        if (letter === 'L') sum += 50

        if (letter === 'C') {
            if (next && (next === 'D' || next === 'M')) {
                sum -= 100
            } else sum += 100
        }
        
        if (letter === 'D') sum += 500
        
        if (letter === 'M') sum += 1000


    }
    console.log(sum)
}

validate = (n) => {
    if (n.length === 0) {
        console.log("No input given")
        return false;
    }
    var regex = /^M{0,3}(CM)?(D?|(CD)?)C{0,3}(XC)?(L?|(XL)?)X{0,3}(IX)?(V?|(IV)?)I{0,3}$/
    if (regex.test(n)) {
        return true;
    } else {
        console.log("Invalid input.")
        return false;
    }

}