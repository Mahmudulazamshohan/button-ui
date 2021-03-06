# Vuejs Button UI components

## Project setup
```
npm install @mahmudulazam/button-ui
```

### Compiles and hot-reloads for development
```
npm run serve
```

```
import Vue from 'vue'
import ButtonUi from '@mahmudulazam/button-ui'
import '@mahmudulazam/button-ui/dist/mbutton.css'
Vue.use(ButtonUi)
```
![alt text](https://raw.githubusercontent.com/Mahmudulazamshohan/button-ui/master/images/screenshot.PNG "Image")

## How to use Button UI
## Example
```
      <m-button size="small"
                 type="warning"
                 float
                 material
                @click="abcd">
        <i class="small material-icons">my_location</i>
      </m-button>
```
###
With icon
###
```
      <m-button size="small"
                 type="warning"
                 float
                 material
                @click="abcd"
                 class="mx-2 my-2">
             <micon>
                my_location
             </micon>
      </m-button>
```
#### Button Group
```
<MButtonGroup  class="mx-2 my-2">
      <m-button  size="large"
                 material
                 type="info">
        play
      </m-button>
      <m-button  size="large"
                 type="success">
        play
      </m-button>
      <m-button  size="large"
                 type="warning">
        play
      </m-button>
    </MButtonGroup>
```
###
Slot 
###
####
 size = small | medium | large
####
####
 float = boolean
####
####
 material = boolean
####
####
color = #000000
####
####
textColor = #ffffff
####
###
Events 
###
####
 @click
####
