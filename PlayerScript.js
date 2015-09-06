#pragma strict
private var speed : float = 16;
private var player : GameObject;
var maxSpeed : float = 20;

function Start () {
	player = GameObject.Find("Player"); 

}

function Update () {

	//transform.Translate(Vector2(0,speed) * Time.deltaTime );
	
	//transform.GetComponent.<Rigidbody>.AddRelativeForce (Vector2.up * speed);

	
}

function FixedUpdate(){
	GetComponent.<Rigidbody2D>().AddRelativeForce (Vector2.up * speed );
	
	if (GetComponent.<Rigidbody2D>().velocity.magnitude > maxSpeed){
    	GetComponent.<Rigidbody2D>().velocity = GetComponent.<Rigidbody2D>().velocity.normalized * maxSpeed;
	}
}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Helper")
	{
		Debug.Log("player hit a helper");
		//speed = -speed;
		transform.rotation = other.transform.rotation;
	
		return;
	} else if(other.tag == "Enemy"){
	
		//-bad
	
	} 
	
	
	Debug.Log("Have hit "+other.name);
}

