export function AuthSeparator() {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-gray-50 border-t"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-background px-2 text-muted-foreground">
          or continue with email
        </span>
      </div>
    </div>
  );
}
