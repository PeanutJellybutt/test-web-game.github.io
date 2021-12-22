<template>
<div id="panel-wrap" :class="[
    'panel-wrap d-flex align-items-center justify-content-center', !$device.isDesktop ? 'mobile' : 'desktop'
  ]"> 
        <pre style="position: absolute;color: white;top: 0;left: 0;background-color: black;z-index: 500;opacity: 0.5">
         isDesktop={{$device}}</pre>
  <div class="panel-bg-main" id="panel-bg-main">
    <div class="gm4html5_div_class" id="gm4html5_div_id">
        <canvas id="canvas" class="canvas">
          <p>Your browser doesn't support HTML5 canvas.</p>
        </canvas>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {};
  },
  created: async function () {},
  methods: {},
};
</script>