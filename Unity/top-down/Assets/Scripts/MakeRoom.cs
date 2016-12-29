using UnityEngine;
using System.Collections.Generic;

public class MakeRoom : MonoBehaviour {

	public Transform onlyTop;
	public Transform onlyBottom;
	public Transform onlyLeft;
	public Transform onlyRight;
	public Transform sides;
	public Transform topBottom;
	public Transform topLeft;
	public Transform topRight;
	public Transform bottomLeft;
	public Transform bottomRight;
	public Transform noLeft;
	public Transform noRight;
	public Transform noTop;
	public Transform noBottom;
	public Transform allSides;
	public Transform player;
	public Transform camera;
	public Transform SO_01;

	private int block = -30;

	List<List<List<int>>> roomList = new List<List<List<int>>>();
	List<List<int>> chosenChain = new List<List<int>>();
	List<List<int>> matrixList = new List<List<int>>();
	List<Room> roomObjects = new List<Room> ();
	int matrixSize = 20;
	int minSizeChain = 12;


	// Creates initial matrix and populates with 0's
	void createMatrix(){
		
		for (int i = 0; i < matrixSize; i++)
		{
			List<int> sublist = new List<int>();
			for (int v = 0; v < matrixSize; v++)
			{
				sublist.Add(0);
			}
			matrixList.Add(sublist);
		}
	}
		
	// Changes matrix randomly to create chains of rooms (1's)
	void changeMatrix(){
		for (int i = 1; i < matrixSize - 1; i++) {
			for (int j = 1; j < matrixSize - 1; j++) {
				if (matrixList [i] [j] == 0) {
					int rInt = Random.Range(0,3);
					//int rInt = 0;
					if (rInt == 0) {
						matrixList [i] [j] = 1;
					}
				}
			}
		}
	}

	// Takes co-ordinates and makes them into a room list
	List<int> roomArrayCreator(int i, int j){
		
		List<int> room = new List<int> ();
		room.Add (i); room.Add (j);
		return room;
	}

	// Creates room arrays which hold info about each point and their neighbours
	void createRooms(){
		
		for (int i = 1; i < matrixSize - 1; i++) {
			for (int j = 1; j < matrixSize - 1; j++) {
				if (matrixList [i] [j] == 1) {
					List<List<int>> rooms = new List<List<int>> ();
		
					rooms.Add (roomArrayCreator(i,j));

					if (matrixList [i - 1] [j] == 1) {
					rooms.Add (roomArrayCreator(i-1,j));
					}
					if (matrixList [i + 1] [j] == 1) {
						rooms.Add (roomArrayCreator(i+1,j));
					}
					if (matrixList [i] [j+1] == 1) {
						rooms.Add (roomArrayCreator(i,j+1));
					}
					if (matrixList [i] [j-1] == 1) {
						rooms.Add (roomArrayCreator(i,j-1));
					}
					roomList.Add (rooms);
				}
			}
		}
	}

	// Checks if there is overlap between two arrays [ [1,2],[2,3], ... ] - type
	bool checkOverlap(List<List<int>> array1 , List<List<int>> array2){
		for (int i = 0; i < array1.Count; i++) {
			for (int j = 0; j < array2.Count; j++) {
				if (array1 [i] [0] == array2 [j] [0] && array1 [i] [1] == array2 [j] [1]) {
					return true;
				}
			}
		}
		return false;
	}
		
	// Checks if a single room [i,j] is in an array [ [1,2],[2,3], ... ]
	bool checkDuplicates(List<List<int>> array , List<int> room){
		for (int i = 0; i < array.Count; i++) {
			if (array [i] [0] == room [0] && array [i] [1] == room [1]) {
				return true;
			}
		}
		return false;
	}
		
	// rooms is an array of rooms - [ [1,2] , [1,3], ... ]
	// Takes a room and removes duplicates
	List<List<int>> removeDuplicates(List<List<int>> rooms){
		
		List<List<int>> uniqueArray = new List<List<int>> ();

		uniqueArray.Add (roomArrayCreator (rooms [0] [0], rooms [0] [1]));

		for (int i = 1; i < rooms.Count; i++) {
			bool duplicateCheck = checkDuplicates (uniqueArray, rooms [i]);
			if(duplicateCheck == false){
				uniqueArray.Add(rooms[i]);
			}
		}
		return uniqueArray;
	}

	// Merges two chains together 
	List<List<int>> mergeRooms (List<List<int>> array1, List<List<int>> array2){
		for (int i = 0; i < array2.Count; i++) {
			array1.Add(roomArrayCreator(array2[i][0],array2[i][1]));
		}
		return array1;	
	}

