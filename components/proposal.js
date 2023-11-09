import styles from "styles/proposal.module.css";
import Image from "next/image";

export default function Proposal() {
  return (
    <div className={styles.bg}>
      <section className={styles.sheet}>
        <h2 className={styles.h2box}>担当部門</h2>
        <ProjectDetail url="vercel.svg" />
        <h2 className={styles.h2}>プロジェクト概要</h2>
        <p className={styles.content}>
          GPT-3.5turboに対して、<br />学校のことについて学習したAIを作成することを目標にしている
        </p>
        <h2 className={styles.h2}>進捗状況</h2>
        <ul>
          <Task task="aaaaaaa" check/>
          <Task task="iiiiiiiiiiiiiiiiiiiiiiiiiiiii" />
        </ul>
        <ul className={styles.member}>
          <li>メンバー１</li>
          <li>メンバー２</li>
          <li>メンバー３</li>
        </ul>
      </section>
    </div>
  );
}

export function Task({ task,check = false}) {
  return (
    <>
      <li className={styles.checkbox} id={check ? styles.check : undefined}>
        {task}
      </li>
    </>
  );
}

export function ProjectDetail({url}) {
  return (
    <div className={styles.start}>
      <Image
        className={styles.projectIcon}
        src={url}
        alt="アイコン"
        width={200}
        height={200}
      />
      <p className={styles.title}>NAOxChatGPT</p>
    </div>
  );
}