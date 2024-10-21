<template>
  <div>
    <custom-modal ref="modal">
      <template v-slot:title><h2>{{ $t('modalC.title') }}</h2></template>
      <template v-slot:content>
        <p>
          {{ $t('modalC.contentPart1') }}
        </p>
        <p>
          {{ $t('modalC.contentPart2') }}
        </p>
        <p>
          {{ $t('modalC.contentPart3') }}
        </p>
      </template>
    </custom-modal>
  </div>
</template>
<script>
import CustomModal from "../CustomModal.vue";
import { Modal } from "bootstrap";
export default {
  components: { CustomModal },
  methods: {
    show() {
      let modal = new Modal(this.$refs.modal.$refs.staticBackdrop);
      modal.show();
    },
  },
};
</script>