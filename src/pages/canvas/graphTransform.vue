<template>
  <!-- 画图宽高 -->
  <div>
    <label>
      宽度：
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        class="range range-xs"
      >
    </label>
  </div>
  <div
    ref="container"
    class="h-screen w-screen"
  />
</template>

<script setup>
import { Graph } from '@antv/x6';
import { ref, onMounted } from 'vue';

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      label: 'x6',
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
};
const container = ref(null);
let graph;
onMounted(() => {
  graph = new Graph({
    container: container.value,
    // 通过 scaling 配置画布的最小或最大缩放级别。
    scaling: {
      min: 0.05, // 默认值为0.0.1 最小
      max: 12, // 默认值16
    },
  });
  graph.fromJSON(data);
  graph.centerContent();
});
</script>

<style lang="scss" scoped></style>
