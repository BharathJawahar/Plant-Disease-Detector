async function predictApple() {
      const thisForm = document.getElementById('myForm');
      var thisFile = document.getElementById('file1');
      var name
      var formdata = new FormData();
      formdata.append("file", thisFile.files[0]);
  
      var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        const response = await fetch("http://localhost:8000/predictPotato", requestOptions)
        var data = await response.json();
        console.log(data);
        document.getElementById("disease").innerHTML = data.class
        document.getElementById("cause").innerHTML = data.cause
        document.getElementById("dis").innerHTML = data.dispcription
        document.getElementById("treat").innerHTML = data.treatment
        document.getElementById("prevention").innerHTML = data.prevention
      }
    
      var loadFile = function(event) {
        var output = document.getElementById('img');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
        }
      };

  