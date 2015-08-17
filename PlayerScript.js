#pragma strict
private var speed : float = 1;
private var player : GameObject;
var maxSpeed : float = 10;

function Start () {
	player = GameObject.Find("Player"); 

}

function Update () {

	transform.Translate(Vector2(0,speed) * Time.deltaTime );


}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Helper")
	{
		Debug.Log("player hit a helper");
		//speed = -speed;
		transform.rotation = other.transform.rotation;
	
		return;
	}
	Debug.Log("Have hit "+other.name);
}

