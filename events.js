addEventButton({
  id: "evento-3",
  label: {
    pt: "Casa do Glutão",
    en: "Gluttons House",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 1081,
      chapter_id: chapter,
      result: 1,
    });

    await sleep(500);
  }
});

// pig button
addEventButton({
  id: "evento-4",
  label: {
    pt: "Espirito Lanterna",
    en: "Lantern Spirit",
  },
  category: "cat_events",
}, async function () {
  for (let pig = 146; pig <= 153; pig++) {
    netManager.send("act.act_autumn_pig_find_c2s", {
      act_type: 1082,
      pig_id: pig,
    });

    await sleep(300);
  }
});

addEventButton({
  id: "evento-1",
  label: {
    pt: "Serpente",
    en: "Snake",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 1076,
      chapter_id: chapter,
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

