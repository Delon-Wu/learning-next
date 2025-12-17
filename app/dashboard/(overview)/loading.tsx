// loading.tsx is a special Next.js file
// 文件（overview）为一个route分组，overview不会出现在URL中

import DashboardSkeleton from "../../ui/skeletons";

export default function Loading() {
  return <DashboardSkeleton />;
}