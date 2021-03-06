<template>
  <div class="drop-cap-container">
    <ContentEditable
      ref="text"
      class="drop-cap"
      :style="style"
      :content="element.content"
      @blur="updateContent"
    ></ContentEditable>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { DropCapElement } from '@/models/Element';
import ContentEditable from '@/components/ContentEditable.vue';
import { withZoom } from '@/utils/withZoom';
import { PageSetup } from '@/models/PageSetup';
import { getFontFamilyWithFallback } from '@/utils/getFontFamilyWithFallback';

@Component({
  components: {
    ContentEditable,
  },
})
export default class DropCap extends Vue {
  @Prop() element!: DropCapElement;
  @Prop() pageSetup!: PageSetup;

  editable: boolean = false;

  get textElement() {
    return this.$refs.text as ContentEditable;
  }

  get style() {
    const style = {
      color: this.element.color || this.pageSetup.dropCapDefaultColor,
      fontFamily: getFontFamilyWithFallback(
        this.element.fontFamily || this.pageSetup.dropCapDefaultFontFamily,
      ),
      fontSize: withZoom(
        this.element.fontSize || this.pageSetup.dropCapDefaultFontSize,
      ),
    } as CSSStyleDeclaration;

    return style;
  }

  focus() {
    this.textElement.focus(true);
  }

  updateContent(content: string) {
    // Nothing actually changed, so do nothing
    if (this.element.content === content) {
      return;
    }

    this.$emit('update:content', content);
  }
}
</script>

<style scoped></style>
