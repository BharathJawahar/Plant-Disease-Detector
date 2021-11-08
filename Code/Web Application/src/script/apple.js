function predictApple() {
    const thisForm = document.getElementById('myForm');
    let response = await fetch('http://localhost:5500/files', {
        method: 'POST',
        body: new FormData(thisForm)
    });

    let result = await response.json();
    alert(result.message)
    console.log(result)
}


