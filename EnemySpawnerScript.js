#pragma strict
var spawnInterval:float = 1.5;
var enemyType : GameObject;
var startDelay : float = 0;

private var nextSpawn:float = 0;
private var spawnFrom : GameObject;
private var bg : GameObject;

 
function Start () {
	spawnFrom = transform.Find("SpawnFrom").gameObject; //--find child object
	
	if (startDelay > 0) {
		nextSpawn = nextSpawn + startDelay;
	}
	
	//--hide bg 
	transform.Find("bg").gameObject.GetComponent.<Renderer>().enabled = false;
}


function Update() {

	

	if(Time.time > nextSpawn)
	{
		nextSpawn = Time.time + spawnInterval;

		//--spawn new enemy       
		var enemyInstance : GameObject = Instantiate(enemyType,
				Vector2(spawnFrom.transform.position.x,spawnFrom.transform.position.y), 
				transform.rotation);
	}


}


