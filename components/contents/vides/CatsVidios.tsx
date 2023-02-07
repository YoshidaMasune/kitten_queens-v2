import React from 'react';

const linkes = [
  'https://www.youtube.com/embed/x8fVvhMWP80',
  'https://www.youtube.com/embed/9YeXnYg2_1Q',
  'https://www.youtube.com/embed/FQjiexhx4Uc',
  //   'https://www.youtube.com/embed/7wj_kfKXxMg',
  //   'https://www.youtube.com/embed/3NygEITEncc',
];

function CatsVidios() {
  return (
    <div className="container mx-auto space-y-10 py-20">
      <div>
        <article className="text-4xl text-center">
          <h2 className=" text-sky-800">Video</h2>
          <h2 className="text-yellow-600">ที่น่าสนใจ</h2>
        </article>
      </div>
      <div className="grid grid-flow-col justify-items-center">
        {linkes.map((vi, index) => (
          <Video link={vi} key={index} />
        ))}
      </div>
    </div>
  );
}

interface video {
  link: string;
}

const Video = ({ link }: video) => {
  return (
    <iframe
      className="rounded-lg"
      width="360"
      height="215"
      src={link}
      title="YouTube video player"
      allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};
export default CatsVidios;
