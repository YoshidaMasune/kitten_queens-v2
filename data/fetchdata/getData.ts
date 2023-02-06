import { knowlage } from './../knowlages';
import { cat } from './../cats';
import { blog } from './../blogs';
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
  id: number;
}

const getBlog = (id: any) => {
  let data: blog | any = {};
  blogs.map((item) => {
    if (item.id == Number(id)) {
      data = { ...item };
    }
  });
  return data;
};
const getcat = ({ id }: blogget) => {
  let data: cat | any = {};
  cats.map((item) => {
    if (item.id == Number(id)) {
      data = { ...item };
    }
  });
  return data;
};
const getknowlages = ({ id }: blogget) => {
  let data: knowlage | any = {};
  knowlages.map((item) => {
    if (item.id == Number(id)) {
      data = { ...item };
    }
  });
  return data;
};

export { getBlog, getcat, getknowlages };

export default getData;
