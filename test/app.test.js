const expect = require("chai").expect;

const { unstable_dev } = require("wrangler");

const { generateSkillCard } = require("../src/utils/utils");

describe("Test API calls", () => {
  let worker;

  before(async () => {
    return (worker = await unstable_dev("src/app.js", {
      experimental: { disableExperimentalWarning: true },
    }));
  });

  after(async () => {
    return await worker.stop();
  });

  describe("GET /v1", () => {
    describe("Check bg_color parameter", () => {
      it("Check default bg_color parameter", async () => {
        const resp = await worker.fetch("/v1");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check custom bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?bg_color=222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#222222" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?bg_color=222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid (with #) bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?bg_color=#222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });
    });

    describe("Check bd_color parameter", () => {
      it("Check default bd_color parameter", async () => {
        const resp = await worker.fetch("/v1");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check custom bd_color parameter", async () => {
        const resp = await worker.fetch("/v1?bd_color=222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#222222" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid bd_color parameter", async () => {
        const resp = await worker.fetch("/v1?bd_color=222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid (with #) bd_color parameter", async () => {
        const resp = await worker.fetch("/v1?bd_color=#222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="100%" height="100%" rx="10" ry="10" fill="#FFF" stroke="#CCE5D5" stroke-opacity="1" />';
          expect(text).to.include(expectedTag);
        }
      });
    });

    describe("Check t_color parameter", () => {
      it("Check default t_color parameter", async () => {
        const resp = await worker.fetch("/v1");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text x="0" y="0" class="title" fill="#444">skills</text>';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check custom t_color parameter", async () => {
        const resp = await worker.fetch("/v1?t_color=222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text x="0" y="0" class="title" fill="#222222">skills</text>';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid t_color parameter", async () => {
        const resp = await worker.fetch("/v1?t_color=222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text x="0" y="0" class="title" fill="#444">skills</text>';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid (with #) t_color parameter", async () => {
        const resp = await worker.fetch("/v1?t_color=#222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text x="0" y="0" class="title" fill="#444">skills</text>';
          expect(text).to.include(expectedTag);
        }
      });
    });

    describe("Check l_color parameter", () => {
      it("Check default l_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text style="animation-delay: 300ms;" class="language" fill="#444">js</text>';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check custom l_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&l_color=222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text style="animation-delay: 300ms;" class="language" fill="#222222">js</text>';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid l_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&l_color=222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text style="animation-delay: 300ms;" class="language" fill="#444">js</text>';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid (with #) l_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&l_color=#222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<text style="animation-delay: 300ms;" class="language" fill="#444">js</text>';
          expect(text).to.include(expectedTag);
        }
      });
    });

    describe("Check bar_color parameter", () => {
      it("Check default bar_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect style="animation-delay: 300ms;" height="10" rx="5" ry="5" fill="#6DD594" class="level lang-progress" />';
          expect(text).to.include(expectedTag);
          const expectedStyle = 'filter: drop-shadow(0 5px 5px #6DD59466);';
          expect(text).to.include(expectedStyle);
        }
      });

      it("Check custom bar_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&bar_color=222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect style="animation-delay: 300ms;" height="10" rx="5" ry="5" fill="#222222" class="level lang-progress" />';
          expect(text).to.include(expectedTag);
          const expectedStyle = 'filter: drop-shadow(0 5px 5px #22222266);';
          expect(text).to.include(expectedStyle);
        }
      });

      it("Check invalid bar_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&bar_color=222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect style="animation-delay: 300ms;" height="10" rx="5" ry="5" fill="#6DD594" class="level lang-progress" />';
          expect(text).to.include(expectedTag);
          const expectedStyle = 'filter: drop-shadow(0 5px 5px #6DD59466);';
          expect(text).to.include(expectedStyle);
        }
      });

      it("Check invalid (with #) bar_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&bar_color=#222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect style="animation-delay: 300ms;" height="10" rx="5" ry="5" fill="#6DD594" class="level lang-progress" />';
          expect(text).to.include(expectedTag);
          const expectedStyle = 'filter: drop-shadow(0 5px 5px #6DD59466);';
          expect(text).to.include(expectedStyle);
        }
      });
    });

    describe("Check bar_bg_color parameter", () => {
      it("Check default bar_bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="300" height="10" rx="5" ry="5" fill="#E4E9EF" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check custom bar_bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&bar_bg_color=222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="300" height="10" rx="5" ry="5" fill="#222222" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid bar_bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&bar_bg_color=222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="300" height="10" rx="5" ry="5" fill="#E4E9EF" />';
          expect(text).to.include(expectedTag);
        }
      });

      it("Check invalid (with #) bar_bg_color parameter", async () => {
        const resp = await worker.fetch("/v1?l=js,,10&bar_bg_color=#222222");
        if (resp) {
          const text = await resp.text();
          const expectedTag =
            '<rect width="300" height="10" rx="5" ry="5" fill="#E4E9EF" />';
          expect(text).to.include(expectedTag);
        }
      });
    });
  });
});
