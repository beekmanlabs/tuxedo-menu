# tuxedo-menu
A simple jQuery menu plugin that is compatible with metisMenu.

## Install
```bash
bower install --save tuxedo-menu
```

## Include
__Include Dependencies__
```css
<link rel="stylesheet" href="bower_components/animate.css/animate.min.css">
```

```javascript
<script src="bower_components/jquery/dist/jquery.min.js"></script>
```

__Include Tuxedo Menu__
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
        <li>
            <h1>Heading 1</h1>
        </li>
        <li><a href="#">Item 1</a></li>
        <li>
            <h1>Heading 2</h1>
        </li>
        <li><a href="#">Item 2</a>
            <ul>
                <li><a href="#">Item 2.1</a></li>
                <li><a href="#">Item 2.2</a>
                    <ul>
                        <li><h1>Heading 2.2.1</h1></li>
                        <li><a href="#">Item 2.2.1</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#">Item 3</a></li>
        <li>
            <h1>Heading 4</h1>
        </li>
        <li><a href="#">Item 4</a>
            <ul>
                <li>
                    <h1>Heading 4.1</h1>
                </li>
                <li><a href="#">Item 4.1</a></li>
            </ul>
        </li>
    </ul>
</nav>
```

__Add a Trigger Button for the Menu__
```html
<span class="tuxedo-menu-trigger">&#9776;</span>
```

__Initialize a Tuxedo Menu__
```javascript
jQuery('#myMenu').tuxedoMenu();
```

__For mobile, Add a Viewport Meta Tag to the Page's Head Element__
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

##  Configuration Options

```javascript
jQuery('#myMenu').tuxedoMenu({
    triggerSelector: '.tuxedo-menu-trigger',
    menuSelector: '.tuxedo-menu',
    isFixed: true
});
```

__triggerSelector__

The jQuery selector for choosing which element to treat as the menu's trigger.

__menuSelector__

The jQuery selector for choosing which element to treat as the menu.

__isFixed__

A boolean to make the menu fixed or in the flow of the document.

