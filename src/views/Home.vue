<template>
    <div class="app">
        

        <main>
            <Navigation/>
            <Hero/>
            <Pricing/>
            
            <Footer/>
        </main>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/PageFooter.vue'
import Pricing from '@/components/Pricing.vue'
export default {
    name: 'Home',
    components: {
        Navigation,
        Hero,
        Footer,
        Pricing
    }
}
</script>

<style scoped>

</style>