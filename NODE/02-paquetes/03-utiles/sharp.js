const sharp = require('sharp')

sharp('new.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')
