addEventButton({
  id: "evento-3",
  label: {
    pt: "Identificação do boneco",
    en: "Doll identification",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 2125,
      chapter_id: chapter,
      result: 1,
    });

    await sleep(500);
  }
});

// ursos
addEventButton({
  id: "evento-4",
  label: {
    pt: "Ursinho",
    en: "Teddy bear",
  },
  category: "cat_events",
}, async function () {
  for (let i = 212401; i <= 212407; i++) {

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 2124,
      chapter_id: i,
      result: 1,
    });

    await sleep(500);
  }
});

addEventButton({
  id: "evento-2",
  label: {
    pt: "Desafio de Saltos",
    en: "Jumping Challenge",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {

    netManager.send("act.act_seven_trial_angry_bird_result_c2s", {
      act_type: 73,
      chapter_id: chapter,
      result: 1,
      step:1,
    });

    await sleep(500);
  }
});

