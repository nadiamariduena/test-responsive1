## ALL RESPONSIVE

- I need to ask my teacher if this media query is correct, as i have test it and everything looks fine

[CSS Units: vh, vw, vmin, vmax](https://youtu.be/IWFqGsXxJ1E)

<br>

```scss
// PHONE Portrait & Landscape
@media screen and(min-width: 320px) and(max-width:480px) {
}
// ---------------
// PHONE Portrait
@media screen and(min-width: 320px) {
}
// ---------------
// PHONE Landscape
@media screen and(max-width: 480px) {
}
/*



only problem here , what happens in between as the max is set to 480 and the min width of the tablet is 768px..where goes the 500 and 600



*/
// ---------------
// ---------------
//
// TABLET Portrait & Landscape
@media screen and(min-width: 768px) and(max-width:1024px) {
}

// ---------------
// TABLET Portrait
@media screen and(min-width: 768px) {
}
// ---------------
// TABLET Landscape
@media screen and(min-width:1024px) {
}

// ---------------
// ---------------
// Desktop
@media screen and(min-width:1224px) {
}
// ---------------
// LARGE Desktop
@media screen and(min-width:1824px) {
}
```

<br>
<br>
<hr>
<br>

### FONT SIZE ☁️

- I DECIDED to test vw on the font-size, I still dont know if it s the right approach but I like how smooth the text scale depending on the viewport, only bad thing is the compatibility.

[<img src="/src/img/respons-fontsize.gif"/>]()

#### vw, vh and vmin 👾

_Extrait article from:_

[The New CSS3 Relative Font Sizing Units](https://www.sitepoint.com/new-css3-relative-font-size/)

-These new properties allow you to scale font sizes according to the viewport dimensions, i.e.

- 1vw is 1% of the viewport width
- 1vh is 1% of the viewport height
- 1vmin is the smallest of 1vw and 1vh
- For example, assume your browser viewport is set to 1,000 x 1,200 pixels:

- 1.5vw = 15px font size
- 1.5vh = 18px font size
- 1.5vmin = min(1.5vw, 1.5vh) = 15px font size
- The new units will revolutionize responsive design — text on mobile devices often appears a little large because you’re holding the device closer than a monitor.

<br>

#### Browser support is a little patchy but it’s coming…

- IE10 — full support

- IE9 — supported, but vmin is named “vm”

- Chrome 22+ — full support

- Safari 6 and iOS Safari 6 — full support

- Firefox — will be implemented in version 19 (late February 2013)

- Blackberry Browser 10 — full support

<br>

> No word from Opera yet, but I suspect they’re on the case. Again, it may be advisable to use fallbacks for a few years, e.g.

<br>

#### Viewport Sized Typography 👾

_Extrait article from:_

[Viewport Sized Typography](https://css-tricks.com/viewport-sized-typography/)

<br>
<br>

### COMPATIBILITY

[<img src="/src/img/viewport.compa.jpg"/>]()

<br>
<br>
<hr>
<br>
