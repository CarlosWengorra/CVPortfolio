import { useState } from 'react'
//import BotonCategorias from "src/assets/components/BotonCategorias.jsx"
import CategoryCard from "./CategoryCard.jsx"
import "../css/categoryCards.css"

//import React, {useState} from "react"
const publicaciones=[
  {
    "id": "668aa9ac44144fe3d32cc1c8",
    "nombre": "ACCIDENCY",
    "descripcion": "Dolore dolor anim irure non proident et aliqua sunt reprehenderit velit. Aliquip labore exercitation eiusmod enim ullamco minim sunt fugiat quis fugiat. Excepteur id reprehenderit tempor laborum ex occaecat ullamco duis nisi magna magna enim ea non. Exercitation mollit commodo elit enim in dolore nulla nisi nostrud sint eu id amet sunt. Non nostrud nulla consectetur velit irure pariatur quis velit cillum excepteur consectetur ut veniam. Laboris adipisicing proident cupidatat eiusmod voluptate laboris aliquip commodo pariatur magna pariatur. Aliqua eu mollit dolor ex officia.\r\n",
    "categoria": "pymes",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9ac20153d7039b1ac16",
    "nombre": "ZIGGLES",
    "descripcion": "Aliquip in consectetur velit qui nulla reprehenderit Lorem id minim laboris. Ipsum veniam eu do officia eiusmod aute nostrud occaecat laboris anim. Ipsum dolor proident exercitation nulla ex ad ex et amet ad deserunt tempor et. Id incididunt commodo consequat aute deserunt dolor fugiat id quis.\r\n",
    "categoria": "Conservación/Regeneración/ Servicios ecosistémicos",
    "pais": "Ecuador",
    "gestionado": false
  },
  {
    "id": "668aa9aca944027ddd4e4e91",
    "nombre": "ZOUNDS",
    "descripcion": "Ea dolor tempor nulla velit cupidatat elit aliqua aliquip occaecat id veniam sint. Ullamco esse minim deserunt sint. Elit ea proident pariatur ad do ipsum veniam ea magna occaecat. Excepteur nulla dolor ea minim consectetur consequat consequat ea ut sunt. Aute commodo quis consectetur non minim do consequat et veniam minim veniam excepteur aliquip.\r\n",
    "categoria": "pymes",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9ac67a12c36b8dc1c2b",
    "nombre": "NURALI",
    "descripcion": "Non adipisicing veniam in nisi magna aute. Ad dolor et labore ad labore. Amet non ut eiusmod ad cillum dolor minim duis. Pariatur eu veniam sunt laboris occaecat commodo aute excepteur aliquip aute do mollit magna eiusmod. Dolor reprehenderit officia minim enim consequat magna mollit cupidatat qui cillum dolor incididunt. Cupidatat occaecat deserunt laborum et do laborum.\r\n",
    "categoria": "pymes",
    "pais": "Ecuador",
    "gestionado": true
  },
  {
    "id": "668aa9ac09a427929814c443",
    "nombre": "KIGGLE",
    "descripcion": "Est pariatur eu quis labore aliquip deserunt anim. Labore proident adipisicing labore ut. Eu Lorem excepteur ea culpa mollit nostrud veniam pariatur in esse reprehenderit. Do officia quis deserunt Lorem nostrud in ullamco amet tempor ad aliqua ad laborum. Velit exercitation proident nostrud adipisicing anim excepteur ut anim et laboris officia consectetur. Ut do magna qui sunt dolore cillum ea deserunt commodo sunt.\r\n",
    "categoria": "Inclusion laboral",
    "pais": "Ecuador",
    "gestionado": true
  },
  {
    "id": "668aa9ac5ac0ec45689343b4",
    "nombre": "ZILLANET",
    "descripcion": "Dolore nisi duis officia nisi labore excepteur magna sint ipsum. Consectetur ea do sunt consequat Lorem nostrud nisi voluptate ad. Enim id ut ea elit aliquip pariatur dolore Lorem ad ullamco ex commodo. Velit elit labore tempor occaecat amet id non consectetur sint. Minim ex ullamco deserunt nisi laborum. Ea magna consequat pariatur consectetur nostrud fugiat anim dolore fugiat irure ullamco.\r\n",
    "categoria": "Empresas/ Organismos de impacto/Economía circular",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9acf868b5bb941d83f1",
    "nombre": "ZAGGLES",
    "descripcion": "Sit ad reprehenderit eu non. In nulla nulla ea ut do amet sint aliqua. Esse aliquip nulla ad dolor labore officia aute dolor voluptate officia non. Commodo consectetur consectetur et adipisicing. Deserunt proident deserunt aliqua nostrud consequat fugiat enim quis non dolor eu aliquip et.\r\n",
    "categoria": "Economía social/Desarrollo local/ Inclusión financiera",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9acd1b6d698e6f8e85c",
    "nombre": "QUIZKA",
    "descripcion": "Nulla excepteur dolore dolore nulla deserunt laboris commodo. Incididunt laboris et eiusmod incididunt velit adipisicing incididunt ut fugiat. Cillum quis reprehenderit incididunt exercitation eiusmod nulla consectetur aliquip exercitation duis eiusmod consectetur culpa velit. Labore proident deserunt sunt dolore veniam dolor sit ipsum velit quis elit. Labore ad fugiat elit qui velit tempor cupidatat enim. Dolore aliqua dolore nulla ad deserunt nisi labore voluptate aliquip. Minim officia qui amet mollit aliquip ut reprehenderit est enim laboris.\r\n",
    "categoria": "Economía social/Desarrollo local/ Inclusión financiera",
    "pais": "Ecuador",
    "gestionado": true
  },
  {
    "id": "668aa9ace741ec949bddca85",
    "nombre": "VIRVA",
    "descripcion": "Incididunt ex ut magna laboris pariatur ut dolor eiusmod in dolore non adipisicing ea reprehenderit. Laboris laboris esse ut Lorem aute mollit. Sint laboris deserunt esse aliqua cillum aliquip ea ad culpa elit elit. Sint qui aliquip et nulla ullamco veniam ad ut aliquip consectetur laboris amet.\r\n",
    "categoria": "reciclado",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9acb7a3a5aa75be1d53",
    "nombre": "MEDMEX",
    "descripcion": "Quis magna nostrud nisi ullamco eu consequat laborum proident. Aliquip anim aute elit dolor minim dolor culpa. In est ut laboris exercitation pariatur enim veniam.\r\n",
    "categoria": "Conservación/Regeneración/ Servicios ecosistémicos",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9acb9ea5c46e7363d6b",
    "nombre": "OVOLO",
    "descripcion": "Et velit incididunt amet magna in nulla labore voluptate. Eiusmod exercitation sint tempor adipisicing nisi ullamco ad fugiat veniam veniam quis. Id sint sint nulla mollit velit irure pariatur deserunt.\r\n",
    "categoria": "Economía social/Desarrollo local/ Inclusión financiera",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9ac68033c432e5bce8a",
    "nombre": "STEELTAB",
    "descripcion": "Lorem ex incididunt reprehenderit dolor exercitation nisi. Quis excepteur elit velit ad ullamco magna occaecat aliquip aliqua qui ad culpa. Nostrud quis sit et ad eu pariatur et do officia ipsum fugiat commodo ex. Commodo eiusmod commodo ipsum ad officia nisi fugiat in duis exercitation. Cupidatat voluptate culpa sint consectetur do officia. Aute velit ut occaecat qui.\r\n",
    "categoria": "Conservación/Regeneración/ Servicios ecosistémicos",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9ace52265ff40213b19",
    "nombre": "ECRAZE",
    "descripcion": "Labore tempor ut Lorem labore aute. Deserunt esse esse nisi id eu. Duis culpa nulla sint aliqua ex ullamco eiusmod amet deserunt eu. Minim laborum ipsum et id enim ad nostrud aute irure ut. Aliqua sit commodo reprehenderit irure velit Lorem cillum irure. In labore deserunt magna amet. In consectetur duis laboris Lorem ut cupidatat aute excepteur amet.\r\n",
    "categoria": "Empresas/ Organismos de impacto/Economía circular",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9acaf8e23473951e186",
    "nombre": "ACCUPHARM",
    "descripcion": "Enim adipisicing sit ex mollit. Incididunt velit adipisicing deserunt cupidatat commodo officia ex aute nulla aute sint nisi cillum quis. Ut nostrud nostrud aliqua exercitation ipsum pariatur dolor labore anim pariatur. Mollit officia laboris do labore non duis ut nostrud cillum commodo occaecat exercitation. Cillum dolore adipisicing anim adipisicing.\r\n",
    "categoria": "Agroecología/Orgánicos/ Alimentación saludable",
    "pais": "Ecuador",
    "gestionado": false
  },
  {
    "id": "668aa9ac9b3f4e1fc2b914cf",
    "nombre": "NORSUL",
    "descripcion": "Aliqua nisi excepteur occaecat exercitation aliqua. Voluptate consectetur qui elit qui. Consectetur irure laborum aliquip et aliqua ullamco irure sint excepteur culpa est. Culpa pariatur culpa elit eu enim magna duis excepteur eu aute fugiat. Minim incididunt consequat velit Lorem anim adipisicing occaecat velit. Proident est enim velit tempor irure minim cupidatat id voluptate.\r\n",
    "categoria": "Agroecología/Orgánicos/ Alimentación saludable",
    "pais": "Ecuador",
    "gestionado": false
  },
  {
    "id": "668aa9ac39593305e0d26206",
    "nombre": "SHEPARD",
    "descripcion": "Excepteur officia non dolor mollit in do mollit cupidatat. Mollit id culpa est officia minim do minim officia duis qui. Commodo Lorem proident excepteur ullamco cillum aliquip ut et minim elit. Eiusmod Lorem pariatur consequat elit irure in exercitation ea amet aliquip eu sunt duis.\r\n",
    "categoria": "pymes",
    "pais": "Ecuador",
    "gestionado": false
  },
  {
    "id": "668aa9ac456195ddfbed5d71",
    "nombre": "EVENTEX",
    "descripcion": "Ullamco anim nostrud anim ad deserunt Lorem proident excepteur sint. Ad esse ad officia est est tempor deserunt laborum reprehenderit velit qui proident enim pariatur. Veniam incididunt do fugiat tempor labore quis veniam mollit adipisicing reprehenderit commodo incididunt irure. Magna cillum incididunt proident deserunt. Aliqua sit voluptate consectetur in qui adipisicing exercitation laboris amet nostrud quis. Laborum enim ea ea reprehenderit est ad irure labore voluptate id. Do sit ex dolore exercitation mollit id esse incididunt do enim.\r\n",
    "categoria": "Agroecología/Orgánicos/ Alimentación saludable",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9ac2486207311f103ce",
    "nombre": "LUNCHPOD",
    "descripcion": "Eiusmod exercitation ut occaecat amet aliquip esse cillum aliquip cillum quis Lorem magna ullamco. Magna cupidatat eiusmod excepteur nisi enim qui do. Cupidatat excepteur aute mollit eiusmod sit nisi sint laboris laboris magna. Id nisi ex ut proident cupidatat ex labore aliqua exercitation officia ipsum et in. Commodo amet duis ipsum est est eiusmod.\r\n",
    "categoria": "Economía social/Desarrollo local/ Inclusión financiera",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9ac9cf407762e704359",
    "nombre": "QUORDATE",
    "descripcion": "Commodo aliquip do ex laborum et veniam sit magna irure in eu veniam irure. Lorem laborum duis tempor id velit nisi occaecat. Id esse adipisicing officia commodo commodo ipsum tempor mollit. Est qui magna enim quis est ea aliqua. Est officia cupidatat reprehenderit cupidatat ex magna proident incididunt irure nostrud cupidatat. Exercitation esse sint eiusmod Lorem amet non eu. Culpa laboris et in anim.\r\n",
    "categoria": "Conservación/Regeneración/ Servicios ecosistémicos",
    "pais": "Argentina",
    "gestionado": false
  },
  {
    "id": "668aa9ac9277d1f02388a543",
    "nombre": "KEGULAR",
    "descripcion": "Ex consectetur pariatur aute enim velit culpa ut sint commodo ut. Tempor excepteur fugiat irure tempor incididunt et aute pariatur magna. Exercitation magna amet ullamco aute Lorem nulla. Sit amet ea cillum voluptate magna velit minim voluptate aute laboris incididunt et fugiat nostrud. Excepteur enim est dolore consectetur in laboris occaecat aute ut est ex cupidatat. Id nostrud est laborum do aliquip exercitation id esse et nostrud.\r\n",
    "categoria": "Conservación/Regeneración/ Servicios ecosistémicos",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9ac00f272e2a055a103",
    "nombre": "ROCKLOGIC",
    "descripcion": "Proident in amet enim ut ad ut aliqua duis. Fugiat duis non mollit ipsum qui. Non aute tempor nulla fugiat culpa dolore laborum anim proident velit et mollit ex sit. Fugiat in aute amet cillum. Ad ullamco mollit cillum eu et nisi. Exercitation ea cillum nostrud id voluptate amet.\r\n",
    "categoria": "Economía social/Desarrollo local/ Inclusión financiera",
    "pais": "Ecuador",
    "gestionado": false
  },
  {
    "id": "668aa9ac0f65bceff54d2df6",
    "nombre": "EXOSWITCH",
    "descripcion": "Ex commodo dolor duis irure dolore minim sit veniam laborum pariatur occaecat id aliquip. Cupidatat deserunt commodo anim sint. Cillum laborum non quis sit irure eu consequat ullamco culpa occaecat labore quis adipisicing aute. Do mollit proident consectetur sunt officia magna est do. Nisi sunt proident exercitation eu pariatur minim reprehenderit qui et. Occaecat nostrud culpa sunt veniam mollit veniam consequat fugiat excepteur anim id elit. Non deserunt qui consequat veniam esse Lorem deserunt.\r\n",
    "categoria": "Conservación/Regeneración/ Servicios ecosistémicos",
    "pais": "Argentina",
    "gestionado": true
  },
  {
    "id": "668aa9ac763ea229a56c8ef8",
    "nombre": "ENJOLA",
    "descripcion": "Duis dolor anim laboris aliqua dolor nulla ex tempor dolor nostrud culpa aliquip minim. Laboris nulla eiusmod laborum deserunt proident. Labore labore irure do veniam eiusmod labore laborum Lorem. Duis veniam sit in incididunt ullamco in pariatur cillum commodo enim elit.\r\n",
    "categoria": "Agroecología/Orgánicos/ Alimentación saludable",
    "pais": "Ecuador",
    "gestionado": true
  },
  {
    "id": "668aa9acf31990207cee33be",
    "nombre": "ERSUM",
    "descripcion": "Sunt sit voluptate excepteur duis nostrud incididunt. Laborum ex ex sit non officia elit sunt nisi nisi excepteur reprehenderit ex tempor consectetur. Non adipisicing laboris tempor nulla cupidatat velit aute magna tempor exercitation est veniam anim nostrud. Sint nostrud sint nisi dolore aliquip proident ullamco id in ut proident aliquip sint.\r\n",
    "categoria": "reciclado",
    "pais": "Ecuador",
    "gestionado": true
  }
]
const categoriasStandard=[
    {
      ima: 'src/assets/img/EconomiaSocial.png',
      texto: "Economía social/Desarrollo local/ Inclusión financiera"
    },
    {
      ima: "src/assets/img/Agroecologia.png",
      texto: "Agroecología/Orgánicos/ Alimentación saludable"
    } ,
    {
      ima: "src/assets/img/Conservacion.png",
      texto: "Conservación/Regeneración/ Servicios ecosistémicos"
    },

    {
      ima: "src/assets/img/empresas.png",
      texto: "Empresas/ Organismos de impacto/Economía circular"
    }
  ]
  const categorias=[
    {
      
      texto: "Desarrollo local/Economía social/ Inclusión financiera"
    },
    {
      texto: "Alimentación saludable/ Agroecología/Orgánicos"
    } ,
    {
      texto: "Servicios ecosistémicos/ Conservación/Regeneración"
    },

    {
      texto: "Economía circular/ Empresas/ Organismos de impacto"
    }
  ]

