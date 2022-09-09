let person = {
    firstname: 'Fulan',
    lastname: 'Fulani',
    id: 1234,
    cetakNama: () => {return person.firstname+' '+person.lastname}
}

console.log(person.cetakNama())