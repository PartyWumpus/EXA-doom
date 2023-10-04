// by PartyWumpus, feel free to modify :D
// most of the code from lodev.org/cgtutor/raycasting.html
function getName()
{
    return 'EXA DOOM';
}
version = "v3.0"

// each preset = {worldMap: [map array], posX: [x start pos], posY: [y start pos], name: [name of map in list]}
presetMaps = []
presetMaps[0] = {
    worldMap:[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,1,1,0,2,2,0,3,3,0,4,4,0,5,5,0,0,0,0,1],
  [1,0,0,0,0,1,1,0,2,2,0,3,3,0,4,4,0,5,5,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
    posX: 9,
    posY: 11.5,
    name: "Test Map"
},

presetMaps[1] = {
    worldMap:[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,0,3,0,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,1,0,3,0,1,0,1,1,1,1,0,1],
  [1,1,1,1,1,0,1,0,3,0,1,0,1,1,1,1,0,1],
  [1,0,0,0,1,0,1,0,3,0,1,0,0,0,0,0,0,1],
  [1,0,5,0,0,0,1,0,3,0,0,0,0,0,0,1,1,1],
  [1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
],
    posX: 7.8,
    posY: 11,
    name: "Map 1"
}

presetMaps[2] = {
    worldMap:[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1]
],
    posX: 7.8,
    posY: 11,
    name: "Just Walls"
}


texWidth = 8;
texHeight = 8;
//texture 0 does not exist as it is empty tile
//texture transparency only works on sprites, and is done with color 0
// while it is possible to add transparency to walls, it would be ineffecient
// could be possible to make exceptions for walls with transparency

texture = [];

texture[0] = ""
texture[1] = {
  texture:[
"████████",
"████████",
"████████",
"████████",
"████████",
"████████",
"████████",
"████████"
],
color:[
"CCCCCCCC",
"AAAAAAAA",
"AAAAAAAA",
"99999999",
"99999999",
"AAAAAAAA",
"AAAAAAAA",
"CCCCCCCC"
]
}

texture[2] = {
  texture:[
"████#███",
"████#███",
"████#███",
"########",
"########",
"████#███",
"████#███",
"████#███"
],
color:[
"6E89F4D8",
"AD6AFEBD",
"72E7F963",
"FFFFFFFF",
"FFFFFFFF",
"EBD8F597",
"DC5BF78A",
"ADEAF963"
]
}

texture[3] = {
  texture:[
"█#███#██",
"█#███#██",
"█#███#██",
"█#███#██",
"█#███#██",
"█#███#██",
"█#███#██",
"█#███#██"
],
color:[
"D8DDD8DD",
"D8DDD8DD",
"D8DDD8DD",
"D8DDD8DD",
"D8DDD8DD",
"D8DDD8DD",
"D8DDD8DD",
"D8DDD8DD"
]
}

texture[4] = {
  texture:[
"██████╬█",
"█╬██████",
"████╬███",
"███████╬",
"██╬█████",
"█████╬██",
"╬███████",
"███╬████"
],
color:[
"CCCCCC6C",
"A5AAAAAA",
"AAAA5AAA",
"99999994",
"99499999",
"AAAAA5AA",
"5AAAAAAA",
"CCC6CCCC",
]
}

texture[5] = {
  texture:[
"########",
"#██##██#",
"#██##██#",
"########",
"#█####█#",
"##████##",
"########",
"########"
],
color:[
"DDDDDDDD",
"DEEDDEED",
"DEEDDEED",
"DDDDDDDD",
"DEDDDDED",
"DDEEEEDD",
"DDDDDDDD",
"DDDDDDDD"
]
}

texture[6] = {
  texture:[
"████████",
"████████",
"████████",
"████████",
"████████",
"████████",
"████████",
"████████"
],
color:[
"FFFFFFFF",
"FFFFFFFF",
"FFFFFFFF",
"FFFFFFFF",
"FFFFFFFF",
"FFFFFFFF",
"FFFFFFFF",
"FFFFFFFF"
]
}

