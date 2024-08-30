<template>
  <div>
    <div
      class="modal fade"
      ref="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              <slot name="title">content</slot>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body"><slot name="content">content</slot></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomModal",
};
</script>