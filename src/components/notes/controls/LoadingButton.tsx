import { Button } from "@/components/ui/button";

type LoadingButtonProps = {
  isLoading: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  ...props
}) => {
  if (isLoading)
    return (
      <Button {...props} disabled>
        <span>Loading..</span>
      </Button>
    );

  return <Button {...props}>{props.children}</Button>;
};

export default LoadingButton;
