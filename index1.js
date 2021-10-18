/**
 * 
 * @param {一共用到字符数量} length 
 * @param {当前轮到哪个字符} current_pos 
 * @returns 下一轮轮到哪个
 */
function update(length, current_pos){
    current_pos += 1
    if(current_pos == length){
        current_pos = 0
    }
    return current_pos
}

/**
 * 
 * @param {组成图案的字符} character 
 * @param {图案大小} size 
 * @returns 三角形图案
 */
function triangle(character,size){
    var res = ''
    var pos = 0
    for(i = 0; i < size; i ++){
        for(j = 0; j < i + 1; j ++){
            res += character[pos]
            pos = update(length,pos)
        }
        res += '\n'
    }
    return res
}


/**
 * 
 * @param {组成图案的字符} character 
 * @param {图案大小} size 
 * @returns 正方形图案
 */
function square(character,size){
    var res = ''
    var pos = 0
    for(i = 0; i < size; i ++){
        for(j = 0; j < size; j ++){
            res += character[pos]
            pos = update(length,pos)
        }
        res += '\n'
    }
    return res
}


/**
 * 
 * @param {组成图案的字符} character 
 * @param {图案大小} size 
 * @returns 菱形图案
 */
function rhomb(character, size){
    var res = ''
    var pos = 0
    for(i = 0; i < size; i += 2){
        for(j = 0; j < (size-i)/2; j ++){
            res += ' '
        }
        for(j = 0; j < i + 1; j ++){
            res += character[pos]
            pos = update(length,pos)
        }
        res += '\n'
    }
    for(i = size -2; i > 0; i -= 2){
        for(j = 0; j < (size-i)/2+1; j ++){
            res += ' '
        }
        for(j = 0; j < i; j ++){
            res += character[pos]
            pos = update(length,pos)
        }
        res += '\n'
    }
    return res
}



var character = [] // 组成图像的字符

//读取构成图像的字符
while(true){
    var temp = prompt('输入字符') 
    if(temp == ' '||temp == ''){
        confirm('别输空格')
    }else{
        if(temp != null) character.push(temp) 
    }
    if(temp == null && character.length > 0) break
}

var length = character.length //一共有多少个字符去组成图案
var res = '' //输出图案


while(true){

    shape = prompt('形状')
    if(shape != '三角形' && shape != '正方形' && shape != '菱形'){ 
        confirm('请输入三角形/正方形/菱形')
        continue
    }

    size = prompt('大小')
    if(typeof size != 'number' || isNaN(size)){ //数字检测
        confirm('请输入数字')
        continue
    }
    if(shape == '菱形' && size % 2 == 0){ //菱形长度检测
        confirm('菱形需要奇数大小')
        continue
    }

    if(shape == '三角形') res = triangle(character,size)
    if(shape == '正方形') res = square(character,size)
    if(shape == '菱形') res = rhomb(character,size)
    break
}

alert(res)

