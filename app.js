let Users = [
    {
        prenom: "babacar",
        nom: "Sy",
        telephone: "771234567",
        email: "babacar@gmail.com",
        photo: "https://images.unsplash.com/photo-1611608822650-925c227ef4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
        transactions: [
            {
                numero: 0,
                montant: 10000,
                sens: 1,
                day: "12/10/2023",
                type: "depot",
                vers: "",

            },
            {
                numero: 1,
                montant: 10000,
                sens: 1,
                day: "12/10/2023",
                type: "depot",
                vers: "",

            }, {
                numero: 2,
                montant: 10000,
                sens: 1,
                day: "12/10/2023",
                type: "depot",
                vers: "",

            }
        ]
    },
    {
        prenom: "Adja Awa",
        nom: "Touré",
        telephone: "781234567",
        email: "adja@gmail.com",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        transactions: [
            {
                numero: 0,
                montant: 1000,
                sens: 1,
                day: "12/10/2023",
                type: "depot",
                vers: "",

            },
            {
                numero: 1,
                montant: 5000,
                sens: 1,
                day: "12/10/2023",
                type: "depot",
                vers: "",

            }, {
                numero: 2,
                montant: 3000,
                sens: -1,
                day: "12/10/2023",
                type: "retrait",
                vers: "",

            }
        ]
    },
    {
        prenom: "Jean Malick",
        nom: "Mendy",
        telephone: "761234567",
        email: "jemmy@gmail.com",
        photo: "https://media.istockphoto.com/id/1158245369/photo/young-pensive-man-looking-away.jpg?s=612x612&w=is&k=20&c=DvFTFgXQ3Xg2GkefEWmCarwGpwUd00PYbAuEI3JVXSo=",
        transactions: [
            {
                numero: 0,
                montant: 12000,
                sens: 1,
                day: "12/10/2023",
                type: "depot",
                vers: "",

            },
            {
                numero: 1,
                montant: 5000,
                sens: -1,
                day: "12/10/2023",
                type: "retrait",
                vers: "",

            }, {
                numero: 2,
                montant: 3000,
                sens: -1,
                day: "12/10/2023",
                type: "retrait",
                vers: "",

            }
        ]
    }
]


console.log()



let date = new Date().toLocaleString();
const lastname = document.querySelector("#lastname")
const firstname = document.querySelector("#firstname")
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const solde = document.querySelector("#solde");
const code = document.querySelector("code");
const img = document.querySelector("img");
const tbody = document.querySelector("tbody");
const td = document.querySelectorAll("td");
const btnDetail = document.querySelector("#btnDetail");
const next = document.querySelector(".next");
const form = document.querySelector(".form");
const mnt = document.querySelector("#mnt");
const trans = document.querySelector("#trans");
let indpresent = randomNumber(Users.length);
const transfertNum = document.querySelector("#transfertNum");
const divError = document.querySelector(".divError");
const faEye = document.querySelector(".fa-eye");
const detailTransac = document.querySelector("#detail-transac")
const detailTransacModale = document.querySelector("#detailTransac")
const btnenregistrer = form.children[2];
const TypeTransac = document.querySelector("#TypeTransac")
const popup = document.querySelector(".popup");
const faXmark = document.querySelector(".fa-xmark");
const ajouterNewUtilisateur = document.querySelector(".fa-user-plus");
const prenomAjout  = document.querySelector("#prenomAjout");
const nomAjout  = document.querySelector("#nomAjout");
const telephoneAjout  = document.querySelector("#telephoneAjout");
const emailAjout  = document.querySelector("#emailAjout");
const photoAjout  = document.querySelector("#photoAjout");





prenomAjout.addEventListener("input", ()=>
{
    notNumber(prenomAjout.value,prenomAjout)
})
nomAjout.addEventListener("input", ()=>
{
    notNumber(nomAjout.value,nomAjout)
})
telephoneAjout.addEventListener("input",()=>
{
    notletter(telephoneAjout.value,telephoneAjout)
})


popup.style.display = "none";
detailTransacModale.style.display = "none";


