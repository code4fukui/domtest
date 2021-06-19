import * as t from "https://deno.land/std/testing/asserts.ts";
import {} from "./domtest.js";

Deno.test("document", () => {
  t.assert(document);
});
Deno.test("create", () => {
  const div = document.createElement("div");
  t.assertEquals(div.toString(), "<div></div>");
});
Deno.test("appendChild", () => {
  const div = document.createElement("div");
  const div2 = document.createElement("hr");
  div.appendChild(div2);
  const div3 = document.createElement("span");
  div.appendChild(div3);
  t.assertEquals(div.toString(), "<div><hr></hr><span></span></div>");
});
Deno.test("textContent", () => {
  const div = document.createElement("div");
  div.textContent = "text";
  t.assertEquals(div.toString(), "<div>text</div>");
});
Deno.test("a href", () => {
  const div = document.createElement("a");
  div.textContent = "text";
  div.href = "https://jig.jp/"
  t.assertEquals(div.toString(), "<a href='https://jig.jp/'>text</a>");
});
