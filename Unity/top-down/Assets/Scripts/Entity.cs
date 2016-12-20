using UnityEngine;
using System.Collections;

public class Entity : MonoBehaviour {

	public float health;
	public float speed;
	public float damage;


	// Because all things are going to use this class - some might respond in a different way
	public virtual void TakeDamage(float dmg){
		health -= dmg;

		if (health <= 0) {
			Die ();
		}
	}

	public virtual void Die(){

		Destroy (gameObject);
	}


}
