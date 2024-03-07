import { getDataForm } from '../modules/getDataFromForm';
import endpoints from '../services/data';
import { getUser } from '../services/userServices';
import '../styles/style.scss';



//-----Declaración de variables----

const form = document.getElementById("form");

//-----Declaración de funciones----
const login = async (userData) => {
  const url = endpoints.getAnUser(userData.email, userData.password);
  const userLogged = await getUser(url);
  if (userLogged) {
    alert(`Bienvenid@ ${userLogged.name}`);
    form.reset();
  } else {
    alert("Credenciales incorrectas");
  }
};
//------Ejecutar-----

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userData = getDataForm(form);
  login(userData);
});