texture[7] = {
  texture:[
"████████",
"█######█",
"█#    #█",
"█#    #█",
"█#    #█",
"█#    #█",
"█#    #█",
"█#    #█"
],
color:[
"CCCCCCCC",
"ADDDDDDA",
"AD1111DA",
"9D1111D9",
"9D1111D9",
"AD1111DA",
"AD1111DA",
"CD1111DC"
]
}

texture[8] = {
  texture:[
"████████",
" ██████ ",
"  ████  ",
"  ████  ",
"  ████  ",
"  ████  ",
" ██████ ",
"████████"
],
color:[
"BBBBBBBB",
"09999990",
"00999900",
"00999900",
"00999900",
"00999900",
"09999990",
"BBBBBBBB"
]
}

texture[9] = {
  texture:[
"        ",
"        ",
"        ",
"  ████  ",
" ██████ ",
" ██████ ",
" ██████ ",
"  ████  "
],
color:[
"00000000",
"00000000",
"00000000",
"00666600",
"06666660",
"06666660",
"06666660",
"00666600"
]
}

texture[10] = {
  texture:[
"   ███  ",
"   ██   ",
"   ███  ",
"   ██   ",
"  ████  ",
" ██  ██ ",
" ██  ██ ",
"  ████  "
],
color:[
"000BBB00",
"000BB000",
"000BBB00",
"000BB000",
"00BBBB00",
"0BB11BB0",
"0BB11BB0",
"00BBBB00"
]
}


sprite = []
//sprite[0] = {x:5,y:5,texture:8}
//sprite[1] = {x:7,y:5,texture:8}
//sprite[2] = {x:8,y:5,texture:10}
//sprite[3] = {x:5,y:6,texture:9}
//sprite[4] = {x:6.5,y:11.5,texture:9}


// x, y, texture, wallX, wallY and position, although position is automatically asigned by makeKeys()
keys = []
//keys[0] = {x:5,y:5,texture:10,wallX:6,wallY:6}
//makeKeys(keys)


function onConnect()
{
  // default values

  dirX = 0, dirY = -1
  planeX = -0.66, planeY = 0;
  frameCount = 0;
  ZBuffer = []
  spriteOrder = []
  spriteDistance = []

  moveSpeed = 0.5;
  rotSpeed = 0.2;
  //  moveSpeed = 0.05; very slow
  // rotSpeed = 0.03; very slow

  // inMenu, inGame, inMap
  gameState = "inMenu"
  menu = "main"
  animTimer = -1;
  keyBinds = {"UP":17,"LEFT":19,"RIGHT":20,"DOWN":18,"MAP":9} // default binds

  // then load any user set values to overwrite
  loadUserInfo()


  displayStartup()
}

function displayStartup() {
  drawCenteredText("EXA DOOM "+version, 17, 5)
  drawCenteredText("By PartyWumpus", 15, 6)

  drawCenteredText("Made with help from", 10, 8)
  drawCenteredText("lodev.org/cgtutor/raycasting.html", 10, 9)
  drawCenteredText("(it was written in c++ D:)", 5, 10)

  //drawCenteredText("Use the arrow keys to move", 17, 12)
  drawCenteredText("Press any key to continue", 17, 13)
}

titleArt =
[
" ▄▄▄▄▄ ▄▄   ▄▄   ▄▄▄     ▄▄▄▄   ▄▄▄▄▄   ▄▄▄▄▄  ▄▄▄  ▄▄▄", 15,
" █████▌▜█▙ ▟█▛  ▟███▙   ▐████▙ ███████ ███████ ███▙▟███", 15,
" ██▄▄   ▜███▛  ▟█▛ ▜█▙  ▐██ ██ ███ ███ ███ ███ ████████", 15,
" ████▌  ▟███▙  ███▀███  ▐██ ██ ███ ███ ███ ███ ███  ███", 15,
" ██▄▄▄ ▟█▛ ▜█▙ ███ ███  ▐████▛ ███▄███ ███▄███ ███  ███", 15,
" ████▛ ▜▛   ▜▛ ▜█▛ ▜█▛  ▐███▛   █████   █████  ▜█▛  ▜█▛", 15,
"                 By Party Wumpus ("+version+")", 10
]

