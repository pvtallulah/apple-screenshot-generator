const path = require('path')
const fs = require('fs')
const sharp = require('sharp')
const paths = process.argv.slice(2)

fs.readdir(paths[0], async (err, files) => {
    let imgId = 1
    for (const file of files) {
    const filePath = path.join(paths[0] + file)
    console.log(filePath)
    await sharp(paths[0] + '\\' + file)
    .resize(1242, 2688, {
      fit: 'fill'
    })
    .toFile(path.join(paths[0] + '\\iphone-small-' + imgId + '.png'), (err, info) => {
      if (err) {
        console.log('error: ' + err)
      } else {
        console.log('success: iphone-small')
      }
    })
    await sharp(paths[0] + '\\' + file)
    .resize(1242, 2208, {
      fit: 'fill'
    })
    .toFile(path.join(paths[0] + '\\iphone-big-' + imgId + '.png'), (err, info) => {
      if (err) {
        console.log('error: ' + err)
      } else {
        console.log('success: iphone-big')
      }
    })
    await sharp(paths[0] + '\\' + file)
    .resize(2048, 2732, {
      fit: 'fill'
    })
    .toFile(path.join(paths[0] + '\\ipad-' + imgId + '.png'), (err, info) => {
      if (err) {
        console.log('error: ' + err)
      } else {
        console.log('success: ipad')
      }
    })
    imgId++
  }
})
