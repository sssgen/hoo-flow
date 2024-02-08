import { SignUp } from "@clerk/nextjs";

const elementsStyle = {
  formButtonPrimary: "bg-primary hover:bg-primary/70",
  card: "bg-card",
  headerTitle: "text-foreground",
  headerSubtitle: "text-foreground",
  dividerText: "text-foreground",
  dividerLine: "bg-muted-foreground/20",
  formFieldSuccessText: "text-foreground",
  formFieldInfoText: "text-muted-foreground",
  socialButtonsBlockButton:
    "text-foreground border hover:border-primary/60 focus:border-primary/60 focus:shadow-sm focus:shadow-primary/50",
  formFieldLabel: "text-foreground",
  footerActionText: "text-foreground focus:shadow-sm focus:shadow-primary/50",
  formFieldInput:
    "bg-background text-foreground focus:shadow-sm focus:shadow-primary/50",
};

const SignUpBox = async () => {
  return (
    <div className="w-fit h-fit">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: elementsStyle,
        }}
      />
    </div>
  );
};

export default SignUpBox;
