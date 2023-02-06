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

export default getData;
