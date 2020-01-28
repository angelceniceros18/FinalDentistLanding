<template>
    <div class="app">
        

        <main>
            <Navigation v-model="cfg"/>
            <Hero/>
            <Divider/>
            <Feature/>
            <Pricing/>
            <Download/>
            <Contact/>
            <Footer/>
            
        </main>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/PageFooter.vue'
import Pricing from '@/components/Pricing.vue'
import Contact from '@/components/Contact.vue'
import Divider from '@/components/Divider.vue'
import Feature  from '@/components/Feature.vue'
import Download from '@/components/Download.vue'
export default {
    name: 'Home',
    components: {
        Navigation,
        Contact,
        Divider,
        Feature,
        Download,
        Hero,
        Footer,
        Pricing
    },
    data() {
        return {
            cfg:{
                navs:[
                    {
                        name: 'Inicio',
                        ref: '#home'
                    },
                    {
                        name: 'Caracteristicas',
                        ref: '#feature'
                    },
                    {
                        name: 'Precios',
                        ref: '#pricing'
                    },
                    {
                        name: 'Ver Demo',
                        ref: '#download'
                    },
                    {
                        name: 'Contactanos',
                        ref: '#contact'
                    },
                ],
                isHome: true,
            }
        }
    },
}
</script>

<style scoped>

</style>