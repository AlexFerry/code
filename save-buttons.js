// pig button
addEventButton({
  id: "evento-2",
  label: {
    pt: "Esconde-esconde",
    en: "Hide and seek",
  },
  category: "cat_events",
}, async function () {
  for (let pig = 140; pig <= 146; pig++) {
    netManager.send("act.act_autumn_pig_find_c2s", {
      act_type: 2113,
      pig_id: pig,
    });

    await sleep(300);
  }
});
