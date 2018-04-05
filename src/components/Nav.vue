<template>
  <div :class="$.nav">
    <Menu
      v-if="$ctrl.resource.sources.length"
      :class="$.navMenu"
      @click.native="onToggleFileList"
    />

    <ul v-if="displayFileList" :class="$.fileList" @mousedown.stop>
      <li
        v-for="(src, index) in $ctrl.resource.sources"
        :key="index"
        :class="[$.fileListItem, {
          [$.active]: $ctrl.resource.selectedIndex === index,
          [$.missingContent]: !$ctrl.resource.sourceContents[index] && !$ctrl.resource.overrides[index],
        }]"
        :title="src"
        @click="onSelectOriginal(index)"
      >
        {{src}}
      </li>
    </ul>

    <span :class="$.navTitle" :title="$ctrl.resource.selectedFileName">
      {{$ctrl.resource.selectedFileName}}
    </span>

    <span :class="$.panelButtonGroup">
      <a
        v-for="item in panels"
        v-show="!item.hidden"
        :key="item.name"
        :class="[$.panelButton, { [$.active]: !item.hidden && enabledPanels[item.name] }]"
        href="javascript:"
        @click="onTogglePanel(item.name)"
      >
        {{item.displayName}}
      </a>
    </span>
  </div>
</template>

<script>
  import Menu from './icons/Menu'

  export default {

    components: { Menu },

    props: {

      panels: { type: Array, required: true },

      enabledPanels: { type: Object, required: true },
    },

    data() {
      return {

        displayFileList: false,
      }
    },

    created() {
      this.onHideFileList = this.onHideFileList.bind(this)
    },

    mounted() {
      window.addEventListener('mousedown', this.onHideFileList)
    },

    beforeDestroy() {
      window.removeEventListener('mousedown', this.onHideFileList)
    },

    methods: {

      onToggleFileList() {
        this.displayFileList = !this.displayFileList
      },

      onHideFileList() {
        this.displayFileList = false
      },

      onSelectOriginal(index) {
        this.displayFileList = false
        this.$ctrl.resource.selectedIndex = index
      },

      onTogglePanel(type) {
        this.$emit('toggle', type)
      },
    },
  }
</script>

<style module="$">
  .nav {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    line-height: 24px;
    padding: 8px;
    color: #bbb;
    background: #444;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  }
  .navMenu {
    flex: 0 0 auto;
    cursor: pointer;
    fill: #bbb;
  }
  .fileList {
    position: fixed;
    top: 46px;
    left: 6px;
    min-width: 200px;
    max-width: 90%;
    max-width: calc(100% - 12px);
    max-height: 90%;
    max-height: calc(100% - 52px);
    overflow: auto;
    list-style: none;
    margin: 0;
    padding: 4px 0;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    color: #888;
    background: #fff;
    z-index: 100;
    user-select: none;
  }
  .fileListItem {
    padding: 5px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .fileListItem:hover {
    background: #f6f6f6;
  }
  .fileListItem.active {
    background: #eaeaea;
    color: #333;
  }
  .fileListItem.missingContent {
    color: #CD5C5C;
  }
  .navTitle {
    margin-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .navTitle::selection {
    background: #777;
  }
  .panelButtonGroup {
    flex: 0 0 auto;
    margin-left: auto;
    user-select: none;
  }
  .panelButton {
    display: inline-block;
    margin-left: 8px;
    color: #bbb;
    text-decoration: none;
  }
  .panelButton.active {
    color: white;
  }
</style>
