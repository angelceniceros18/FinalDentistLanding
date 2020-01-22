<template>
  <nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
      <a href="#" class="navbar-brand">Organizator</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right text-uppercase">
        <li v-for="(item, index) in value" :key="index" @click="function(){$router.push(item.ref)}"><a :href="item.ref">{{item.name}}</a></li>
      </ul>
    </div>
  </div>
</nav>

</template>
<script>
export default {
  name: 'Navigation',
  props: ['value'],
}
</script>