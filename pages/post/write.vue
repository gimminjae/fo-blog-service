<template>
  <div>
      <div class="d-flex gap-3 mb-1">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">제목</span>
              </div>
              <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
          </div>
          <div class="input-group">
              <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">시리즈</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
      </div>
      <div ref="editor" class="mb-2" />
      <div class="">
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">저장</button>
              <button type="button" class="btn btn-secondary">임시저장</button>
          </div>
      </div>
  </div>
</template>
<script setup>
import Editor from '@toast-ui/editor';

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: '',
    },
});
const emit = defineEmits(['update:modelValue']);
const editor = ref();
onMounted(() => {
    const e = new Editor({
        el: editor.value,
        height: '700px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        events: {
            change: () => emit('update:modelValue', e.getMarkdown()),
        },
    });
});
setPageLayout('post-layout')
</script>
<style scoped>
</style>