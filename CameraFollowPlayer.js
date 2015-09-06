#pragma strict

private var playerObject : GameObject;
//var minY : float = -100;
//var maxY : float;
var Yoffset : float = 4;

function Start () {
	playerObject = GameObject.Find("Player"); 
	
	var pos : Vector3 = transform.position;
    //pos.y = Mathf.Clamp(playerObject.transform.position.y, minY, maxY) + 2.5;
    pos.y = playerObject.transform.position.y + Yoffset;
    pos.z = -10;
    transform.position = pos;
}

function FixedUpdate () {


//	transform.position.y = playerObject.transform.position.y + 2.5;
//	transform.position.z = -10;
	

	var pos : Vector3 = transform.position;
    //pos.y = Mathf.Clamp(playerObject.transform.position.y, minY, maxY) + 2.5;
    pos.y = playerObject.transform.position.y + Yoffset;
    pos.z = -10;
    transform.position = pos;
}