//TODO: maximum length of options = 6, if more add next button programmatically?

function generateMenu(menuOptions) {
    for (var i = 0; i < menuOptions.length; i++) {
        drawText(menuOptions[i], 15, 10, (titleArt.length/2 + 1)+i*2)
        drawText("["+i+"]", 17, 6, (titleArt.length/2 + 1)+i*2)
    }
}


function menuView() {
  // draw titleArt
  for (var i = 0; i < titleArt.length; i+=2) {
    drawText(titleArt[i], titleArt[i+1],0, 0+i/2)
  }
  drawText("[Esc] Back", 17, 44, 8)

  switch (menu) {
    case "main":
      menuOptions = ["Play Game","Change Keybinds","View Textures","View Credits"]
      generateMenu(menuOptions)
      drawText("             ", 17, 44, 8) // hide [esc] quit
      break;

    case "newgame":
      menuOptions = ["Use preset map","Use randomized map"]
      generateMenu(menuOptions)
      break;

    case "randomizedmap":
      if (currentOption == "Width") {menuOptions = ["Width: "+width+"█","Height: "+height]}
      if (currentOption == "Height") {menuOptions = ["Width: "+width,"Height: "+height+"█"]}
      generateMenu(menuOptions)

        if (currentOption != "DONE") {
          drawCenteredText("Currently setting: "+currentOption, 17, 15)
          drawCenteredText("Type number to set value", 15, 16)
          drawCenteredText("Press enter to continue", 15, 17)
        } else {
          drawCenteredText("Press enter to start", 17, 15)
        }
      break;

    case "presetmap":
      menuOptions = presetMaps
        for (var i = 0; i < menuOptions.length; i++) {
            drawText(menuOptions[i]["name"], 15, 10, (titleArt.length/2 + 1)+i*2)
            drawText("["+i+"]", 17, 6, (titleArt.length/2 + 1)+i*2)
    }
      break;

    case "keybinds":
        if (currentOption != "DONE") {
          drawCenteredText("Currently binding: "+currentOption, 17, 15)
          drawCenteredText("Press key to set bind", 15, 16)
        } else {
          drawCenteredText("Binds Set.", 17, 15)
        }

        keybindBoxes(25,8,"UP")
        keybindBoxes(20,11,"LEFT")
        keybindBoxes(30,11,"RIGHT")
        keybindBoxes(25,11,"DOWN")
        keybindBoxes(17,8,"MAP")
      break;

    case "textures":
      drawBox(10, 15, 8, texWidth+2, texHeight+2) // texture box
      drawBox(10, 29, 8, texWidth+2, texHeight+2) // texture box 2
      for (var x = 0; x < texWidth; x++) { // draw the texture
        for (var y = 0; y < texHeight; y++) {
          character = texture[currentOption]['texture'][y][x];
          color = parseInt(texture[currentOption]['color'][y][x], 16) + 2;
          drawText(character,color,x+16,y+9)
          drawText(character,color,x+30,y+9)
        }
      }
      drawBox(10, 25, 11, 4, 3) // texture value box
      drawText("00", 5, 26, 12)
      drawText("UP", 14, 26, 10)
      drawText("DOWN", 14, 25, 14)
      drawText(currentOption, 16, 28-String(currentOption).length, 12)
      break;

    case "credits":
      text = ["Programming by: Party Wumpus","Help from lodev.org/cgtutor/"];
      for (var i = 0; i < text.length; i++) {
        drawCenteredText(text[i],12,(titleArt.length/2 + 1)+i*2)
      }
      break;
    }
}

specialKeys = {9:"TAB",17:"^",18:"v",19:"<",20:">"}
function keybindBoxes(x,y,keybind) { // it felt wrong to write the same thing 5 times
        drawText("000", 5, x+1, y+1)
        key = keyBinds[keybind]
        if (key >= 32 && key < 127) {key = " "+String.fromCharCode(key)+" "} // if letter, show that
        if (key in specialKeys) {key = " "+specialKeys[key]+" "} // if special key, show that

        if (typeof key == "number")  {drawText(key, 15, (x+4-String(key).length), y+1)}
        if (typeof key != "number")  {drawText(key, 15, Math.ceil(x+2-String(key).length/2), y+1)}

        drawBox(10, x, y, 5, 3)
}


