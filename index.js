import { initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, push, get, update} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDsmGooNCbVlQY-KZE9-YIhGhXTTUfnKy4",
    authDomain: "appntapp-2d799.firebaseapp.com",
    projectId: "appntapp-2d799",
    storageBucket: "appntapp-2d799.appspot.com",
    messagingSenderId: "740407693598",
    appId: "1:740407693598:web:cf495254e20b2ac93ff90f",
    measurementId: "G-Q53J0PGR4Y"
  };
  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

    
  const form5 = document.getElementById("contactForm5");
  const c1Input = document.getElementById("cmp");
  const cmpn1Input = document.getElementById("cmpn");

  
  form5.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // Get values from the form
    const c1 = c1Input.value;
    const cmpn1 = cmpn1Input.value;
  
   
  
      // If the component exists and quantity is sufficient, provide them and update the quantity
      const componentsRef = ref(database, 'components');
      push(componentsRef, {
        Component_Name : c1,
        Component_Quantity : parseInt(cmpn1)
      }).then(() => {

  
        alert("Components Added");
        // further actions or UI updates here
      }).catch((error) => {
        // Handle errors
        alert("Error pushing data: ", error);
      });
  
      // Clear the form fields
      c1Input.value = '';
      cmpn1Input.value = '';
  });

  const form6 = document.getElementById("contactForm6");

  form6.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  
    const c2Input = document.getElementById("cmp2").value; // Move this line inside the event listener
  
    const componentsRef = ref(database, 'components');
    const componentsSnapshot = await get(componentsRef);
    const componentsData = componentsSnapshot.val();
    
    for (const [akey, app] of Object.entries(componentsData)) {
      if (app.Component_Name === c2Input) {
        appointmentDetailsText1.textContent = `Component: ${app.Component_Name}, Number of Components: ${app.Component_Quantity}`;
        console.log(app.Component_Quantity);
      }
    }

    c2Input = ' ';
  });
  