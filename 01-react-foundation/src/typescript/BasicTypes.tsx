export const BasicTypes = () => {
  const name: string = "Alejandro";
  const age: number = 37;
  const isActive: boolean = true;

  const powers: string[] = ["React", "React Native", "Angular", "Vue", "Qwik"];
  powers.push("Next");

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  );
};
