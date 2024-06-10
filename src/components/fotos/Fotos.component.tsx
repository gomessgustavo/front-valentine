import { useEffect, useState } from "react";
import { FotosContainer, Polaroid } from "./Fotos.style";
import { LocalDb } from "../../backend/local-db";
import { FotosEntity } from "../../backend/entities/Fotos.entity";

export const Fotos = () => {
  const [fotos, setFotos] = useState<FotosEntity[]>([]);
  useEffect(() => {
    const getFotos = async () => {
      const db = new LocalDb();
      const res = await db.getFotos();
      setFotos(res);
    };

    getFotos();
  }, []);

  return (
    <FotosContainer>
      {fotos &&
        fotos.map((foto) => (
          <Polaroid key={foto.id}>
            <img src={`https://drive.google.com/thumbnail?id=${foto.id}`} />
            <div>{foto.descricao}</div>
          </Polaroid>
        ))}
    </FotosContainer>
  );
};
