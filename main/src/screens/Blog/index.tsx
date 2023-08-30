import { useNavigate, useSearchParams } from 'react-router-dom';
import { mountRemoteComponent } from '@/utils/loadComponent';

const Blog = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return mountRemoteComponent({
    module: 'blog', component: 'PostView', props: {
      navigate,
      searchParams: {
        categoryId: Number(searchParams.get('category')),
        search: searchParams.get('search')
      }
    }
  })
}

export default Blog;