// 0 to 9 is 048 to 57
// a to z is 097 to 122 (alphabetically!)
function menuInput(key) {
  num = key - 48; //this makes the num characters correct
    switch (menu) {
      case "main":
        switch (num) {
          case 0: menu = "newgame";break;
          case 1: menu = "keybinds";currentOption = "UP";break;
          case 2: menu = "textures";currentOption = 1;break;
          case 3: menu = "credits";break;
        }
        updateScreen();break;

      case "newgame":
        switch (num) {
            case 0: menu = "presetmap";break;
          case 1: menu = "randomizedmap";currentOption = "Width";width='';height='';break;
        }
        updateScreen();break;

      case "randomizedmap":
          if (key == 10) { // enter key
            switch (currentOption) {
                case "Width": currentOption = "Height";break;
                case "Height": currentOption = "DONE";break;
                //case "Wall Texture": currentOption = "DONE";break;
                case "DONE": gameState = "inMap";worldMap=mazeGenerator(width,height,1);
                            dirX=0;dirY=1;planeX=0.66;planeY=0;posX=1.5;posY=1.5;
                            keys[0] = {x:5,y:5,texture:10,wallX:6,wallY:6};makeKeys(keys);break;
            }}
          if (key == 8) { // backspace key
            switch (currentOption) {
                case "Width": if(width.length > 0) {width = width.slice(0, -1)};break;
                case "Height": if(height.length > 0) {height = height.slice(0, -1)};break;
                //case "Wall Texture": if(wallTexture.length > 0) {wallTexture = wallTexture.slice(0, -1)};break;
            }}
          if (num >= 0 && num <= 9) { // numbered key
            switch (currentOption) {
                case "Width": if(width.length < 3) {width+=num};break;
                case "Height": if(height.length < 3) {height+=num};break;
                //case "Wall Texture": if(wallTexture.length < 3) {wallTexture+=num};break;
            }}
        updateScreen();break;

      case "presetmap":
          if (num >= 0 && num < presetMaps.length) {
              var preset = presetMaps[num]
              worldMap = preset['worldMap']
              posX = preset['posX']
              posY = preset['posY']
              gameState = 'inGame'
          }
          updateScreen();break;

      case "textures":
        switch (key) {
          case keyBinds.UP: currentOption += 1;break; // up arrow
          case keyBinds.DOWN: currentOption -= 1;break; // down arrow
        }
        // value constraints
        if (currentOption <= 0) { currentOption = 1}
        if (currentOption > texture.length-1) { currentOption = texture.length-1}
        updateScreen();break;

      case "keybinds":
          switch (currentOption) {
            case "UP": keyBinds["UP"] = key;currentOption = "LEFT";break;
            case "LEFT": keyBinds["LEFT"] = key;currentOption = "DOWN";break;
            case "DOWN": keyBinds["DOWN"] = key;currentOption = "RIGHT";break;
            case "RIGHT": keyBinds["RIGHT"] = key;currentOption = "MAP";break;
            case "MAP": keyBinds["MAP"] = key;currentOption = "DONE";saveUserInfo();break;
        }
    }
}

function drawCenteredText(text, color, posY) {
  // screen goes from 0 to 55 so center is 27.5
  drawText(text, color, (27.5 - (text.length/2)), posY)
}

function makeKeys(keys) {
    for (i = 0; i < keys.length; i++) {
        let temp = {x:keys[i].x, y:keys[i].y, texture:keys[i].texture};
        keys[i].position = sprite.push(temp);
    }
}

