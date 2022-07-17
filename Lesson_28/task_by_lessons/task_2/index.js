const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'alcohol',
          nodes: [
            {
              id: 'id-7',
              name: 'Soda',
              nodes: [],
            },
          ],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Products',
      nodes: [],
    },
  ],
};

export function markFavorites(tree, favorites) {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
}

const result = markFavorites(tree, favorites);

console.log(result);