let deletes = document.querySelectorAll(".fa-square-xmark");
deletes.forEach(icone => {
    icone.addEventListener("click", (e) => {
        let child1 = e.target;
        let parent1 = child1.parentNode;
        let parent2 = parent1.parentNode
        console.log("suppre")
        let num = parseInt(parent2.children[0].textContent);
        let transactionFordel = getTransactionByNumero(Users[indpresent].transactions, num);
        let indic = getIndiceBynumero(Users[indpresent].transactions, num)
        Users[indpresent].transactions[indic].sens = 0;
        Users[indpresent].transactions[indic].type = "annulé";
        afficheTransac(Users[indpresent].transactions, tbody)
        
    })

});

ajouterNewUtilisateur.addEventListener("click",()=>
{
    
})

faXmark.addEventListener("click",()=>
{
    document.querySelectorAll("tbody")[1].innerHTML = "";
    detailTransacModale.style.display = "none";
    popup.style.display = "none";

})

TypeTransac.addEventListener("change", () => {
    console.log(TypeTransac.value)
    switch (TypeTransac.value) {
        case 'r':

                afficheTransactionDetail(recuptransactSwitchData("retrait", Users[indpresent].transactions), document.querySelectorAll("tbody")[1]); break;

        case 'd':


                afficheTransactionDetail(recuptransactSwitchData("depot", Users[indpresent].transactions), document.querySelectorAll("tbody")[1]);break;
        
    
        case 't' :

                afficheTransactionDetail(recuptransactSwitchData("transfert", Users[indpresent].transactions), document.querySelectorAll("tbody")[1]);break;
        case 'a': 

                afficheTransactionDetail(recuptransactSwitchData("annulé", Users[indpresent].transactions), document.querySelectorAll("tbody")[1]);break;
        case 'n': break;
        default : break;
   
    }
})

faEye.addEventListener("click", () => {
    popup.style.display = "none";
    detailTransacModale.style.display = "none";
    let numSearch = transfertNum.value;
    let indiceUser = getIndiceBytel(numSearch, Users);
    if (indiceUser === Users.length) {
        messError(divError, "Nuemro invalide");
        transfertNum.style.color = "red";
    }
    else {
        printUser(Users[indiceUser])
    }
})


detailTransac.addEventListener("click", () => {
    popup.style.display = "none";

    detailTransacModale.style.display = "block";
    //alert("wou")
    afficheTransactionDetail(Users[indpresent].transactions, document.querySelectorAll("tbody")[1])
   
    //console.log(recuptransactSwitchData("transfert",Users[indpresent].transactions))

})


btnenregistrer.addEventListener("click", () => {
    popup.style.display = "none";
    detailTransacModale.style.display = "none";

    let pricePrinter = parseFloat(mnt.value)
    if (mnt.value === '') {

        messError(divError, "veuiller entrer un montant");
    }
    else if (pricePrinter < 500) {
        messError(divError, "Le montant saisi doit être supérieur à 500");

    }
    else {
        let operation = trans.value;
        let numTrans = transfertNum.value
        switch (operation) {
            case 'd': if (numTrans === '') {
                depot(pricePrinter, Users[indpresent], Users[indpresent].transactions[Users[indpresent].transactions.length - 1].numero + 1);
                printUser(Users[indpresent]);

            }
            else {
                let indice = getIndiceBytel(numTrans, Users)
                if (indice === Users.length) {
                    retrait(pricePrinter, Users[indpresent], Users[indpresent].transactions[Users[indpresent].transactions.length - 1].numero + 1)
                    printUser(Users[indpresent]);
                    form.style.display = "none";
                    setTimeout(() => {
                        messError(divError, "Transfert annulé ")
                        Users[indpresent].transactions[Users[indpresent].transactions.length - 1].sens = 0;
                        Users[indpresent].transactions[Users[indpresent].transactions.length - 1].type = "Annulé";
                        printUser(Users[indpresent]);

                    }, 3000);
                }
                else {
                    if (indice === indpresent) {
                        messError(divError, "Veuiller choisir un numero different du votre ")
                    }
                    else {
                        let soldee = calculeSolde(Users[indpresent].transactions);
                        if (soldee < pricePrinter) {
                            messError(divError, "Votre solde est insuffisant");
                        }
                        else {

                            retrait(pricePrinter, Users[indpresent], Users[indpresent].transactions[Users[indpresent].transactions.length - 1].numero + 1)
                            Users[indpresent].transactions[Users[indpresent].transactions.length - 1].vers = Users[indice].telephone;
                            Users[indpresent].transactions[Users[indpresent].transactions.length - 1].type = "transfert";
                            printUser(Users[indpresent]);
                            depot(pricePrinter, Users[indice], Users[indice].transactions[Users[indice].transactions.length - 1].numero + 1);

                            //console.log(Users[indpresent].transactions)



                        }

                    }
                }

                //transfert(pricePrinter,Users[indpresent],Users[1])
            }

                break;
            case 'r':
                if (!(controleRetrait(pricePrinter, Users[indpresent]))) {
                    messError(divError, "Votre solde ne vous permet pas de faire cette opération")
                }
                else {
                    retrait(pricePrinter, Users[indpresent], Users[indpresent].transactions[Users[indpresent].transactions.length - 1].numero + 1)
                    printUser(Users[indpresent]);
                    form.style.display = "none";


                }

                ; break;
            default: break;
        }
        console.log(Users[indpresent].transactions)




    }
   

    console.log(deletes)

})

