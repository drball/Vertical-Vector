#pragma strict
private var speed : float = 1;

function Start () {
//	player = GameObject.Find("Player"); 

}

function Update () {

	transform.Translate(Vector2(0,speed) * Time.deltaTime );
}