	void combineRooms(){
		int v = roomList.Count;

		for (int a = 0; a < v; a++) {
			for (int b = 0; b < v; b++) {
				if (a != b && a < v) {
					bool overlapCheck = checkOverlap (roomList [a], roomList [b]);
					if (overlapCheck == true) {
						roomList [b] = mergeRooms (roomList [b], roomList [a]);
						roomList.RemoveAt (a);

						v = roomList.Count;
					}
				}
				v = roomList.Count;
			}
			v = roomList.Count;
		}
		for (int c = 0; c < roomList.Count; c++) {
			roomList [c] = removeDuplicates (roomList [c]);
		}
	}

	void creation(){

		changeMatrix ();
		createRooms ();
		combineRooms ();
		sortChains ();
		
	}

	void sortChains(){

		for (int i = 0; i < roomList.Count; i++) {
			if (roomList[i].Count > minSizeChain) {
				chosenChain = roomList [i];
				break;
			}
		}
		if (chosenChain.Count == 0) {
			Debug.Log ("Go again");
			creation ();
		} else {
			convertRooms ();
			roomType ();
		}
	}

	void convertRooms(){
		for (int j = 0; j < chosenChain.Count; j++) {

			List<int> up = roomArrayCreator (0, 0); List<int> down = roomArrayCreator (0, 0); List<int> left = roomArrayCreator (0, 0); List<int> right = roomArrayCreator (0, 0);
			int x = chosenChain [j][0]; int y = chosenChain [j] [1];
			List<int> self = roomArrayCreator (x,y);

			if( checkDuplicates(chosenChain, roomArrayCreator (x , y-1) ) == true){
				left = roomArrayCreator (x , y-1);
			}
			if( checkDuplicates(chosenChain, roomArrayCreator(x,y+1)) == true){
				right = roomArrayCreator (x , y+1);
			}
			if( checkDuplicates(chosenChain, roomArrayCreator(x-1,y)) == true){
				up = roomArrayCreator (x-1, y);
			}
			if( checkDuplicates(chosenChain, roomArrayCreator(x+1,y)) == true){
				down = roomArrayCreator (x+1, y );
			}
			Room room = new Room (self,up,down,left,right);
			roomObjects.Add (room);
		}
	}

	bool checkIfExists (List<int> coord){
		if (coord [0] == 0 && coord [1] == 0) {
			return false;
		} else {
			return true;
		}
	}

	void roomType(){
		for (int i = 0; i < roomObjects.Count; i++) {
			Room room = roomObjects [i];
			bool up = checkIfExists(room.up) ; bool down = checkIfExists(room.down); bool left = checkIfExists(room.left); bool right = checkIfExists(room.right);
			int y = room.self[0]; int x = -room.self[1];

			if (i == 0) {
				Instantiate(player, new Vector3(x*block, 0, y*block), Quaternion.identity);
				Instantiate(camera, new Vector3(0, 25, 0), Quaternion.Euler(90, 0, 0));
			}

			if (up == true && down == true && left == true && right == true) {
				Instantiate(allSides, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == false && left == false && right == false) {
				Instantiate(onlyTop, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == true && left == false && right == false) {
				Instantiate(onlyBottom, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == false && left == true && right == false) {
				Instantiate(onlyLeft, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == false && left == false && right == true) {
				Instantiate(onlyRight, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == true && left == false && right == false) {
				Instantiate(topBottom, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == false && left == true && right == false) {
				Instantiate(topLeft, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == false && left == false && right == true) {
				Instantiate(topRight, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == true && left == true && right == false) {
				Instantiate(bottomLeft, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == true && left == false && right == true) {
				Instantiate(bottomRight, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == true && left == false && right == true) {
				Instantiate(noLeft, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == true && left == true && right == false) {
				Instantiate(noRight, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == true && left == true && right == true) {
				Instantiate(noTop, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == true && down == false && left == true && right == true) {
				Instantiate(noBottom, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}
			if (up == false && down == false && left == true && right == true) {
				Instantiate(SO_01, new Vector3(x*block, 0, y*block), Quaternion.identity);
			}

		}
	}
	void Start () {

		createMatrix ();
		creation ();
	}
}

public class Room{

	public List<int> self;
	public List<int> up;
	public List<int> down;
	public List<int> left;
	public List<int> right;
	public Room(List<int> self, List<int> up, List<int> down, List<int> left, List<int> right)
	{
		this.self = self;
		this.up = up;
		this.down = down;
		this.left = left;
		this.right = right;

	}
}
