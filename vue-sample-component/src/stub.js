const db = {
  questionnaire: [],
};

const randomBoolean = data => ((data % 2 === 0) || false);

for (let i = 0; i < 3; i += 1) {
  db.questionnaire.push({
    id: i + 1,
    title: `セクション その${i + 1}`,
    question: [
      {
        title: `アンケート その${i + 1}`,
        status: randomBoolean(i),
      },
      {
        title: `アンケート その${i + 2}`,
        status: randomBoolean(i + 1),
      },
    ],
    updatedAt: new Date(),
    createdAt: new Date(),
  });
}

export default db;