next.addEventListener("click", () => {
    indpresent = randomNumber(Users.length);
    printUser(Users[indpresent]);
    popup.style.display = "none";
    detailTransacModale.style.display = "none";


})

btnDetail.addEventListener("click", () => {
    if (form.style.display == "none") {
        form.style.display = "block"

    }
    else {
        form.style.display = "none"
    }
})




let i = 0;


printUser(Users[indpresent])


function afficheTransac(tab, div) {
    date = new Date().toLocaleString();
    let i = 0;
    div.innerHTML = "";
    tab.forEach(transac => {
        let tr = document.createElement("tr");
       

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.textContent = transac.numero;
        td2.textContent = transac.day;
        if (transac.sens === 1) {
            td3.style.color = "green";
        }
        else if (transac.sens === -1) {
            if (transac.vers === "") {

                td3.style.color = "red";
            }
            else {
                td3.style.color = "yellow";
            }
            // getIndiceBytel(numTrans,Users)
        }
        else {
            // td3.textContent = "Annulé";

            td3.style.color = "white";
        }
        td3.textContent = transac.type;
        if (transac.type === "transfert") {
            let ico = document.createElement("i");
            ico.setAttribute("class", "fa-solid fa-square-xmark");
            td3.appendChild(ico);
            // setTimeout(() => {
            //     ico.style.display = "none"

            // }, 10000);
            ico.addEventListener("click", (e) => {
                // alert("diao");
                // console.log("suppre")
                let child1 = e.target;
                let parent1 = child1.parentNode;
                let parent2 = parent1.parentNode
                // console.log("suppre")
                // console.log(parent2);
                let num = parseInt(parent2.children[0].textContent);
                let transactionFordel = getTransactionByNumero(Users[indpresent].transactions, num);
                let numRetir = transactionFordel.vers
                console.log(getIndiceBytel(numRetir, Users));
                console.log(transactionFordel.vers);
                if (calculeSolde(Users[getIndiceBytel(numRetir, Users)].transactions) < transactionFordel.montant) {
                    messError(divError, "L'argent ou une partie de l'argent a été retiré. Vous ne pouvez plus annuler la transaction");
                }
                else {
                    let numee = Users[getIndiceBytel(numRetir, Users)].transactions[Users[getIndiceBytel(numRetir, Users)].transactions.length - 1].numero
                    console.log(numee);

                    retrait(transactionFordel.montant, Users[getIndiceBytel(numRetir, Users)], numee + 1)
                    let indic = getIndiceBynumero(Users[indpresent].transactions, num)
                    Users[indpresent].transactions[indic].sens = 0;
                    Users[indpresent].transactions[indic].type = "annulé";
                    afficheTransac(Users[indpresent].transactions, tbody);

                }


                // console.log(transactionFordel)
            })
            td3.style.display = "flex";

            td3.style.gap = "1em"

        }
        td4.textContent = transac.montant;

        tr.append(td1, td2, td3, td4)






        i++;
        div.appendChild(tr);
        solde.textContent = calculeSolde(tab);
        code.textContent = tab.length
    });

}


