#pragma strict
private var speed : float = 1;

function Start () {
//	player = GameObject.Find("Player"); 

	Destroy (gameObject, 15);

}

function FixedUpdate () {

	transform.Translate(Vector2(0,speed) * Time.deltaTime );
}


