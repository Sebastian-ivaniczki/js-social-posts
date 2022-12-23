/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/

//!creo aray dei dati del post

const data = [
{
    id: '1',
    author: 'Phil Mangione',
    postDate: '02/15/2022',
    profilePick: 'https://picsum.photos/200/300',
    post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postPick: 'https://picsum.photos/200/300',
    likes: '83'
},
{
    id: '2',
    author: 'Pippo Baudo',
    postDate: '01/15/2022',
    profilePick: '',
    post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postPick: 'https://picsum.photos/200/300',
    likes: '15'
},
{
    id: '3',
    author: 'Giorgio Saracino',
    postDate: '12/15/2022',
    profilePick: 'https://picsum.photos/200/300',
    post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postPick: 'https://picsum.photos/200/300',
    likes: '80'
},
{
    id: '4',
    author: 'Filippo Gaido',
    postDate: '02/15/2022',
    profilePick: 'https://picsum.photos/200/300',
    post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postPick: '',
    likes: '25'
},
{
    id: '5',
    author: 'Gigi Carbotta',
    postDate: '03/15/2022',
    profilePick: '',
    post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postPick: '',
    likes: '8'
},
{
    id: '6',
    author: 'Mario Rossi',
    postDate: '04/15/2022',
    profilePick: 'https://picsum.photos/200/300',
    post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    postPick: 'https://picsum.photos/200/300',
    likes: '100'
},
]
// prendo l'elemento in pagina
const socialPage = document.getElementById('social-page')
data.forEach(element => {
   // prendo ogni elemento dell'aray 
    const {id ,author, postDate, profilePick, post, postPick, likes} = element;

    console.log(element) 
});