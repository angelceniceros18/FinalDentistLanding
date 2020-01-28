<template>
    <div class="app">
        <main>
            <Navigation v-model="cfg"/>
            <section id="home-features">
                <div class="overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-1"></div>
                                <div class="col-md-10 wow fadeIn" data-wow-delay="0.3s">
                                    <h1 class="text-upper">Agenda virtual para Dentistas</h1>
                                    <p>Desarrollado por
                                    <a
                                        rel="nofollow"
                                        href="http://www.facebook.com/templatemo"
                                        target="_parent"
                                    >@AlexisJuanes</a>. y
                                    <a rel="nofollow" href="http://pixabay.com" target="_blank">@angelceniceros18</a>
                                    </p>
                                </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container" id="what">
                <div class="row top-margin-l">
                    <div class="col wow fadeIn" data-wow-delay="1s">
                        <h1>¿Por qué usar *Nombre del Software*?</h1>
                        <h4>*Nombre del Software* es una aplicación enfocada a mejorar la eficiencia de su consultorio, 
                            con la ayuda de sus diferentes funciones podrá realizar tareas como agendar citas, tener un control sobre sus finanzas 
                            y mejorar la atención que reciben sus pacientes.
                        </h4>
                    </div>
                </div>
            </div>
            <Carousel/>
            <section id="divider-features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 wow fadeIn templatemo-box" data-wow-delay="0.6s">
                            <h1>
                                <span class="fa-stack fa-fw">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-user-md fa-stack-1x"></i>
                                </span>
                            </h1>
                            <h2 class="text-uppercase">Pacientes</h2>
                            <p>
                                Garantiza la confiaza de los pacientes y asegura una atención de calidad gracias a el seguimiento de pacientes que se encarga de  
                                registrar datos importantes, revisar consultas y crear historiales de citas.
                            </p>
                        </div>
                        <div class="col-md-12">
                            <div class="row top-margin-m">
                                <div class="col-md-1"></div>
                                <div class="col-md-6 wow fadeInLeft templatemo-box" data-wow-dela="1s">
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-address-book-o fa-stack-1x"></i>
                                        </span>
                                        Registra la manera de contactar con los pacientes.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-user fa-stack-1x"></i>
                                        </span>
                                        Crea perfiles con la información importante de cada paciente.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-bolt  fa-stack-1x"></i>
                                        </span>
                                        Obtén la información necesaria en instantes.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-heartbeat fa-stack-1x"></i>
                                        </span>
                                        Seguimiento de citas a pacientes.
                                    </h5>
                                </div>
                                <div class="col-md-4 wow fadeInRight templatemo-box" data-wow-dela="1s">
                                    <img src="../assets/images/doctor.jpg" alt="home img" class="img-raised"/>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 wow fadeIn templatemo-box" data-wow-delay="0.6s">
                            <h1>
                                <span class="fa-stack fa-fw">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-calendar fa-stack-1x"></i>
                                </span>
                            </h1>
                            <h2 class="text-uppercase">Agenda</h2>
                            <p>
                                Crea un horario de manera flexible a través de la agenda virtual. Se más productivo aprovechando al máximo el tiempo,
                                esta herramienta ofrece la posibilidad de registrar las citas de los pacientes de manera sencilla y además de visualizar
                                el calendario de citas.
                            </p>
                        </div>
                        <div class="col-md-12">
                            <div class="row top-margin-m">
                                <div class="col-md-1"></div>
                                <div class="col-md-4 wow fadeInLeft templatemo-box" data-wow-dela="1s">
                                    <img src="../assets/images/tablet.jpg" alt="home img" class="img-raised"/>
                                </div>
                                <div class="col-md-6 wow fadeInRight templatemo-box" data-wow-dela="1s">
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-calendar-check-o fa-stack-1x"></i>
                                        </span>
                                        Agrega citas y eventos a la agenda para que no los olvides.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-bars fa-stack-1x"></i>
                                        </span>
                                        Gestionar las citas de los pacientes segun su prioridad.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-bell-o fa-stack-1x"></i>
                                        </span>
                                        Creación de recordatorios para las citas.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-eye fa-stack-1x"></i>
                                        </span>
                                        Permite visualizar las citas por fecha y hora.
                                    </h5>
                                
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 wow fadeIn templatemo-box" data-wow-delay="0.6s">
                            <h1>
                                <span class="fa-stack fa-fw">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-balance-scale fa-stack-1x"></i>
                                </span>
                            </h1>
                            <h2 class="text-uppercase">Finanzas</h2>
                            <p>
                                Mantente al pendiente de tus ganancias y gastos que realices
                            </p>
                            <div class="row top-margin-m">
                                <div class="col-md-1"></div>
                                <div class="col-md-6 wow fadeInLeft templatemo-box" data-wow-dela="1s">
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-calendar-check-o fa-stack-1x"></i>
                                        </span>
                                        Agrega citas y eventos a la agenda para que no los olvides.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-bars fa-stack-1x"></i>
                                        </span>
                                        Gestionar las citas de los pacientes segun su prioridad.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-bell-o fa-stack-1x"></i>
                                        </span>
                                        Creación de recordatorios para las citas.
                                    </h5>
                                    <h5 class="side-description">
                                        <span class="fa-stack fa-fw">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-eye fa-stack-1x"></i>
                                        </span>
                                        Permite visualizar las citas por fecha y hora.
                                    </h5>
                                </div>
                                <div class="col-md-4 wow fadeInRight templatemo-box" data-wow-dela="1s">
                                    <img src="../assets/images/f.jpg" alt="home img" class="img-raised"/>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Download/>
            <PageFooter/>
        </main>
    </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue'
import PageFooter from '@/components/PageFooter.vue'
import Download from '@/components/Download.vue'
import Carousel from '@/components/Carousel.vue'

export default {
    name: 'Features',
    data() {
        return {
            cfg: {
                navs:[
                    {
                        name: 'Inicio',
                        ref: '/'
                    },
                    {
                        name: 'Caracteristicas',
                        ref: '/features'
                    },
                    {
                        name: 'Compra',
                        ref: '/comprar'
                    },
                ],
                isHome: false,
            }
        }
    },
    components:{
        Navigation,
        PageFooter,
        Download,
        Carousel,
    }
}

</script>