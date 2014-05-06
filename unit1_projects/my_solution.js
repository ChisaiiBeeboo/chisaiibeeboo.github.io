// RESCUE MISSION

// remove move right 1x on line 6
// move up x1
// move right 2x
// move down x1
// ATTACK!
// 
// 

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// GRAB THE MUSHROOM

// move up 1x
// move right 1x
// move left 1x
// move up 1x
// Attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// DRINK ME

// move right
// ATTACK
// move right
// move down
// move up
// move right
// ATTACK

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// TAUNT THE GUARDS

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Get ready !");
this.say("Attack!");
this.say("Attack!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.say("Follow ME.");
this.moveRight();

// IT'S A TRAP

this.moveDown();
this.moveDown();
this.say("hey you");
this.moveUp();
this.moveUp();

// BREAK THE PRISON

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Brack" && "Gort")
    return false;
if(name === "MARCUS")
    return false;

return true;

// TAUNT







