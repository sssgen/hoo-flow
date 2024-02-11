import { SignIn } from "@clerk/nextjs";

const elementsStyle = {
  formButtonPrimary: "bg-primary hover:bg-primary/70",
  card: "bg-card",
  headerTitle: "text-foreground",
  headerSubtitle: "text-foreground",
  dividerText: "text-foreground",
  dividerLine: "bg-muted-foreground/20",
  formFieldSuccessText: "text-foreground",
  socialButtonsBlockButton:
    "text-foreground border hover:border-primary/60 focus:border-primary/60 focus:shadow-sm focus:shadow-primary/50",
  formFieldLabel: "text-foreground",
  footerActionText: "text-foreground focus:shadow-sm focus:shadow-primary/50",
  formFieldInput:
    "bg-background text-foreground focus:shadow-sm focus:shadow-primary/50",
  alertText: "text-foreground",
  alert: "border border-muted-foreground/30",
};

const SignInBox = async () => {
  return (
    <div className="w-fit h-fit">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: elementsStyle,
        }}
      />
    </div>
  );
};

export default SignInBox;
