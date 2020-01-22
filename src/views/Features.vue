<template>
    <div class="app">
        

        <main>
            <Navigation v-model="navs"/>
        </main>

    </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue'

export default {
    name: 'Features',
    data() {
        return {
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
            ]
        }
    },
    components:{
        Navigation,
    }
}

</script>