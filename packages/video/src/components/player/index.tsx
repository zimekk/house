import React, {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import YouTubePlayer from "youtube-player";
import styles from "./styles.module.scss";

export function Player({
  inView = true,
  videoId,
  markers,
}: {
  inView: boolean;
  videoId: string;
  markers: { text: string; time: number }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerObj = useRef<any>(null);

  useEffect(() => {
    if (playerRef.current && inView) {
      // https://developers.google.com/youtube/iframe_api_reference
      const player = YouTubePlayer(playerRef.current, {
        videoId,
        // https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
        playerVars: {
          controls: 1,
          fs: 1,
          modestbranding: 1,
          rel: 0,
          origin: "http://localhost:8080",
          start: 0,
        },
      });

      playerObj.current = player;

      player.on("stateChange", async (e) => {
        if (e.data === 2) {
          // paused
          console.log(
            `time: ${await player.getCurrentTime()}/${await player.getDuration()}`,
          );
        }
      });
    }
  }, [inView, playerRef, playerObj]);

  return (
    <>
      <div>
        [
        <a
          href="#"
          onClick={useCallback<MouseEventHandler<HTMLAnchorElement>>(
            (e) => {
              e.preventDefault();
              if (ref.current) {
                const frame = ref.current.querySelector("iframe");
                if (frame) {
                  const video = frame.querySelector("video");
                  console.log({ ref, frame, video });
                }
              }
              // playerObj.current.seekTo(time)
            },
            [ref],
          )}
        >
          skip
        </a>
        ]
      </div>
      <div ref={ref} className={styles.Player}>
        <div ref={playerRef}></div>
      </div>
      <div className={styles.Markers}>
        {markers.map(({ text, time }, key) => (
          <div key={key}>
            <a
              href="#"
              onClick={useCallback<MouseEventHandler<HTMLAnchorElement>>(
                (e) => (e.preventDefault(), playerObj.current.seekTo(time)),
                [playerObj],
              )}
            >
              {text}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export function LazyPlayer(
  props: Omit<ComponentPropsWithoutRef<typeof Player>, "inView">,
) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserve: IntersectionObserverCallback = ([
      { isIntersecting },
    ]) => {
      if (isIntersecting) {
        setInView(true);
      }
    };
    if (ref.current instanceof HTMLElement) {
      const observer = new IntersectionObserver(handleObserve, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });
      observer.observe(ref.current);
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);

  return (
    <div ref={ref} className={styles.LazyPlayer}>
      <Player inView={inView} {...props} />
    </div>
  );
}
