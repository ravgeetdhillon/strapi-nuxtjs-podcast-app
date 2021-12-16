module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8cb687835b9b4bac1bee030471776e14'),
  },
});
