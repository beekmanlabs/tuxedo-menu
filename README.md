# tuxedo-menu
A simple jQuery menu plugin with a flat HTML menu structure.

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
    activeClass: 'active',
    addActiveClass: true,
    isFixed: true
});
```

__triggerSelector__

The jQuery selector for choosing which element to treat as the menu's trigger.

__menuSelector__

The jQuery selector for choosing which element to treat as the menu.

__activeClass__

The CSS class to add to a menu item when it is selected.

__addActiveClass__

A boolean to decide if an "active" class should be added to a menu item when it is selected.

__isFixed__

A boolean to make the menu fixed or in the flow of the document.

