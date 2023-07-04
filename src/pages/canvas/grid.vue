<template>
  <div class="container" />
</template>

<script>
import { Graph } from '@antv/x6';

import { ref, onMounted } from 'vue';

const container = ref(null);
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

onMounted(() => {
  const graph = new Graph({
    container: container.value,
    grid: {
      visible: true,
    },
    background: {
      color: '#F2F7FA',
    },
    mousewheel: {
      enabled: true,
      minScale: 0.2,
      maxScale: 4,
    },
  });
  graph.fromJSON(data);
  graph.centerContent(); // 居中显示
});

</script>

<style lang="scss" scoped>

</style>
