module.exports = function check(str, bracketsConfig) {
    let arr = str.split('')

    for (let i = 0; i < arr.length; i++) {
        for (let c = 0; c < bracketsConfig.length; c++) {
            if (arr[i-1] === bracketsConfig[c][0] && arr[i] === bracketsConfig[c][1]){
                arr.splice(i-1, 2)
                i = 0
                break
            }
        }
    }

    return arr.length === 0
}
