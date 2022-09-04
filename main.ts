function loadNewCol2 () {
    tiles.setCurrentTilemap(tilemap`level1`)
    xInMap += 1
    if (xInMap > 0) {
        x.push(Math.constrain(y + rng.randomRange(-2, 2), 3, tilemapHeight))
    }
    for (let x3 = 0; x3 <= 14; x3++) {
        y = x[x3 + xInMap]
        tiles.setTileAt(tiles.getTileLocation(x3, y), sprites.castle.tileGrass2)
        for (let index = 0; index <= tilemapHeight - y; index++) {
            tiles.setTileAt(tiles.getTileLocation(x3, y + index), sprites.castle.tileGrass2)
        }
    }
}
function loadNewCol () {
    tiles.setCurrentTilemap(tilemap`level1`)
    xInMap += -1
    if (xInMap < 0) {
        x2.push(Math.constrain(y + rng.randomRange(-2, 2), 3, tilemapHeight))
    }
    for (let x3 = 0; x3 <= 14; x3++) {
        y = x[x3 + xInMap]
        tiles.setTileAt(tiles.getTileLocation(x3, y), sprites.castle.tileGrass2)
        for (let index = 0; index <= tilemapHeight - y; index++) {
            tiles.setTileAt(tiles.getTileLocation(x3, y + index), sprites.castle.tileGrass2)
        }
    }
}
let xInMap = 0
let y = 0
let rng: FastRandomBlocks = null
let x2: number[] = []
let x: number[] = []
let tilemapHeight = 0
tilemapHeight = 31
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 300, 300)
scene.cameraFollowSprite(mySprite)
x = []
x2 = []
rng = Random.createRNG(randint(0, 99999999999999))
y = 6
for (let x3 = 0; x3 <= 14; x3++) {
    x.push(Math.constrain(y + rng.randomRange(-2, 2), 3, tilemapHeight))
    y = x[x3]
    tiles.setTileAt(tiles.getTileLocation(x3, y), sprites.castle.tileGrass2)
    for (let index = 0; index <= tilemapHeight - y; index++) {
        tiles.setTileAt(tiles.getTileLocation(x3, y + index), sprites.castle.tileGrass2)
    }
}
xInMap = 0
game.onUpdate(function () {
    info.setScore(xInMap)
    if (scene.cameraProperty(CameraProperty.X) > 128) {
        mySprite.x += -16
        loadNewCol2()
    }
    if (scene.cameraProperty(CameraProperty.X) < 96) {
        mySprite.x += 16
        loadNewCol()
    }
})
