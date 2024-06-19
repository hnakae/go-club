import markdownStyles from "./markdown-styles.module.css";
import Eidogo from "./eidogo";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-[1128px] mx-6 px-14 py-10 border border-primaryColor rounded-md shadow-md   backdrop-blur-md">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Eidogo />
      <div>hi</div>
    </div>
  );
}
