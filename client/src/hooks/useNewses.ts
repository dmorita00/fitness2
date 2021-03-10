import { useQuery } from 'react-query';
import {News} from "../models/news";
import * as contentful from 'contentful';
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type NewsesReq = {
  sortTarget: string;
  sortType: string;
  page: number;
  pageSize: number;
}

// type NewsesRes = {
//   total: number;
//   newses: News[]
// }

const options = {
  renderNode: {
    // 改行を反映
    // https://github.com/contentful/rich-text/issues/96#issuecomment-496082165
    [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
      `<p>${next(node.content).replace(/\r?\n/g, '<br>')}</p>`,
    // 埋め込みassetを表示
    // https://stackoverflow.com/questions/54083103/contentful-documenttohtmlstring-doesnt-include-embedded-image-in-rich-text
    [BLOCKS.EMBEDDED_ASSET]: (agrs: any) => {
      const fields = agrs.data.target.fields;
      if (!fields) {
        return '';
      }
      let height = fields.file.details.image.height;
      let width = fields.file.details.image.width;

      // 大きい画像はりサイズする
      if (height > 500 || width > 500) {
        if (width >= height) {
          const ratio = width / height;
          width = 500;
          height = width / ratio;
        } else {
          const ratio = height / width;
          height = 500;
          width = height / ratio;
        }
      }

      return `<img src="${fields.file.url}" style="width: ${width}; heigth: ${height}; max-height: 100%; max-width: 100%;" alt="${fields.description}"/>`;

    }
  },
};

const useNewses = (req: NewsesReq) => {

  const client = contentful.createClient({
    space: 'fdwyrh8b9jy5',
    accessToken: 'lBP_UJmIB4vZMqSTzmlUcGSxRBl0Pxm4VxiRpO3Y3e8'
  });
  const order = `${req.sortType === 'asc'? '': '-'}${req.sortTarget}`;

  // Page 1: skip=0, limit=15 Page 2: skip=15, limit=15 Page 3: skip=30, limit=15 etc.
  const skip = req.pageSize * (req.page - 1);
  const limit = req.pageSize;

  const { data, ...rest } = useQuery(
    ['newses', req],
    async () => {

      const res = await client
        .getEntries({
          'content_type': 'news',
          order,
          skip,
          limit
        })
        .then((entries: any) => {

          let newses: News[] = [];
          if (entries?.total) {
            entries.items.forEach(function (item: any) {
              newses.push({
                id: item.sys.id,
                title: item.fields.title,
                body: documentToHtmlString(item.fields.body, options),
                createdAt: item.sys.createdAt,
              })
            })
          }
          return {
            total: entries.total,
            newses
          };
        })
        .catch(error => console.log(error));

      if (res) {
        return {
          total: res.total,
          newses: res.newses,
        };
      }
    },
    {}
  );
  return {
    total: data?.total,
    newses: data?.newses,
    ...rest,
  };
};

export default useNewses;
