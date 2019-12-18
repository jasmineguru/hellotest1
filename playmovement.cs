using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playermovement : MonoBehaviour
{
    public float speed;
    public float jumpforce;
    private Rigidbody rb;

    // Start is called before the first frame update
    void Start() {
        
        rb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update(){
        Vector3 input = new Vector3(Input.GetAxis("Horizontal") * speed * time.deltaTime, 0, Input.GetAxis("vertical") * speed * time.deltaTime, 0);
        rb.movePosition(Transform.position + input);
    }
}
