addEventButton({
  id: "evento-1",
  label: {
    pt: "Salvar a Nave Estelar",
    en: "Save the Starship",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {
    netManager.send("act.act_mini_game_start_c2s", {
      act_type: 4018,
      chapter_id: chapter,
      ext: [],
    });

    await sleep(500);

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 4018,
      chapter_id: chapter,
      result: 103,
      ext: [],
    });

    await sleep(500);
  }
});

