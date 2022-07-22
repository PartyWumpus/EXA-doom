// by PartyWumpus, feel free to modify :D
// most of the code from lodev.org/cgtutor/raycasting.html
function getName()
{
    return 'EXA DOOM';
}
version = "v2.0"

let worldMap =
[
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,1,1,0,2,2,0,3,3,0,4,4,0,5,5,0,0,0,0,1],
  [1,0,0,0,0,1,1,0,2,2,0,3,3,0,4,4,0,5,5,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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
];

texWidth = 8;
texHeight = 8;
//texture 0 does not exist as it is empty tile
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
"CCCCCCCC",
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
"████████",
"████████",
"████████",
"████████",
"████████",
"████████",
"████████"
],
color:[
"55557777",
"55557777",
"55557777",
"55557777",
"77775555",
"77775555",
"77775555",
"77775555"
]
}


function onConnect()
{
  // default values
  startPos = [22, 12];
  posX = startPos[0], posY = startPos[1];
  dirX = 0, dirY = 1
  planeX = 0.66, planeY = 0;

  frameCount = 0;
  moveSpeed = 0.5;
  rotSpeed = 0.2;
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

currentTexture = 1;
currentKeybind = "UP";
function menuView() {
  // draw titleArt
  for (var i = 0; i < titleArt.length; i+=2) {
    drawText(titleArt[i], titleArt[i+1],0, 0+i/2)
  }
  drawText("[Esc] Back", 17, 44, 8)
  switch (menu) {
    case "main":
      menuOptions = ["Play Game","Keybinds","Textures","Credits"]
      for (var i = 0; i < menuOptions.length; i++) {
        drawText(menuOptions[i], 15, 10, (titleArt.length/2 + 1)+i*2)
        drawText("["+i+"]", 17, 6, (titleArt.length/2 + 1)+i*2)
      }
      drawText("             ", 17, 44, 8) // hide [esc] quit
      break;

    case "keybinds":
        if (currentKeybind != "") {
          drawCenteredText("Currently binding: "+currentKeybind, 17, 15)
          drawCenteredText("Press key to set bind", 15, 16)
        } else {
          drawCenteredText("Binds Set."+currentKeybind, 17, 15)
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
          character = texture[currentTexture]['texture'][y][x];
          color = parseInt(texture[currentTexture]['color'][y][x], 16) + 2;
          drawText(character,color,x+16,y+9)
          drawText(character,color,x+30,y+9)
        }
      }
      drawBox(10, 25, 11, 4, 3) // texture value box
      drawText("00", 5, 26, 12)
      drawText("UP", 14, 26, 10)
      drawText("DOWN", 14, 25, 14)
      drawText(currentTexture, 16, 28-String(currentTexture).length, 12)
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
          case 0: gameState = "inGame";break;
          case 1: menu = "keybinds";currentKeybind = "UP";break;
          case 2: menu = "textures";break;
          case 3: menu = "credits";break;
        }
        updateScreen();break;

      case "textures":
        switch (key) {
          case 17: currentTexture += 1;break; // up arrow
          case 18: currentTexture -= 1;break; // down arrow
        }
        if (currentTexture <= 0) { currentTexture = 1}
        if (currentTexture > texture.length-1) { currentTexture = texture.length-1}
        updateScreen();break;

      case "keybinds":
          switch (currentKeybind) {
            case "UP": keyBinds["UP"] = key;currentKeybind = "LEFT";break;
            case "LEFT": keyBinds["LEFT"] = key;currentKeybind = "DOWN";break;
            case "DOWN": keyBinds["DOWN"] = key;currentKeybind = "RIGHT";break;
            case "RIGHT": keyBinds["RIGHT"] = key;currentKeybind = "MAP";break;
            case "MAP": keyBinds["MAP"] = key;currentKeybind = "";saveUserInfo();break;
        }
    }
}

function drawCenteredText(text, color, posY) {
  // screen goes from 0 to 55 so center is 27.5
  drawText(text, color, (27.5 - (text.length/2)), posY)
}

function onUpdate()
{

  //do nothing here, as updates only ever occur on an input :)
  if (gameState == "inGame") {

    // animations
    animTimer += 0.5;
    moveBlock('5',150,25, 21,14,19,14)

    // ui

  }

  //debug info
  //angle = Math.atan2(dirY, dirX) / Math.PI * 360
  //drawText(Math.floor(angle), 17, 0, 0)

  //drawText(Math.floor(animTimer)%150, 17, 0, 0)
  //drawText(JSON.stringify(data), 17, 0, 0)

}

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
      drawText(tile, color, y-posY+28, x-posX+8);
  }
  }
  drawText('☻', 17, 28, 8);

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
  if (gameState == "inGame") {raycastRender();} // if inGame, render the game (wow)
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

// doesn't look very good, i think i've done something wrong.
// kind of hard to tell though :(
/*
function floorRenderer() {
for(y = 0; y < h; y++)
    {
      // rayDir for leftmost ray (x = 0) and rightmost ray (x = w)
      rayDirX0 = dirX - planeX;
      rayDirY0 = dirY - planeY;
      rayDirX1 = dirX + planeX;
      rayDirY1 = dirY + planeY;

      // Current y position compared to the center of the screen (the horizon)
      p = parseInt(y - screenHeight / 2);

      // Vertical position of the camera.
      posZ = 0.5 * screenHeight;

      // Horizontal distance from the camera to the floor for the current row.
      // 0.5 is the z position exactly in the middle between floor and ceiling.
      rowDistance = posZ / p;

      // calculate the real world step vector we have to add for each x (parallel to camera plane)
      // adding step by step avoids multiplications with a weight in the inner loop
      floorStepX = rowDistance * (rayDirX1 - rayDirX0) / screenWidth;
      floorStepY = rowDistance * (rayDirY1 - rayDirY0) / screenWidth;

      // real world coordinates of the leftmost column. This will be updated as we step to the right.
      floorX = posX + rowDistance * rayDirX0;
      floorY = posY + rowDistance * rayDirY0;

      for(x = 0; x < screenWidth; ++x)
      {
        // the cell coord is simply got from the integer parts of floorX and floorY
        cellX = parseInt(floorX);
        cellY = parseInt(floorY);

        // get the texture coordinate from the fractional part
        tx = parseInt(texWidth * (floorX - cellX));
        if (isNaN(tx)) {tx = 0} // fix bug where crash on NaN
        if (tx > texWidth-1) {tx = texWidth-1} // avoid overflow
        if (tx < 0) { tx = 0 }// avoid underflow

        ty = parseInt(texHeight * (floorY - cellY));
        if (isNaN(ty)) {ty = 0} // fix bug where crash on NaN
        if (ty > texHeight-1) {ty = texHeight-1}// avoid overflow
        if (ty < 0) { ty = 0 }// avoid underflow


        floorX += floorStepX;
        floorY += floorStepY;

        // choose texture and draw the pixel
        floorTexture = 7;
        ceilingTexture = 6;

        character = texture[floorTexture]['texture'][ty][tx];
        color = parseInt(texture[floorTexture]['color'][ty][tx], 16) + 2; //parse color as base 16 so colors can fit into a one character space
        //color = 3
        //if (ty > texHeight) { color = 17 }
        drawText(character,color,x,y)


        //ceiling (symmetrical, at screenHeight - y - 1 instead of y)
        //color = texture[ceilingTexture][texWidth * ty + tx];
        //color = (color >> 1) & 8355711; // make a bit darker
        //buffer[screenHeight - y - 1][x] = color;
      }
    }
}
*/
