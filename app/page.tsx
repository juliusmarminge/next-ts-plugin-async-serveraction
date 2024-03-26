import { myAction, myAction2 } from "./_action";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <form action={myAction}>
        <button type="submit">Dispatch myAction</button>
      </form>
      <form action={myAction2}>
        <button type="submit">Dispatch myAction2</button>
      </form>
    </main>
  );
}
