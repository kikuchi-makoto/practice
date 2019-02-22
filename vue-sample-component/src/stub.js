const db = {
  questionnaire: [],
};

for (let i = 0; i < 3; i += 1) {
  db.questionnaire.push({
    id: i + 1,
    courseTitle: `コース その${i + 1}`,
    prize: [
      {
        title: `景品 その${i + 1}`,
        status: true,
      },
      {
        title: `景品 その${i + 2}`,
        status: true,
      },
    ],
  });
}

export default db;
