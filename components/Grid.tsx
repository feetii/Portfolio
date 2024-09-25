import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => {
          // Check for NaN values in the item's position attribute if applicable
          const positions = item.position; // assuming 'position' exists in the item
          if (positions && positions.some((value) => isNaN(value))) {
            console.error("Position attribute has NaN values:", positions);
            return null; // skip this item if there are NaN values
          }

          return (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
