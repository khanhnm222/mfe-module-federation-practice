import { mountRemoteComponent } from '@/utils/loadComponent';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const BlogDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return mountRemoteComponent({
    module: "blog", component: "PostDetailView", props: {
      navigate,
      id: params.id,
      searchParams: {
        categoryId: Number(searchParams.get('category')),
        search: searchParams.get('search')
      }
    }
  });
}

export default BlogDetail;
