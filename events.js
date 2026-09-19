addEventButton({
  id: "evento-1",
  label: {
    pt: "Voo à Lua",
    en: "Flight to the Moon",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {
    netManager.send("act.act_mini_game_start_c2s", {
      act_type: 5154,
      chapter_id: chapter,
      ext: [],
    });

    await sleep(500);

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 5154,
      chapter_id: chapter,
      result: 1,
      ext: [],
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

