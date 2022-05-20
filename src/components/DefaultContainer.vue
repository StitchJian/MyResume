<template>
  <div>
    <default-header />
    <default-a-side />
    <default-form />
    <default-footer />
  </div>
</template>
<script>
import DefaultHeader from "./DefaultHeader.vue";
import DefaultASide from "./DefaultASide.vue";
import DefaultForm from "./DefaultForm.vue";
import DefaultFooter from "./DefaultFooter.vue";

export default {
  name: "DefaultContainer",
  components: { DefaultHeader, DefaultASide, DefaultForm, DefaultFooter },
};
</script>

