// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

var postcount = 0
function setupFunction() {
    
    var top = document.getElementById("top");
    var button = document.getElementsByTagName ("button");
    button[0].onclick = postFunction;
    button[1].onclick = clearFunction;
    top.textContent = "Welcome to the form";
   
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0


function postFunction() {
        let message = document.getElementById("message").value;
    if (postcount == 0) {
        document.getElementById("topic").textContent = message;
        postcount++;
    }
    else if (postcount == 1) {
           document.getElementById("reply1").textContent = message;
        postcount++;
    }
    else if (postcount == 2) {
             document.getElementById("reply2").textContent = message;
        postcount++;
    }
    else{
           document.getElementById("topic").textContent = message;
              document.getElementById("reply1").textContent = '';
                 document.getElementById("reply2").textContent = '';
                 postcount = 1;

    }
    document.getElementById("message").value = '';
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    //    - ครั้งที่ 1 ใส่ใน id="topic"
    //    - ครั้งที่ 2 ใส่ใน id="reply1"
    //    - ครั้งที่ 3 ใส่ใน id="reply2"
    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    // 4. เพิ่มค่า postCount
}

function clearFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    let message = document.getElementById("message").value;
     document.getElementById("topic").textContent = '';
          document.getElementById("reply1").textContent = '';
           document.getElementById("reply2").textContent = '';
           postcount = 0;
            document.getElementById("message").value = '';
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    // 2. ล้างข้อความใน textarea (id="message")
    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
}
