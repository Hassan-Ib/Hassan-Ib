import Image, { ImageProps } from "next/image";

interface ToolsBadgeProps extends ImageProps {
  toolName: string;
}

const ToolsBadge = (props: ToolsBadgeProps) => {
  return (
    <section className="relative w-14 h-14">
      <Image
        src={props.src}
        alt={`${props.toolName} icons`}
        layout="responsive"
      />
    </section>
  );
};

export default ToolsBadge;
