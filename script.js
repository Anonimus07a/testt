let input = document.querySelectorAll ('input'),
    form = document.querySelector ('form'),
    number = document.querySelector('select'),
    content = document.getElementById('content');

form.addEventListener('submit', e => {
    e.preventDefault()
    let users = [
        {
            Kitob_nomi: input[0].value,
            Kitob_muallifi: input[1].value,
            yoshi: number.value,
        },
    ]
    if (
        users[0].Kitob_nomi === '' ||
        users[0].Kitob_muallifi === '' ||
        users[0].Kitob_nomi === null ||
        users[0].Kitob_muallifi === null
    ) {
        alert("Ma'lumotlaringizni kiriting")
    } else {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = `<div id='row'><h2 class='alert alert-danger'>
        Kitob_nomi: ${users[0].Kitob_nomi} -- Kitob_muallifi: ${users[0].Kitob_muallifi} -- Soni: ${users[0].yoshi
            }--ulashish: ${input[2].checked ? 'Ha' : 'Yuq'
            } <button class="btn btn-danger" onclick="remove(this)">Delete</button></h2></div>`
        content.append(newDiv)
        form.reset()
    }
})
function remove(btn) {
    btn.closest('div').remove()
}