function afficheTransactionDetail(transactions, div) {
    div.innerHTML = "";
    transactions.forEach(transa => {
        let tr = document.createElement("tr");
        tr.addEventListener("mouseenter",(e)=>
        {
            
            let child1 = e.target;
            console.log(child1.children[0].textContent)
            // let parent1 = child1.parentNode;
            // let parent2 = parent1.parentNode;
            // console.log(child1)
            let popPrenom = document.querySelector(".popPrenom")
            let popNom =  document.querySelector(".popNom")
            let popTelephone = document.querySelector(".popTelephone").innerText = Users[indpresent].telephone
            let popType = document.querySelector(".popType").innerText = child1.children[2].textContent
            let popDate=  document.querySelector(".popDate").innerText = child1.children[0].textContent;
            let popMontant = document.querySelector(".popMontant").innerText = child1.children[1].textContent
            let popDestinataire = document.querySelector(".popDestinataire").innerText = child1.children[3].textContent;
            let popImg =  document.querySelector("#popImg");
            if(popDestinataire == "")
            {
                popup.children[1].children[0].style.display = "none";
                popup.children[1].children[1].style.display = "none";
                popup.children[1].children[6].style.display = "none";
                popImg.style.display = "none";
                popDestinataire.innerText ="Pas de destinataire" + popType + "normale";
                popup.style.display = "flex";
            }
            else 
            {
                popup.style.height = "44%"; 
                popup.style.width = " 20%"; 
               
                popup.children[1].children[0].style.display = "block";
                popup.children[1].children[1].style.display = "block";
                popup.children[1].children[6].style.display = "block";
                popImg.style.display = "block";
                popPrenom.innerText = Users[getIndiceBytel(popDestinataire,Users)].prenom
                popNom.innerText = Users[getIndiceBytel(popDestinataire,Users)].nom
                popImg.src = Users[getIndiceBytel(popDestinataire,Users)].photo
                console.log(popTelephone)
                popup.style.display = "flex";

            }
            

            
            // console.log(Users[getIndiceBynumero(tr.children[3].textContent)])
        })
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.textContent = transa.day;
        td2.textContent = transa.montant;
        td3.textContent = transa.type
        td4.textContent = transa.vers;
        tr.append(td1, td2, td3, td4);
        document.querySelectorAll("tbody")[1].appendChild(tr);

    });
}
const inputRecherche = document.querySelector('#inputrecherche')
const barreInfo = document.querySelector('.barre-info')

function barreClient(prenom, nom, img) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const image = document.createElement('img');

    li.classList.add('infoClientRec');
    span.classList.add('nom');
    span.textContent = `${prenom} ${nom}`;
    image.classList.add('img');
    image.src = img;
    li.appendChild(span);
    li.appendChild(image);
    return li;
}
inputRecherche.addEventListener('input', () => {
    const motCherche = inputRecherche.value

    barreInfo.innerHTML = ''

    if (motCherche != '') {
        RechercheUser(motCherche)
    }
})

function RechercheUser(motCherche) {
    for (let client of Users) {
        if (client.nom.toLowerCase().includes(motCherche.toLowerCase()) || client.prenom.toLowerCase().includes(motCherche.toLowerCase()) || client.telephone.includes(motCherche)) {
            const li = barreClient(client.prenom, client.nom, client.photo)
            barreInfo.appendChild(li)
            li.addEventListener('click', () => {
                inputRecherche.value = li.innerText;
                li.style.display ="none";
                printUser(client);
                indpresent =  Users.indexOf(client);
                // createTransaction(client.transactions.montants, client.transactions.sens, date);
                // solde.innerText = getSoldeByClient(client);
                // lastname.innerHTML = client.nom
                // firstname.innerHTML = client.prenom
                // phone.innerHTML = client.number
                // email.innerHTML = client.mail
                // photo.src = client.image
                // barreInfo.innerHTML = ''
            })
        }
    }
}


