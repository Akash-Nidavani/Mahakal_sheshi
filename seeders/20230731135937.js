"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "author",
      [
        {
          firstName: "Akash",
          lastName: "Nidavani",
          email: "nidavaniakash@gmail.com",
          phoneNumber: "9090909090",
          bio: "I am a natural content writer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rakesh",
          lastName: "Sharma",
          email: "rakesh@gmail.com",
          phoneNumber: "9090909091",
          bio: "I am a natural content writer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mayank",
          lastName: "Verma",
          email: "mayank@gmail.com",
          phoneNumber: "9090909092",
          bio: "I am a natural content writer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "blog",
      [
        {
          title: "Why sheshi is the Best",
          category: "Finance",
          tags: "#trending #new",
          short_description:
            "we all need to go for technical Revolution this year",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "School education is chaning at very fast phase in the recent years",
          category: "Finance",
          tags: "#trending #new",
          short_description:
            "we all need to go for technical Revolution this year",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "New Industrial Revolution",
          category: "Finance",
          tags: "#trending #new",
          short_description:
            "we all need to go for technical Revolution this year",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("author", null, {});
    await queryInterface.bulkDelete("blog", null, {});
  },
};
