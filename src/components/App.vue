<template>
  <div :class="$.app">
    <div :class="$.nav">
      <Menu v-if="model.sources.length" :class="$.navMenu" @click.native="onToggleFileList" />
      <ul v-if="displayFileList" :class="$.fileList" @mousedown.stop>
        <li
          v-for="(src, index) in model.sources"
          :key="index"
          :class="[$.fileListItem, {
            [$.active]: model.selectedIndex === index,
            [$.missingContent]: !model.sourceContents[index] && !model.overrides[index],
          }]"
          :title="src"
          @click="onSelectOriginal(index)"
        >
          {{src}}
        </li>
      </ul>
      <span :class="$.navTitle" :title="model.selectedFileName">
        {{model.selectedFileName}}
      </span>
      <span :class="$.panelButtonGroup">
        <a
          v-for="item in panels"
          :key="item.name"
          :class="[$.panelButton, { [$.active]: !item.hidden && enabledPanels[item.name] }]"
          href="javascript:"
          @click="togglePanel(item.name)"
        >
          {{item.displayName}}
        </a>
      </span>
    </div>

    <div :class="$.container">
      <SourcePanel
        v-for="item in panels"
        v-if="!item.hidden && enabledPanels[item.name]"
        :key="item.name"
        :ref="item.name"
        :content="item.content"
        :hovering="hovering"
        :line-number="item.lineNumber"
        @hover="onHover"
        @select="onSelect($event, item.name)"
        @scroll="onScroll($event, item.name)"
        @upload="onUpload($event, item.name)"
      >
        <div :class="$.promoteText">{{item.promoteText}}</div>
        <div v-if="item.promoteTips" :class="$.promoteTips">{{item.promoteTips}}</div>
      </SourcePanel>
    </div>
  </div>
</template>

<script>
  import path from 'path'

  import Menu from './icons/Menu'
  import SourcePanel from './source/SourcePanel'
  import createModel from '../models'

  const SCROLL_SYNC = {
    generated: 'sourceMap',
    sourceMap: 'generated',
  }

  export default {

    components: { Menu, SourcePanel },

    data() {
      return {

        model: createModel(),

        hovering: null,

        displayFileList: false,

        enabledPanels: { generated: true, sourceMap: true, original: true },
      }
    },

    computed: {

      panels() {
        const { model } = this

        return [
          {
            displayName: 'Generated',
            name: 'generated',
            content: model.generatedView,
            lineNumber: true,
            promoteText: `Drop ${model.generatedFileName || 'generated file'} here`,
          },
          {
            displayName: 'SourceMap',
            name: 'sourceMap',
            content: model.mappingsView,
            promoteText: `Drop ${model.sourceMapFileName || 'sourcemap file'} here`,
          },
          {
            displayName: 'Original',
            name: 'original',
            hidden: model.selectedFileName == null,
            content: model.selectedView,
            lineNumber: true,
            promoteText: model.selectedFileName && `Drop ${path.basename(model.selectedFileName)} here`,
            promoteTips: model.selectedFileName,
          },
        ]
      },
    },

    created() {
      this.onHideFileList = this.onHideFileList.bind(this)
    },

    mounted() {
      window.addEventListener('mousedown', this.onHideFileList)
    },

    beforeDestroy() {
      window.removeEventListener('mousedow', this.onHideFileList)
    },

    methods: {

      onUpload(files, type) {
        this.displayFileList = false
        this.model.handleFiles(files, type)
      },

      onHover(id) {
        this.hovering = id
      },

      onSelect(mapping, type) {
        if (type === 'original') {
          this.scrollToLine(mapping.generatedLine, 'generated')
          return this.scrollToLine(mapping.generatedLine, 'sourceMap')
        }
        this.model.selectedIndex = mapping.source
        this.$nextTick(() => {
          this.scrollToLine(mapping.originalLine, 'original')
        })
      },

      onScroll(scrollTop, type) {
        for (const panel of this.$refs[SCROLL_SYNC[type]] || []) {
          panel.scrollTo(scrollTop)
        }
      },

      onToggleFileList() {
        this.displayFileList = !this.displayFileList
      },

      onHideFileList() {
        this.displayFileList = false
      },

      onSelectOriginal(index) {
        this.displayFileList = false
        this.model.selectedIndex = index
      },

      scrollToLine(line, target) {
        for (const panel of this.$refs[target] || []) {
          panel.scrollToLine(line)
        }
      },

      togglePanel(type) {
        this.enabledPanels[type] = !this.enabledPanels[type]
      },
    },
  }
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #bbb;
  }
  *::-webkit-scrollbar-track {
    background: #eee;
  }
</style>

<style module="$">
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
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
    top: 6px;
    left: 6px;
    max-width: 90%;
    max-width: calc(100% - 12px);
    max-height: 90%;
    max-height: calc(100% - 12px);
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
  .container {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }
  .container > * {
    flex: 1 auto;
    width: 1px;
  }
  .promoteText {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5em;
    color: #aaa;
  }
  .promoteTips {
    white-space: nowrap;
    font-size: .9em;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
  }
</style>
