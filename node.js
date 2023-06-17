const nombre=document.querySelector('#nombre');
const enviar=document.querySelector('#enviar');
const resultados=document.querySelector(".resultados");
const fvalida=document.querySelector(".fvalida");
const check1=document.querySelector('#check1');
const check2=document.querySelector('#check2');
const check3=document.querySelector('#check3');
const check4=document.querySelector('#check4');
const correo=document.querySelector('#correo');
const edad=document.querySelector('#edad');
const telefono=document.querySelector('#telefono');
const interes=document.querySelector('.interes');




enviar.addEventListener('click',valida_envia);
function valida_envia()
{
///////////////////////////////////////////////////////////////////////////////////
// Validación del largo del nombre                                               //
/////////////////////////////////////////////////////////////////////////////////// 
var v = nombre.value;
 var er_name = /^([a-zA-Z0-9\s]{6,20})+$/;
 //comprueba campo teléfono de formulario
 //usa el método test de expresión regular

 if(!er_name.test(v))
 {
 resultados.innerHTML="Campo de nombre no válido.";
 return 0; //no submit
 }

///////////////////////////////////////////////////////////////////////////////////////
//                         Validación de los checkbox                                //
// ////////////////////////////////////////////////////////////////////////////////////
if(!check1.checked&& !check2.checked&& !check3.checked && !check4.checked)
 {
 resultados.innerHTML="Debe seleccionar alguna ocupacion";
 return 0;
 }
// ////////////////////////////////////////////////////////////////////////////////////
//                     Validación del correo electrionico                            //
///////////////////////////////////////////////////////////////////////////////////////
var s = correo.value;
var filtro = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (!filtro.test(s))
 {
 resultados.innerHTML='Introduzca un email válido';
 correo.focus();
 return 0;
 }

///////////////////////////////////////////////////////////////////////////////////////
//                         Validación de edad                                        //
/////////////////////////////////////////////////////////////////////////////////////// 
var edadV = edad.value;
 edadV = validarEntero(edadV);

 if (edadV=="")
 {
 resultados.innerHTML="Tiene que introducir un número entero en su edad." ;
 edad.focus();
 return 0;
 }else{
 if (edadV<18)
 {
 resultados.innerHTML="Debe ser mayor de 18 años.";
 edad.focus()
 return 0;
 }
 }
function validarEntero(valor)
 {
 /* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */
 valor = parseInt(valor)
 /* Se comprobará si el valor es un número */
 if (isNaN(valor)) {
 /* Si no lo es, se devuelve una cadena vacía */
 return "";
 }else{

 /* De lo contrario se devuelve el número */
 return valor;

 }
 }

////////////////////////////////////////////////////////////////////////////////////////
//                      Validación de número de telefono                              //
////////////////////////////////////////////////////////////////////////////////////////

var t = telefono.value;
 var er_tlfono = /^([0-9]{10})+$/;
 //comprueba campo teléfono de formulario
 //usa el método test de expresión regular

 if(!er_tlfono.test(t))
 {
 resultados.innerHTML="Campo telefono no válido.";
 return 0; //no submit
 }

////////////////////////////////////////////////////////////////////////////////////////
//                           Validación de interes                                    //    
////////////////////////////////////////////////////////////////////////////////////////
if (interes.selectedIndex==0){
    resultados.innerHTML="Debe seleccionar una opción";
    interes.focus()
    return 0;
    }

////////////////////////////////////////////////////////////////////////////////////////
//                             
////////////////////////////////////////////////////////////////////////////////////////









////////////////////////////////////////////////////////////////////////////////////////
//                             
////////////////////////////////////////////////////////////////////////////////////////
 resultados.style.backgroundColor = 'green';
 resultados.innerHTML="Su cita fue agendada satisfactoriamente";
 //el formulario se envia usando el método submit() activándolo desde aquí
 function greetings(){ fvalida.submit();}
 //Agregamos un tiempo de espera para simular la que se va la informacion
 setTimeout(greetings, 2000);

}