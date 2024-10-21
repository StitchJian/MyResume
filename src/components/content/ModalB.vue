<template>
  <div>
    <custom-modal ref="modal">
      <template v-slot:title>
        <h2> {{ $t('modalB.title') }}</h2>
      </template>
      <template v-slot:content>
        <p> {{ $t('modalB.contentPart1') }} </p>
      </template>
    </custom-modal>
  </div>
</template>
<script>
import CustomModal from "../CustomModal.vue";
import { Modal } from 'bootstrap'
export default {
  components: { CustomModal },
  methods: {
    show() {
      let modal = new Modal(this.$refs.modal.$refs.staticBackdrop);
      modal.show()
    },
  },
};
</script>