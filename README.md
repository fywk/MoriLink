# Nook++

## Photo Cropping Scripts

Some images used in this site is programatically crop with the [ImageMagick](https://github.com/imagemagick/imagemagick) CLI tool. It is assumed that the image is exported from Switch screenshot.

- Script to crop map exported from Switch's screenshot:

```bash
magick '*.jpg[640x535+330+100]' map.jpg
```

- Script to extract custom design thumbnail from screenshot:

```bash
magick '*.jpg[154x154+1013+261]' thumbnail.jpg
```
