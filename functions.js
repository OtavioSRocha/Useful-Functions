    
    function removeNumbers(string) {
        return string.replace(/[0-9]/g, '');
    }

    function removeNonNumeric(string) {
        return string.replace(/\D/g,'');
    }


    module.exports = {
        removeNumbers: removeNumbers,
        removeNonNumeric: removeNonNumeric,
    }