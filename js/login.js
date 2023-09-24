
        function login() {
            const username = document.getElementById('emailLogin').value;
            const password = document.getElementById('emailPassword').value;

            if (username.trim() === '' || password.trim() === '') {
                alert('Please enter both username and password.');
            } else {
                alert('Login successful!'); // Replace this with your actual login logic
                // You can redirect the user to another page or perform further actions here
            }
        }function singIn() {
            var form = document.getElementById('formulario');
            var dados = new FormData(form);
        
            fetch("php/singIn.php", {
                method: "POST",
                body: dados
            });
        }
        


