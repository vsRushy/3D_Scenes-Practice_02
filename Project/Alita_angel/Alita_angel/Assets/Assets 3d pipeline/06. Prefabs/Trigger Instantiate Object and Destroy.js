var modelo : Transform;

function OnTriggerEnter( hit : Collider ) 
{
	if(hit.gameObject.tag == "Player")
	{
	Instantiate(modelo, gameObject.transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
}