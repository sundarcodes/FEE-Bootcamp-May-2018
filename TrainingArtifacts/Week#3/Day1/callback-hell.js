readFromDir(source)
    .then(getSize, getSizeErr)
    .then(writeToFile, handleErrOnWrite)


getSize = function (files) {
    return new Promise(function (resolve, reject) {
        files.forEach(function (filename, fileIndex) {
            console.log(filename);
            resolve(gm(source + filename));
        })
    })
}


readFromDir = function (source) {
    return new Promise(function (resolve, reject) {
        fs.readdir(source, function (err, files) {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        })
    })
}

fs.readdir(source, onReadDir);

onReadDir = function (err, files) {
    return new Promise(function (resolve, reject) {
        return function (err, files) {
            if (err) {
                console.log('Error finding files: ' + err)
            } else {
                return
                files.forEach(function (filename, fileIndex) {
                    console.log(filename)
                    gm(source + filename).size(onGettingSize)
                })
            }
        }
    })
};

handleErrOnWrite = function (err) {
    if (err) console.log('Error writing file: ' + err)
};

onGettingSize = function (err, values) {
    if (err) {
        console.log('Error identifying file size: ' + err)
    } else {
        console.log(filename + ' : ' + values)
        aspect = (values.width / values.height)
        widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, handleErrOnWrite).bind(this))
    }
};