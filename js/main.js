const calculadora = {
    pantalla: document.querySelector(".pantalla"),
    botones: document.querySelectorAll(".btn"),
    operadores: ['+', '-', '*', '/'],

    handleClear: function() {
        this.pantalla.textContent = "0";
    },

    handleDelete: function() {
        if (this.pantalla.textContent.length === 1 || this.pantalla.textContent === "Error!") {
            this.pantalla.textContent = "0";
        } else {
            this.pantalla.textContent = this.pantalla.textContent.slice(0, -1);
        }
    },

    handleEquals: function() {
        try {
            this.pantalla.textContent = eval(this.pantalla.textContent);
        } catch {
            this.pantalla.textContent = "Error!";
        }
    },

    handleOtherButton: function(botonApretado) {
        if (this.pantalla.textContent === "0" || this.pantalla.textContent === "Error!") {
            this.pantalla.textContent = botonApretado;
        } else {
            if (this.operadores.includes(botonApretado) && this.operadores.includes(this.pantalla.textContent.slice(-1))) {
                return;
            }
            this.pantalla.textContent += botonApretado;
        }
    },

    init: function() {
        const handleClick = (boton) => {
            const botonApretado = boton.textContent;

            if (boton.id === "c") {
                this.handleClear();
                return;
            }

            if (boton.id === "borrar") {
                this.handleDelete();
                return;
            }

            if (boton.id === "igual") {
                this.handleEquals();
                return;
            }

            this.handleOtherButton(botonApretado);
        };

        this.botones.forEach(boton => {
            boton.addEventListener("click", () => handleClick(boton));
        });
    }
};

// Inicializar la calculadora
calculadora.init();
