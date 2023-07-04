import Index from '@/pages/index.vue';
import NotFound from '@/pages/not-found.vue';
import FlowChart from '@/pages/flowChart.vue';
import BaseGraph from '@/pages/base/graph.vue';
import BaseGrid from '@/pages/canvas/grid.vue';
import BaseBackground from '@/pages/canvas/background.vue';
import BaseGraphMove from '@/pages/canvas/graphMove.vue';
import BaseGraphZoom from '@/pages/canvas/graphZoom.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/flowChart', component: FlowChart },
  { path: '/base/graph', component: BaseGraph },
  { path: '/canvas/grid', component: BaseGrid },
  { path: '/canvas/background', component: BaseBackground },
  { path: '/canvas/graphZoom', component: BaseGraphZoom },
  { path: '/canvas/graphMove', component: BaseGraphMove },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
