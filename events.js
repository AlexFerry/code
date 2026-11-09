addEventButton({
  id: "evento-3",
  label: {
    pt: "Pesca",
    en: "Fishing",
  },
  category: "cat_events",
}, async function () {
  await (async function () {
    async function getEquip() {
      return new Promise(resolve => {
        const handler = response => {
          netManager.removeEventListener("act.act_fishing_info_s2c", handler);

          const getValue = (k, fallback) => {
            const item = response.equip_list.find(i => i.k === k);
            const v = (item && typeof item.v === "number") ? item.v : 0;
            let base = 0;
            let bonus = 0;

            switch (k) {
              case 1:
                base = Math.min(v, 8) * 25;
                bonus = Math.max(0, v - 8) * 50;
                return base + bonus + fallback;
              case 2:
                return v * 25 + fallback;
              case 3:
                base = Math.min(v, 4) * 1;
                bonus = Math.max(0, v - 4) * 2;
                return Math.max(base + bonus + fallback - 1, 5);
              default:
                return fallback;
            }
          };

          resolve({ a: getValue(1, 300), b: getValue(2, 50), c: getValue(3, 5) });
        };

        netManager.addEventListener("act.act_fishing_info_s2c", handler);
        netManager.send("act.act_fishing_info_c2s", { act_type: 1065 });
      });
    }

    async function getHandbook() {
      return new Promise(resolve => {
        const handler = response => {
          netManager.removeEventListener("act.act_fishing_handbook_s2c", handler);

          let t = [];
          for (let i = 1; i <= 35; i++) {
            if (!response.fish_list.some(fish => fish.k === i)) t.push(i);
          }
          resolve(t);
        };

        netManager.addEventListener("act.act_fishing_handbook_s2c", handler);
        netManager.send("act.act_fishing_handbook_c2s", { act_type: 1065 });
      });
    }

    const delay = ms => new Promise(r => setTimeout(r, ms));
    const equipData = await getEquip();
    const handbookData = await getHandbook();
    const fishList = handbookData.slice(0, equipData.c);
    const maxDepth = equipData.a;

    while (fishList.length < equipData.c) fishList.push(35);

    netManager.send("act.act_fishing_start_c2s", {
      act_type: 1065,
      cost_list: [],
    });

    await delay(1000);

    const fishResultList = fishList.map(fishId => {
      const { refresh_depth } = configFish_species.getDataByKey(fishId);
      const randomDepth = Math.floor(
        Math.random() * (refresh_depth[1] - refresh_depth[0] + 1) + refresh_depth[0]
      );
      return { k: Math.min(maxDepth - 1, randomDepth), v: fishId };
    }).sort((a, b) => b.k - a.k);

    netManager.send("act.act_fishing_result_c2s", {
      act_type: 1065,
      depth: maxDepth,
      score: 0,
      fish_list: fishResultList,
    });
  })();
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