list = {}
function onUpdate()
{

  //do nothing here, as updates only ever occur on an input :)
  if (gameState == "inGame") {

    // animations
    //time = Date.now() // faster than expected!
    //if (time ) {
    //    drawText(time,16,0,0)
    //}

    // ui
  }

  //debug info
  //angle = Math.atan2(dirY, dirX) / Math.PI * 360
  //drawText(Math.floor(angle), 17, 0, 0)

  //drawText(Math.floor(animTimer)%150, 17, 0, 0)
}

//maybe redo soon:tm:
/*
function moveBlock(tile,speed,delay,x1,y1,x2,y2) {

  if (animTimer % speed*2 == 0) { // every 2nd timer, make block texture 6, which is fullbright...
    worldMap[x1][y1] = 6;
    worldMap[x2][y2] = 6;
    updateScreen()
  }
  if (animTimer % speed*2 == delay) { // ...then, just after, move tile
    worldMap[x1][y1] = tile;
    worldMap[x2][y2] = 0;
    updateScreen()
  }

  if (animTimer % speed*2 == speed) {// every OTHER 2nd timer, make block texture 6, which is fullbright...
    worldMap[x1][y1] = 6;
    worldMap[x2][y2] = 6;
    updateScreen()
  }
  if (animTimer % speed*2 == speed+delay) { // ...then, just after, move tile
    worldMap[x1][y1] = 0;
    worldMap[x2][y2] = tile;
    updateScreen()
  }
}
*/

