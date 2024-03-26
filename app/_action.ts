"use server";

function buildAction() {
  return async function action() {
    console.log("built action");
    return "foo";
  };
}

export const myAction = buildAction();

export const myAction2 = async function action() {
  console.log("static action");
  return "foo";
};
