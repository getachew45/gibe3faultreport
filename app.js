import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
      apiKey: "AIzaSyDdg_aS2G_TLKWPArwMlslRT6Wx0QYQlAk",
      authDomain: "gibe3faultreport.firebaseapp.com",
      projectId: "gibe3faultreport",
      storageBucket: "gibe3faultreport.firebasestorage.app",
      messagingSenderId: "1074175591717",
      appId: "1:1074175591717:web:28daa6c068a6bd251d46cc",
      measurementId: "G-9F9JV8Z3KY"
    };
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    const form =
    document.getElementById("faultForm");
    
    form.addEventListener(
    "submit",
    async (e) => {
    
    e.preventDefault();
    
    const faultyUnit =
    document.getElementById("faultyUnit").value;
    
    const faultedEquipment =
    document.getElementById("faultedEquipment").value;
    
    const scada =
    document.getElementById("scada").value;
    
    const groupA =
    document.getElementById("groupA").value;
    
    const groupB =
    document.getElementById("groupB").value;
    
    const groupC =
    document.getElementById("groupC").value;
    
    const groupD =
    document.getElementById("groupD").value;
    
    const operatorName =
    document.getElementById("operatorName").value;
    
    const comments =
    document.getElementById("comments").value;
    
    await addDoc(
    collection(db,"fault_reports"),
    {
    
    faultyUnit:faultyUnit,
    
    faultedEquipment:faultedEquipment,
    
    scada:scada,
    
    groupA:groupA,
    
    groupB:groupB,
    
    groupC:groupC,
    
    groupD:groupD,
    
    operatorName:operatorName,
    
    comments:comments,
    
    createdAt:new Date()
    
    }
    );
    
    alert(
    "Report Submitted Successfully"
    );
    
    form.reset();
    
    }
    );