<template>
  <div class="details-modal">
      <div @click="$emit('close')" class="details-modal-close">
        close
      </div>
      <div class="details-modal-title">
        <h1>Email subject</h1>
      </div>
      <div class="details-modal-content">
        <p>
          You can click the X in the corner or click the overlay to close this modal.
          Something like this could be useful as a nice way to show additional information,
          but that's about as far as I would take it. It's just a nice way of styling the details element.
        </p>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ViewEmail",
});
</script>
<style lang="scss">
.details-modal {
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(black, 0.2);
  left: 50%;
  max-width: 90%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30em;
  text-align: left;
  height: 100vh;
  display: flex;
  flex-direction: column;

  // -------------- CLOSE

  .details-modal-close {
    align-items: center;
    color: #111827;
    display: flex;
    height: 4.5em;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 4.5em;

    svg {
      display: block;
    }
  }

  // -------------- TITLE

  .details-modal-title {
    color: #111827;
    padding: 1.5em 2em;
    pointer-events: all;
    position: relative;
    width: calc(100% - 4.5em);

    h1 {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: normal;
    }
  }

  // -------------- CONTENT

  .details-modal-content {
    border-top: 1px solid #e0e0e0;
    padding: 2em;
    pointer-events: all;
    overflow: auto;
  }
}

.details-modal-overlay {
  transition: opacity 0.2s ease-out;
  pointer-events: none;
  background: rgba(#0f172a, 0.8);
  position: fixed;
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  details[open] & {
    pointer-events: all;
    opacity: 0.5;
  }
}

</style>
