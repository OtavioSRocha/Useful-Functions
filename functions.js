    
    function removeNumbers(string) {
        return string.replace(/[0-9]/g, '');
    }

    module.exports = {
        removeNumbers: removeNumbers,
    }