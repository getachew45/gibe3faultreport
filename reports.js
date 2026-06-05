import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
getDocs
}
from
 "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
 const firebaseConfig = {
        apiKey: "AIzaSyDdg_aS2G_TLKWPArwMlslRT6Wx0QYQlAk",
        authDomain: "gibe3faultreport.firebaseapp.com",
        projectId: "gibe3faultreport",
        storageBucket: "gibe3faultreport.firebasestorage.app",
        messagingSenderId: "1074175591717",
        appId: "1:1074175591717:web:bfd6567e36adc3f31d46cc",
        measurementId: "G-EVCCLH08JQ"
      };
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    
    const reportBody =
    document.getElementById("reportBody");
    
    async function loadReports() {
    
    const querySnapshot =
    await getDocs(
    collection(db,"fault_reports")
    );
    
    const querysnapshot =
    await getDocs(
    collection(db,"fault_reports")
    );
    
    querysnapshot.forEach((doc)=>{
    
    const data = doc.data();
    
    const row =
    document.createElement("tr");
    
    row.innerHTML =` 
<td>${data.faultyUnit || ""}</td>
<td>${data.faultedEquipment || ""}</td>
<td>${data.operatorName || ""}</td>
<td>${data.comments || ""}</td>
`;
    
    reportBody.appendChild(row);
    
  });
    
    }
    
    loadReports();