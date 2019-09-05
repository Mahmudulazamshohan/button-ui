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
