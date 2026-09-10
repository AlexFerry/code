addEventButton({
  id: "evento-1",
  label: {
    pt: "Surpresa Embalada",
    en: "Event 1",
  },
  category: "cat_events",
}, async function () {
  for (let chapter = 1; chapter <= 7; chapter++) {
    netManager.send("act.act_mini_game_start_c2s", {
      act_type: 2112,
      chapter_id: chapter,
      ext: [],
    });

    await sleep(500);

    netManager.send("act.act_mini_game_result_c2s", {
      act_type: 2112,
      chapter_id: chapter,
      result: 103,
      ext: [],
    });

    await sleep(500);
  }
});

addEventButton({
  id: "evento-2",
  label: {
    pt: "Esconde-esconde",
    en: "Event 2",
  },
  category: "cat_events",
}, async function () {
  for (let ping = 140; ping <= 146; ping++) {
    netManager.send("act.act_autumn_pig_find_c2s", {
      act_type: 2113,
      ping_id: ping,
    });

    await sleep(300);
  }
});
