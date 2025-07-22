import Plan from "./Plan";
import styles from "./styles.module.scss";

export default function App() {
  return (
    <div className={styles.Container}>
      <h1>model</h1>
      <div className={styles.Wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "150vh",
          }}
        >
          <defs>
            <filter id="texture-roof">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/grey_roof_01/grey_roof_01_diff_1k.jpg"
                result="texture-img"
                width="10"
                height="10"
              />
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/grey_roof_tiles/grey_roof_tiles_diff_1k.jpg" result="texture-img" width="4" height="4"/> */}
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="20"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
            <filter id="texture-slab">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/asphalt_pit_lane/asphalt_pit_lane_diff_1k.jpg"
                result="texture-img"
                width={25}
                height={25}
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
              {/* <feTile/> */}
            </filter>
            <filter id="texture-wall">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg"
                result="texture-img"
                width="3"
                height="3"
              />
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/long_white_tiles/long_white_tiles_diff_1k.jpg" result="texture-img" width="5" height="5"/> */}
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/stone_pavers/stone_pavers_diff_1k.jpg" result="texture-img" width="4" height="4"/> */}
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/pavement_03/pavement_03_diff_1k.jpg" result="texture-img" width="4" height="4"/> */}
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/pavement_01/pavement_01_diff_1k.jpg" result="texture-img" width="4" height="4"/> */}
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/floor_bricks_02/floor_bricks_02_diff_1k.jpg" result="texture-img" width={2.5} height={2.5}/> */}
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="20"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
              {/* <feTile/> */}
            </filter>
            <filter id="texture-wood">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/wood_planks_grey/wood_planks_grey_diff_1k.jpg"
                result="texture-img"
                width="2"
                height="2"
              />
              {/* <feImage href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/wood_floor/wood_floor_diff_1k.jpg" result="texture-img" width="3" height="3"/> */}
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
              {/* <feTile/> */}
            </filter>
            <filter id="texture-blue">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/blue_metal_plate/blue_metal_plate_diff_1k.jpg"
                result="texture-img"
                width="10"
                height="10"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
              {/* <feTile/> */}
            </filter>
            <filter id="texture-gray">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/worn_shutter/worn_shutter_diff_1k.jpg"
                result="texture-img"
                width="5"
                height="5"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
              {/* <feTile/> */}
            </filter>
          </defs>
          <Plan />
        </svg>
      </div>
    </div>
  );
}