function raycastRender() {
  screenHeight = h
  screenWidth = w
  fillArea('█', 6, 0, 10, 56, 10) // floor
  fillArea('█', 1, 0, 0 , 56, 10) // celing

  // FLOOR RENDER
  // floorRenderer()

  // WALL RENDER
  for(x = 0; x < w; x++) {
      cameraX = 2 * x / w - 1; //x-coordinate in camera space
      rayDirX = dirX + planeX * cameraX;
      rayDirY = dirY + planeY * cameraX;


      //which box of the map we're in
      mapX = parseInt(posX);
      mapY = parseInt(posY);

      //length of ray from current position to next x or y-side
      let sideDistX;
      let sideDistY;

       //length of ray from one x or y-side to next x or y-side
      deltaDistX = Math.abs(1 / rayDirX);
      deltaDistY = Math.abs(1 / rayDirY);
      let perpWallDist;

      //what direction to step in x or y-direction (either +1 or -1)
      let stepX;
      let stepY;

      let hit = 0; //was there a wall hit?
      let side; //was a NS or a EW wall hit?


      //calculate step and initial sideDist
      if (rayDirX < 0)
      {
        stepX = -1;
        sideDistX = (posX - mapX) * deltaDistX;
      }
      else
      {
        stepX = 1;
        sideDistX = (mapX + 1.0 - posX) * deltaDistX;
      }
      if (rayDirY < 0)
      {
        stepY = -1;
        sideDistY = (posY - mapY) * deltaDistY;
      }
      else
      {
        stepY = 1;
        sideDistY = (mapY + 1.0 - posY) * deltaDistY;
      }


      //perform DDA
      while (hit == 0)
      {
        //jump to next map square, either in x-direction, or in y-direction
        if (sideDistX < sideDistY)
        {
          sideDistX += deltaDistX;
          mapX += stepX;
          side = 0;
        }
        else
        {
          sideDistY += deltaDistY;
          mapY += stepY;
          side = 1;
        }
        //Check if ray has hit a wall
        if (worldMap[mapX][mapY] > 0) hit = 1;
      }


      //Calculate distance projected on camera direction (Euclidean distance would give fisheye effect!)
      if(side == 0) perpWallDist = (sideDistX - deltaDistX);
      else          perpWallDist = (sideDistY - deltaDistY);


      //Calculate height of line to draw on screen
      lineHeight = parseInt((h / perpWallDist));

      //calculate lowest and highest pixel to fill in current stripe
      drawStart = -lineHeight / 2 + h / 2;
      if(drawStart < 0)drawStart = 0;
      drawEnd = lineHeight / 2 + h / 2;
      if(drawEnd >= h)drawEnd = h - 1;

      //texturing calculations
      texNum = worldMap[mapX][mapY];

      //calculate value of wallX
      let wallX; //where exactly the wall was hit
      if (side == 0) wallX = posY + perpWallDist * rayDirY;
      else           wallX = posX + perpWallDist * rayDirX;
      wallX -= Math.floor((wallX));

      //x coordinate on the texture
      texX = parseInt(wallX * texWidth);
      if(side == 0 && rayDirX > 0) texX = texWidth - texX - 1;
      if(side == 1 && rayDirY < 0) texX = texWidth - texX - 1;

      // How much to increase the texture coordinate per screen pixel
      step = 1.0 * texHeight / lineHeight;
      // Starting texture coordinate
      texPos = (drawStart - h / 2 + lineHeight / 2) * step;
      for(y = parseInt(drawStart); y<drawEnd; y++)
      {
        // Cast the texture coordinate to integer, and mask with (texHeight - 1) in case of overflow
        texY = parseInt(texPos);
        if (texY > (texHeight - 1)) {
          texY = texHeight -1;
        }
        if (isNaN(texY)) {texY = 0} // fix bug where crash on NaN

        texPos += step;
        character = texture[texNum]['texture'][texY][texX];
        color = parseInt(texture[texNum]['color'][texY][texX], 16) + 2; //parse color as base 16 so colors can fit into a one character space
        if(side == 1) color = color/1.3 // darken side of walls for ""lighting""
        drawText(character,color,x,y)
        //SET THE ZBUFFER FOR THE SPRITE CASTING
        ZBuffer[x] = perpWallDist; //perpendicular distance is used

    }
}
    numSprites = sprite.length
    //SPRITE RENDER
    //sort sprites from far to close
    for(i = 0; i < numSprites; i++)
    {
      spriteOrder[i] = i;
      spriteDistance[i] = ((posX - sprite[i].x) * (posX - sprite[i].x) + (posY - sprite[i].y) * (posY - sprite[i].y)); //sqrt not taken, unneeded
    }

    //TODO: MAKE THIS WORK NOW
    //sortSprites(spriteOrder, spriteDistance, numSprites);

    //after sorting the sprites, do the projection and draw them
    for(i = 0; i < numSprites; i++)
    {
      //translate sprite position to relative to camera
      spriteX = sprite[spriteOrder[i]].x - posX;
      spriteY = sprite[spriteOrder[i]].y - posY;

      //transform sprite with the inverse camera matrix
      // [ planeX   dirX ] -1                                       [ dirY      -dirX ]
      // [               ]       =  1/(planeX*dirY-dirX*planeY) *   [                 ]
      // [ planeY   dirY ]                                          [ -planeY  planeX ]

      invDet = 1.0 / (planeX * dirY - dirX * planeY); //required for correct matrix multiplication

      transformX = invDet * (dirY * spriteX - dirX * spriteY);
      transformY = invDet * (-planeY * spriteX + planeX * spriteY); //this is actually the depth inside the screen, that what Z is in 3D

      spriteScreenX = parseInt((w / 2) * (1 + transformX / transformY));

      //calculate height of the sprite on screen
      spriteHeight = Math.abs(parseInt(h / (transformY))); //using 'transformY' instead of the real distance prevents fisheye
      //calculate lowest and highest pixel to fill in current stripe
      drawStartY = parseInt(-spriteHeight / 2 + h / 2);
      if(drawStartY < 0) {drawStartY = 0};
      drawEndY = parseInt(spriteHeight / 2 + h / 2)+1; // textures were drawing unevenly, this is the bad fix :)
      if(drawEndY >= h) {drawEndY = h - 1};

      //calculate width of the sprite
      spriteWidth = Math.abs( parseInt(h / (transformY)));
      drawStartX = parseInt(-spriteWidth / 2 + spriteScreenX);
      if(drawStartX < 0) {drawStartX = 0};
      drawEndX = parseInt(spriteWidth / 2 + spriteScreenX)+1; // textures were drawing unevenly, this is the bad fix :)
      if(drawEndX >= w) {drawEndX = w - 1};

      //loop through every vertical stripe of the sprite on screen
      for(stripe = drawStartX; stripe < drawEndX; stripe++)
      {
        texX = parseInt((stripe - (-spriteWidth / 2 + spriteScreenX)) * texWidth / spriteWidth);
        //the conditions in the if are:
        //1) it's in front of camera plane so you don't see things behind you
        //2) it's on the screen (left)
        //3) it's on the screen (right)
        //4) ZBuffer, with perpendicular distance
        if(transformY > 0 && stripe > 0 && stripe < w && transformY < ZBuffer[stripe])
        for(y = drawStartY; y < drawEndY; y++) //for every pixel of the current stripe
        {
          d = parseInt(y * 256 - h * 128 + spriteHeight * 128); //256 and 128 factors to avoid floats
          texY = parseInt(((d * texHeight) / spriteHeight) / 256);

          if (texX < 0) {texX = 0}
          if (texX >= texWidth) {texX = texWidth-1}
          if (texY < 0) {texY = 0}
          if (texY >= texWidth) {texY = texWidth-1}

          texNum =sprite[spriteOrder[i]].texture
        character = texture[texNum]['texture'][texY][texX];
        color = parseInt(texture[texNum]['color'][texY][texX], 16) + 2; //parse color as base 16 so colors can fit into a one character space
        if (color != 2) {
            drawText(character,color,stripe,y)
           }
        }
      }
    }
}

