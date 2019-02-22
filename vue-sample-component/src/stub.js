const db = {
  questionnaire: [],
};

const randomBoolean = data => ((data % 2 === 0) || false);

for (let i = 0; i < 3; i += 1) {
  db.questionnaire.push({
    id: i + 1,
    courseTitle: `コース その${i + 1}`,
    prize: [
      {
        title: `景品 その${i + 1}`,
        status: randomBoolean(i),
      },
      {
        title: `景品 その${i + 2}`,
        status: randomBoolean(i + 1),
      },
    ],
    updatedAt: new Date(),
    createdAt: new Date(),
  });
}

export default db;
