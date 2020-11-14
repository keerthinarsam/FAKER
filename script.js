let btnGen = document.querySelector('button');
 
btnGen.addEventListener('click', () => {
    let info = faker.helpers.createCard();
    
    let {name, email, phone , address:{city, country, zipcode}} = info;
 
    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    document.querySelector('#phone').value = phone;
    document.querySelector('#city').value = city;
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#country').value = country;
    
});