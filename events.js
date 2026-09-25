addEventButton({
  id: "evento-1",
  label: {
    pt: "Batalha de Reviravolta",
    en: "Reversal Showdown",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 15; chapter++) {
    netManager.send("act.act_reverse_war_chapter_pass_c2s", {
      chapter: chapter,
      star: 3,
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

