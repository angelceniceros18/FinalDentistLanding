<template>
  <div class="row">
    <Navigation />
    <section id="comprar" class="comprar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="comprar-title">
              <h2 class="text-uppercase">{{producto.Nombre}}</h2>
              <p>Pago único de ${{producto.Precio}}</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="comprar-options-container">
              <div class="btn-group-vertical grupo" role="group" aria-label="Left Align">
                <div class="grupo-title">
                  <h3>Ingrese Datos de Pago</h3>
                </div>

                <button @click="seleccionar" type="button" class="btn btn-primary op1">
                  <div class="check-option comprar-options-item op1">
                    <div class="izquierda op1">
                      <div class="circle op1">
                        <div id="circle1" class="circle-checked hide op1"></div>
                      </div>
                      <label class="op1">Tarjeta de Debito/Credito</label>
                    </div>
                    <div class="derecha op1">
                      <i class="fa fa-cc-mastercard op1"></i>
                    </div>
                  </div>
                </button>

                <div v-if="OpPago===1" class="detallesPago">
                  <div class="detallesPago-Names">
                    <input type="text" placeholder="Nombre de titular de la tarjeta" />
                    <!-- <input type="text" placeholder="Apellidos de titular de la tarjeta" /> -->
                    <input type="text" placeholder="Numero de tarjeta" />
                  </div>
                  <div class="detallesPago-Card">
                    <input type="text" placeholder="Fecha de Expiracion" />
                    <input type="text" placeholder="CVV" />
                  </div>
                  <div class="pagar-container">
                    <button id="Pagar" type="button" class="btn btn-primary pagar">Pagar</button>
                  </div>
                </div>
                <button @click="seleccionar" type="button" class="btn btn-primary op2">
                  <div class="check-option comprar-options-item op2">
                    <div class="izquierda op2">
                      <div class="circle op2">
                        <div id="circle2" class="circle-checked hide op2"></div>
                      </div>
                      <label class="op2">Deposito</label>
                    </div>
                    <div class="derecha op2">
                      <i class="fa fa-money op2"></i>
                    </div>
                  </div>
                </button>
                <button @click="seleccionar" type="button" class="btn btn-primary op3">
                  <div class="check-option comprar-options-item op3">
                    <div class="izquierda op3">
                      <div class="circle op3">
                        <div id="circle3" class="circle-checked hide op3"></div>
                      </div>
                      <label class="op3">Paypal</label>
                    </div>
                    <div class="derecha op3">
                      <i class="fa fa-paypal op3"></i>
                    </div>
                  </div>
                </button>
                <div v-if="OpPago===3" class="detallesPago">
                  <div class="button-paypal">
                    <a href="paypal.com">
                      <img
                        src="https://www.paypalobjects.com/webstatic/es_MX/mktg/logos-buttons/redesign/btn_13.png"
                        alt="PayPal Credit"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Comprar",
  data() {
    return {
      producto: {
        Nombre: "Plan Basico",
        Precio: 500
      },
      OpPago: 0
    };
  },
  components: {
    Navigation
  },
  methods: {
    seleccionar() {
      const buttonSelected = event.target.classList;
      if (buttonSelected.contains("op1")) {
        if (!this.isSelected("op1")) {
          this.OpPago = 1;
          const circle = document.getElementById("circle1");
          this.marcarRadio(circle);
        } else {
          this.OpPago = 0;
          const circle = document.getElementById("circle1");
          circle.classList.add("hide");
        }
      } else {
        if (buttonSelected.contains("op2")) {
          if (buttonSelected.contains("op2")) {
            if (!this.isSelected("op2")) {
              this.OpPago = 2;
              const circle = document.getElementById("circle2");
              this.marcarRadio(circle);
            } else {
              this.OpPago = 0;
              const circle = document.getElementById("circle2");
              circle.classList.add("hide");
            }
          }
        } else {
          if (buttonSelected.contains("op3")) {
            if (!this.isSelected("op3")) {
              this.OpPago = 3;
              const circle = document.getElementById("circle3");
              this.marcarRadio(circle);
            } else {
              this.OpPago = 0;
              const circle = document.getElementById("circle3");
              circle.classList.add("hide");
            }
          }
        }
      }
    },
    isSelected(option) {
      switch (option) {
        case "op1": {
          if (this.OpPago === 1) {
            return true;
          }
          return false;
        }
        case "op2": {
          if (this.OpPago === 2) {
            return true;
          }
          return false;
        }
        case "op3": {
          if (this.OpPago === 3) {
            return true;
          }
          return false;
        }
      }
    },
    marcarRadio(circle) {
      this.desmarcarAllRadios();
      circle.classList.remove("hide");
    },
    desmarcarAllRadios() {
      document.getElementById("circle1").classList.add("hide");
      document.getElementById("circle2").classList.add("hide");
      document.getElementById("circle3").classList.add("hide");
    }
  }
};
</script>

<style  scoped>
/* Start Comprar view */
#comprar {
  background: #f8f8f8;
  text-align: center;
  padding-top: 80px;
  height: 100vh;
}
.comprar p {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial;
}
.comprar-title {
  /* background: rgb(247, 241, 241); */
  border-bottom: 1px solid lightgray;
}
.circle {
  display: flex !important;
  margin: 0;

  margin-right: 15px;
  padding: 0px;
  height: 20px;
  width: 20px;
  border: 1px solid lightgray;
  border-radius: 50%;

  justify-content: center !important;
  align-items: center !important;
  text-align: center;
}
.circle-checked {
  margin: 0;
  padding: 0;
  height: 10px;
  width: 10px;
  background: #28a7e9;
  border-radius: 50%;
  display: block;
}
.comprar-options-item {
  display: flex;
}
.izquierda {
  display: flex;
}
.derecha {
  margin-left: auto;
}
.grupo {
  width: 100%;
  margin-top: 20px;
}
.grupo-title {
  margin-bottom: 15px;
}

.grupo button input:hover,
.grupo button label:hover {
  cursor: pointer;
}

.grupo .btn {
  background: transparent;
  border: none;
  /* border-bottom: 1px solid #28a7e9; */
  border-bottom: 1px solid lightgray;

  color: #28a7e9;
  font-weight: bold;
  padding-right: 40px;
  padding-left: 40px;
  margin: 0;
  transition: all 0.3s ease;
}
.grupo .btn:last-child {
  border-bottom: none;
}

/* .grupo .btn:hover {
  background: #28a7e9;
  color: #fff;
} */
.comprar input {
  margin-right: 5px;
}
.comprar-options-item {
  display: flex;
}
.comprar-options-container {
  margin: 0 auto;
  margin-top: 45px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: #fff;
  width: 500px;
  -webkit-box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.63);
}
.comprar-options-container:hover {
  -webkit-box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.63);
}
.detallesPago {
  padding: 15px;
  padding-top: 0;
}
.detallesPago input {
  height: 3em;
  font-size: 16px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
.detallesPago-Names {
  display: block;
  padding: 10px;
  padding-bottom: 0;
}
.detallesPago-Names input {
  width: 100%;
}
.detallesPago-Card {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-top: 0;
}
.pagar-container {
  padding: 10px;
  padding-top: 0;
}
.pagar {
  width: 100%;

  border-radius: 5px !important;
  background: #28a7e9 !important;
  color: white !important;
  margin: 0 !important;
}
.pagar:hover {
  border: 1px solid #57bcf1;
  background: #57bcf1 !important;
}
.button-paypal {
  padding: 15px;
}
/* end comprar view */
</style>