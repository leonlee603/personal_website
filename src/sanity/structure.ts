import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Leon's personal web site")
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      S.documentTypeListItem('note').title('Notes'),
      S.documentTypeListItem('topic').title('Topics'),
      S.divider(),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category','note', 'topic', 'author'].includes(item.getId()!),
      ),
    ])
