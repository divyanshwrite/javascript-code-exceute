import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import Header from "./(root)/__components/Header";
import EditorPanel from "./(root)/__components/EditorPanel";
import OutputPanel from "./(root)/__components/OutputPanel";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='max-w=[1800px] mx-auto p-4'>
        <Header/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <EditorPanel/>
        <OutputPanel/>
      </div>
    </div>
  );
}
