# World Vision - Holiday Banners

* 300x250
* 300x600
* 728x90
* 970x250

## Staging Server:

* http://clients.msistg.com/world-vision/holiday-banners/


The file structure follows the Digital Addix guidelines and is as follows:

```
root
    -160x600
        -index.html
        -main.css
        js
            -main.js
        assets
            image assets
```

### Images
Naming convention is important for images. For any images that are used only on one size of banner, the filename MUST end with the dimensions of the banner.

For example, the image1 for the 250x300 banner would be `image1--250x300.jpg`.

#### NOTE:
When moving images to the correct directories, the gulp task will move any image whose title DOES NOT end with 0 in to every folder. For example, logo.jpg and cta.svg will go in to every project folder. But slide-1--970x250.jpg will only go in to the 970x250 folder.

### Static images
Place a static image for each size, as well as the 500x500 and 320x50 sizes in the static directory. Name them like `static-500x500.jpg`.

### Adding a width
For example, say you need to add a 200x300 banner:

* Add a new folder in views/templates and name it 200x300
* Add a new file: source/styles/components/banners/\_banner-200x300.scss
* Add a new file: source/styles/main-200x300.scss
* Add a new file: source/scripts/main-200x300.js
* Open gulp/config.js and add '200x300' to the folders array
* Add your new size to the views/index.html file

## Other info
