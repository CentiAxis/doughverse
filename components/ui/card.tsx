type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm bg-white">
      {children}
    </div>
  );
}

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
