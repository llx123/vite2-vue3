export default [
  {
    url: "/api/getUsers",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['11','22'],
      }
    },
  },
];
