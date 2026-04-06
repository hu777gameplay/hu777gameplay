import BlogDetailController from "./blogDetail.controller";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  return <BlogDetailController params={resolvedParams} />;
}