function onInput(key)
{
    if (key == 27) { // if esc is pressed
      gameState = "inMenu";
      menu = "main"
    }

    if (key == keyBinds.MAP) { // if map button is pressed
      switch(gameState) {
        case "inMap":
          gameState = "inGame";
          break;
        case "inGame":
          gameState = "inMap"
          break;
      }
    }

    if (gameState == "inGame") {
      gameInputs(key)
    }
    if (gameState == "inMenu") {
      menuInput(key)
    }

  updateScreen()
}

function gameInputs(key) {
  if (key == keyBinds.UP) // up arrow
    {
      if(worldMap[parseInt(posX + dirX * moveSpeed)][parseInt(posY)] == false) posX += dirX * moveSpeed;
      if(worldMap[parseInt(posX)][parseInt(posY + dirY * moveSpeed)] == false) posY += dirY * moveSpeed;
    }
    //move backwards if no wall behind you
    if (key == keyBinds.DOWN) // down arrow
    {
      if(worldMap[parseInt(posX - dirX * moveSpeed)][parseInt(posY)] == false) posX -= dirX * moveSpeed;
      if(worldMap[parseInt(posX)][parseInt(posY - dirY * moveSpeed)] == false) posY -= dirY * moveSpeed;
    }
    //rotate to the right
    if (key == keyBinds.RIGHT) // right arrow
    {
      //both camera direction and camera plane must be rotated
      oldDirX = dirX;
      dirX = dirX * Math.cos(-rotSpeed) - dirY * Math.sin(-rotSpeed);
      dirY = oldDirX * Math.sin(-rotSpeed) + dirY * Math.cos(-rotSpeed);
      oldPlaneX = planeX;
      planeX = planeX * Math.cos(-rotSpeed) - planeY * Math.sin(-rotSpeed);
      planeY = oldPlaneX * Math.sin(-rotSpeed) + planeY * Math.cos(-rotSpeed);
    }
    //rotate to the left
    if (key == keyBinds.LEFT) // left arrow
    {
      //both camera direction and camera plane must be rotated
      oldDirX = dirX;
      dirX = dirX * Math.cos(rotSpeed) - dirY * Math.sin(rotSpeed);
      dirY = oldDirX * Math.sin(rotSpeed) + dirY * Math.cos(rotSpeed);
      oldPlaneX = planeX;
      planeX = planeX * Math.cos(rotSpeed) - planeY * Math.sin(rotSpeed);
      planeY = oldPlaneX * Math.sin(rotSpeed) + planeY * Math.cos(rotSpeed);
    }
}

