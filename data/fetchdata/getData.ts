// fetch data from @data/
import { cats } from '@/data/cats';
import { blogs } from '@/data/blogs';
import { knowlages } from '@/data/knowlages';

function getData(dataName: string) {
  // return switch case

  // if paramiter match a data.name return that
  if (dataName === 'cats') {
    return cats;
  } else if (dataName === 'blogs') {
    return blogs;
  } else if (dataName === 'knowlages') {
    return knowlages;
  } else {
    return ['no data'];
  }
}

interface blogget {
  id?: number;
}

const getBlog = ({ id }: blogget) => {
  return blogs.filter((blog) => (blog.id === id ? true : false));
};
const getcat = ({ id }: blogget) => {
  return cats.filter((blog) => (blog.id === id ? true : false));
};
const getknowlages = ({ id }: blogget) => {
  return knowlages.filter((blog) => (blog.id === id ? true : false));
};

export { getBlog, getcat, getknowlages };

export default getData;