// depot(300,Users[0])
// console.log(Users[0])

function afficheInfosUser(prenom, nom, telephone, mail, photo) {
    firstname.textContent = prenom;
    lastname.textContent = nom;
    phone.textContent = telephone;
    email.textContent = mail;
    img.src = photo;

}

function printUser(user) {
    afficheInfosUser(user.prenom, user.nom, user.telephone, user.email, user.photo);
    afficheTransac(user.transactions, tbody);
}

function calculeSolde(tab) {
    let solde = 0;
    for (const transac of tab) {
        solde += transac.montant * transac.sens;


    }
    return solde;
}

function randomNumber(max) {

    return Math.floor(Math.random() * max);
}

function depot(mnt, user, i) {
    let objet = {
        numero: i,
        montant: mnt,
        sens: 1,
        day: date,
        type: "depot",
        vers: ""
    }
    user.transactions.push(objet)

}

function retrait(mnt, user, i) {
    let objet = {
        numero: i,
        montant: mnt,
        sens: -1,
        day: date,
        type: "retrait",
        vers: "",
    }
    user.transactions.push(objet)

}

//Fonction pour controler si le solde permet de faire un retrait
function controleRetrait(montant, user) {
    let solde = calculeSolde(user.transactions)

    return montant < solde;
}

function transfert(montant, userDepart, userArrivé) {
    if (!(controleRetrait(montant, userDepart))) {
        messError(divError, "Votre solde ne vous permet pas de faire un tel transfert.")

    }
    else {
        let objet = {
            montant: montant,
            sens: -1,
            day: date,
            type: "transfert"
        }
        userDepart.transactions.push(objet)
        depot(montant, userArrivé);
        printUser(userDepart);
    }
}



function getIndiceBytel(tel, tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].telephone === tel) {
            return i;
        }

    }
    return tab.length;

}


function getTransactionByNumero(transaction, numero) {
    let transacnum = {};
    for (const trans of transaction) {
        if (trans.numero == numero) {
            transacnum = trans;
        }

    }
    return transacnum;
}


// la fonction retourne la longueur du tableau s'il ne ttrouve pas le numero;
function getIndiceBynumero(transaction, numero) {
    let i = -1;
    for (i = 0; i < transaction.length; i++) {
        if (transaction[i].numero == numero) {
            return i
        }
    }
    return i;
}

console.log(getIndiceBynumero(Users[0].transactions, 19))
// console.log(getTransactionByNumero(Users[0].transactions,3))

function messError(divAjout, string) {
    divAjout.textContent = string;
    divAjout.style.transform = "scale(100%,100%)";
    setTimeout(() => {
        divAjout.style.transform = "scale(0)";

    }, 2000);
}


function recuptransactSwitchData(type, transac) {
    let tab = [];
    transac.forEach(transa => {
        if (transa.type === type) {
            tab.push(transa)
        }

    });
    return tab
}

// Fonction pour empêcher à l'utilisatuer de saisir des chiffres ou des caractères spéciaux
function notNumber(text,input)
{
    let regular = /[^a-z ]$/i;
    let value = text.replace(regular,"");
    input.value = value;
}


// Fonction pour empêcher la saisie de lettre dans un input
function notletter(text,input)
{
    let regular = /[^0-9]$/g;
    let value = text.replace(regular,"");
    input.value = value;
}



// messError(divError,"veuiller remplir la case");
// console.log(getIndiceBytel('751234567',Users))


// console.log(controleRetrait(7000,Users[1]))




// console.log(date.getHours())
// console.log(Users)
// firstname.textContent = "babacar";
// lastname.textContent = "sy"
// phone.textContent = "771234567";
// email.textContent = "babacar@gmail.com"
// solde.textContent  = 12000;
// code.textContent = 2
// img.src = "https://images.unsplash.com/photo-1611608822650-925c227ef4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"


// objet = {
//     prenom:,
//     nom:,
//     telephone:,
//     email:,
//      photo:,
//     transaction: [
//                     {
//                         montant:,
//                         sens:,
//                         day:,
//                         type:,

//                     }
//     ]
// }