const stats = [
  {
    value: "3800+",
    title: "USER ACTIVE",
  },
  {
    value: "120+",
    title: "TRUSTED BY COMPANY",
  },
  {
    value: "$2M+",
    title: "NOTES",
  },
];

const Stats = () => {
  return (
    <div className="mt-4 backdrop-blur-sm">
      <div className="w-full h-8 flex flex-row flex-wrap justify-evenly">
        {stats.map((stat, index) => (
          <div key={index} className="inline-flex gap-4 mx-4 items-center">
            <h4 className="text-4xl font-bold text-foreground">{stat.value}</h4>
            <p className="text-2xl text-primary">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