function mapView() {
  for (var x = 0; x < worldMap.length; x++) {
    for (var y = 0; y < worldMap[x].length; y++) {
      tile = worldMap[x][y]
      switch(tile)
      {
        case 0:  color = 0; break;
        case 1:  color = 16;  break;
        case 2:  color = 15;  break;
        case 3:  color = 14;   break;
        case 4:  color = 13;  break;
        default: color = 12; break;
      }
      drawText(tile, color, Math.floor(y-posY+28), Math.floor(x-posX+8));
  }
  }
  drawText('☻', 17, 27, 7);

  // Math.floor(x*100)/100 rounds to 2 decimal places
  drawText(String(Math.floor(posX*100)/100), 17, 2, 2)
  drawText(String(Math.floor(posY*100)/100), 17, 2, 3)

  drawText(String(Math.floor(dirX*100)/100), 17, 2, 5)
  drawText(String(Math.floor(dirY*100)/100), 17, 2, 6)

  drawText(String(Math.floor(planeX*100)/100), 17, 2, 8)
  drawText(String(Math.floor(planeY*100)/100), 17, 2, 9)
}

function updateScreen() {
  clearScreen();
  frameCount += 1;
  w = 56;
  h = 21;
  if (gameState == "inGame") {raycastRender();} // if inGame, render the game
  if (gameState == "inMap") {mapView();} // if inMap, render the map
  if (gameState == "inMenu") {menuView(menu);} // if inMenu, render the current menu
  //TODO: make a minimap
  }

function saveUserInfo() {
  let data = {};
  data.keyBinds = JSON.stringify(keyBinds)
  saveData(JSON.stringify(data))
}

function loadUserInfo() {
    let data = loadData();
    if (data === "") {
        return 0;
    } else {
        data = JSON.parse(data);
        keyBinds = JSON.parse(data.keyBinds);
    }
}



//
// MAZE GENERATOR
// BASED OFF CODE BY JAMIS BUCK
// http://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
//

// used in maze generation
DX = {E:1,W:-1,N:0,S:0}
DY = {E:0,W:0,N:-1,S:1}
OPPOSITE = {E:"W",W:"E",N:"S",S:"N"}

function mazeGenerator(width,height,wall) {
    width = parseInt(width);height = parseInt(height);wall=parseInt(wall)
    // make empty grid
    grid = [];
      for (i = 0; i < height; i++) {
        temp = []
        for (v = 0; v < width; v++) {
            array = []
            temp.push(array)
        }
        grid.push(temp);
    }


    // make maze
    // start in center
    grid = carve_passage_from(0,0,grid,width, height)

    // make grid in my style
    gameGrid = [];
    for (y = 0; y <= height*2; y++) {
        temp = []
        for (x = 0; x < width*2; x++) {

            if (x % 2 == 1 & y % 2 == 1) {// every other tile (x and y) = wall
                temp[x] = 0

            } else {temp[x] = wall} // all other tiles = empty

            if (y == 0 | y == height*2) { // if top row or bottom row, tile = wall
                temp[x] = wall;
            }
            }
        temp[0] = wall; //left edge = wall
        temp[width*2] = wall; //right edge = wall
        gameGrid.push(temp);
        }

    // make gameGrid into maze using grid
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            for (i = 0; i < grid[y][x].length; i++) {
                direction = grid[y][x][i]
                var nx = x*2 + DX[direction] + 1
                var ny = y*2 + DY[direction] + 1
                gameGrid[ny][nx] = 0
            }
        }
    }
    return gameGrid
}

function carve_passage_from(cx, cy, grid,width, height) {
    var directions = shuffle(["N","S","E","W"]);
    for (var i = 0; i < 4; i++) { // repeat for mazeGeneratorall directions
        var direction = directions[i]

        var nx = cx + DX[direction]
        var ny = cy + DY[direction]

        // if within borders and if the tile is empty
        if ((nx >= 0 && nx < width) && (ny >= 0 && ny < height) && (grid[ny][nx] == "")) {
            grid[cy][cx].push(direction)
            grid[ny][nx].push(OPPOSITE[direction])
            carve_passage_from(nx, ny, grid,width, height)
        }
    }
    return grid;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp
  }

  return array;
}

