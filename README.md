# tuxedo-menu
A simple jQuery menu plugin with a flat HTML menu structure.

## Install
```bash
bower install --save tuxedo-menu
```

## Include
### Include Dependencies
```css
<link rel="stylesheet" href="bower_components/animate.css/animate.min.css">
```

```javascript
<script src="bower_components/jquery/dist/jquery.min.js"></script>
```

### Include Tuxedo Menu
```css
<link rel="stylesheet" href="bower_components/tuxedo-menu/dist/tuxedo-menu.min.css" />
```

```javascript
<script src="bower_components/dist/tuxedo-menu.min.js"></script>
```


## Usage
__Create an HTML menu__
```html
<nav id="myMenu" class="tuxedo-menu">
    <ul>
        <li class="menu-depth-0"><a href="#">Item 1</a></li>
        <li class="menu-depth-0"><div class="heading">Heading 2</div></li>
        <li class="menu-depth-0"><a href="#">Item 2</a></li>
        <li class="menu-depth-1"><a href="#">Item 2.1</a></li>
        <li class="menu-depth-1"><a href="#">Item 2.2</a></li>
        <li class="menu-depth-2"><a href="#">Item 2.2.1</a></li>
        <li class="menu-depth-0"><a href="#">Item 3</a></li>
        <li class="menu-depth-0"><div class="heading">Heading 4</div></li>
        <li class="menu-depth-0"><a href="#">Item 4</a></li>
        <li class="menu-depth-0"><div class="heading">Heading 4.1</div></li>
        <li class="menu-depth-1"><a href="#">Item 4.1</a></li>
    </ul>
</nav>
```

__Initialize a Tuxedo Menu__
```javascript
jQuery('#myMenu').tuxedoMenu();
```

__For mobile, Add a Viewport Meta Tag to the Page's Head Element__
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```
