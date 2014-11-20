load("readline.js");
load("Finch.js");

var finch = new Finch();


//finch.setWheelPower ( 100, 100 )
//Thread.sleep( 5000 );
//finch.setWheelPower( 0, 0 );
//Thread.sleep( 1000000 );

var i = 0;
var traveled = 0.0;  // in inches.
while ( traveled < 100.0 ) {

var accel = finch.getAccelerations();
var obst = finch.getObstacleSensors();


    if ( obst.left == true || obst.right == true ) {
        print ( "Detected Obstacle" );
        turn( );
        traveled += 15.0;
    } else if ( obst.left == false && obst.right == false ) {
    	print ( "Forward" );
    	finch.setWheelPower ( 100, 100 );
    }

    Thread.sleep( 100 );
    traveled += 0.60;

    if  ( traveled > 98.0 ) {
    	print( "BREAKING" );
    	finch.setWheelPower ( 0, 0 );
    	break;
    }

    print( "traveled = " + traveled + "." );
    i = i+1;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function r2d2( ) {
	var j = 0;
	while ( j < 10 ) {
		rn = Math.floor( getRandomArbitrary( 1000, 5000 ) );
		variation = Math.floor( getRandomArbitrary( 90, 110 ) );

	    print( "random number: " + rn );
		finch.playTone(rn, variation);
		Thread.sleep(variation);
		j++;
	}
}

//
function turn( ) {
	    // stop for 0.5 seconds 
        finch.setWheelPower( 0, 0 );
        r2d2();
        Thread.sleep( 500 );

        // turn left for some seconds.
        finch.setWheelPower( -50, 50 );
        Thread.sleep( 2000 );

        	finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );

        // go forward for some seconds.
        finch.setWheelPower( 100, 100 );
        Thread.sleep( 3000 );

            finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );

        // turn right for some seconds.
        finch.setWheelPower( 50, -50 );
        Thread.sleep( 2000 );

        	finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );

        // go forward for some seconds.
        finch.setWheelPower( 100, 100 );
        Thread.sleep( 3000 );

        	finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );

        // turn right for some seconds.
        finch.setWheelPower( 50, -50 );
        Thread.sleep( 2000 );

        	finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );

        // go forward for some seconds.
        finch.setWheelPower( 100, 100 );
        Thread.sleep( 3000 );

        	finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );

        // turn left for some seconds.
        finch.setWheelPower( -50, 50 );
        Thread.sleep( 2500 );

        	finch.setWheelPower( 0, 0 );
        	Thread.sleep( 100 );
}