<template>
  <div class="row">
    <Navigation />
    <section id="comprar" class="comprar">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="comprar-title">
              <h2 class="text-uppercase">{{producto.Nombre}}</h2>
              <p>${{producto.Precio}}</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="comprar-options-container">
              <div class="btn-group-vertical grupo" role="group" aria-label="Left Align">
                <button type="button" class="btn btn-primary">
                  <div class="form-check comprar-options-item">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="rad1" />
                    <!--<i class="fa fa-cc-mastercard"></i>-->
                    <label for="rad1">Tarjeta de Debito/Credito</label>
                  </div>
                </button>
                <button type="button" class="btn btn-primary">
                  <div class="form-check comprar-options-item">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="rad2" />
                    <!-- <i class="fa fa-money"></i>  -->
                    <label for="rad2">Deposito</label>
                  </div>
                </button>
                <button type="button" class="btn btn-primary">
                  <div class="form-check comprar-options-item">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="rad3" />
                    <!-- <i class="fa fa-paypal"></i>  -->
                    <label for="rad3">Paypal</label>
                  </div>
                </button>
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
      }
    };
  },
  components: {
    Navigation
  }
};
</script>

<style  scoped>
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
.grupo {
  margin-top: 20px;
}
.grupo .btn {
  background: transparent;
  border: 1px solid #28a7e9;
  border-radius: 0px;
  color: #28a7e9;
  font-weight: bold;
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 20px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}
.grupo .btn:hover {
  background: #28a7e9;
  color: #fff;
}
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
</style>