//funcion que permite ordenar las publicaciones por categorias
function ordenarPublicacionesPorCategoria(arr){
  const list = arr.reduce((prev, curr) => {
    const index = prev.findIndex(i => i?.categoria === curr.categoria);

    if (index >= 0)
       prev[index].items.push(curr);
    else
       prev.push({ categoria: curr.categoria, items: [curr] });

    return prev;
 }, []);

 return list;
}


function filtrarPublicacionesPorcategorias(publicaciones,cat){
let publicacionesFiltradas=publicaciones.filter(publicacion=> publicacion.categoria === cat);
return publicacionesFiltradas
}

function filtrarCategorias(arr){
  return arr.map(item => item.categoria);
}


function renderizarCategoriasStandard (){
  
  return categoriasStandard.map((categoria,index)=> <CategoryCard key={index} ima={categoria.ima} texto={categoria.texto}/>)

}

function renderizarCategoriasNoStandard(){
  let categoriasFiltradas=categoriasNoStandard(publicaciones);
  return categoriasFiltradas.map((categoria,index)=> <CategoryCard  key={index} ima={categoria.ima} texto={categoria}/>) 
}

function categoriasNoStandard(arr){
  let categoriasFiltradas=filtrarCategorias(ordenarPublicacionesPorCategoria(arr));
  
  for (let index = 0; index < categoriasStandard.length-1; index++) {
    categoriasFiltradas=categoriasFiltradas.filter(cat=>categoriasStandard[index].texto!=cat)
    
  }
  return categoriasFiltradas;
}
//let categoriasFiltradas=filtrarCategorias(ordenarPublicacionesPorCategoria(publicaciones));



function CategoryCards(){
  
  
  const [btnTxt, setBtnTxt]= useState(false)

  const btnText=()=>{
    setBtnTxt(!btnTxt)
  }
 

return(
    <div className="category-cards-section">
        <p className="meu-text">Microemprendimientos Ubuntu</p>
        <p className="cat-text">Categorías</p>
        <div className="cards">
          {renderizarCategoriasStandard()}

          {btnTxt ? renderizarCategoriasNoStandard() :<></>}
         
        </div>
        
        <button onClick={btnText} className="btn-categorias">{btnTxt ? "Ver Menos" :"Ver más Categorías" } </button>
       
    </div>

)

}

export default CategoryCards