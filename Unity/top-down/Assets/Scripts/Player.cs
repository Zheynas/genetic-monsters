using UnityEngine;
using System.Collections;

public class Player : Entity {

	private int level;
	private float currentLevelExperience;
	private float experienceToLevel;

	void Start(){
		LevelUp ();
	}

	public void AddExperience(float exp){
		currentLevelExperience += exp;
		if (currentLevelExperience >= experienceToLevel) {
			currentLevelExperience -= experienceToLevel;
			LevelUp ();
		}

		Debug.Log ("EXP: " + currentLevelExperience + "   Level: " + level);
	}


	private void LevelUp(){
		level++;
		experienceToLevel = level * 50 + Mathf.Pow(level *2,2);

		AddExperience(0);
	}



}
