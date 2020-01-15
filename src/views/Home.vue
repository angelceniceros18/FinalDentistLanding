<template>
    <div class="app">
        <main>
            <TopBar/>
            <h1>Hola</h1>
        </main>
    </div>
</template>

<script>

import TopBar from '@/components/Navigation.vue'

export default {
    name: 'Home',
    components: {
        TopBar,
    }
}
</script>

<style scoped>

</style>