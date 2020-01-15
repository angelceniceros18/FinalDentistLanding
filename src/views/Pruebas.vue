<template>
    <div class="app">
        <main>
            <TopBar/>
            <h1>Hola</h1>
            <Contact/>
            <Divider/>
            <Download/>
            <Feature/>
        </main>
    </div>
</template>

<script>

import TopBar from '@/components/Navigation.vue'
import Contact from '@/components/Contact.vue'
import Divider from '@/components/Divider.vue'
import Feature  from '@/components/Feature.vue'
import Download from '@/components/Download.vue'

export default {
    name: 'Home',
    components: {
        TopBar,
        Contact,
        Divider,
        Feature,
        Download,
    }
}
</script>