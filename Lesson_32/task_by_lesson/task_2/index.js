const getPingServer = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const randomDelay = getPingServer(1000, 3000);

    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au',
];

export const getUserASAP = (userId) => {
  const userUrls = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);

  const requests = userUrls.map((userUrl) => request(userUrl));
  return Promise.race(requests);
};

const result = getUserASAP(`user-id-1`);

result.then((data) => console.log(data));
