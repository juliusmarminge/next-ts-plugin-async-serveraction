"use server";

function buildAction() {
  return async function action() {
    return "foo";
  };
}

export const myAction = buildAction();

export const myAction2 = async function action() {
  return "foo";
};
