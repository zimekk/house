import React, {
  type ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Subject } from "rxjs";
import YouTubePlayer from "youtube-player";
import styles from "./styles.module.scss";

// https://developers.google.com/youtube/iframe_api_reference#Events
const stateNames = new Map<number, string>([
  [-1, "unstarted"],
  [0, "ended"],
  [1, "playing"],
  [2, "paused"],
  [3, "buffering"],
  [5, "video cued"],
]);

export function Player({
  inView = true,
  videoId,
}: {
  inView: boolean;
  videoId: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const action$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (playerRef.current && inView) {
      // https://developers.google.com/youtube/iframe_api_reference
      const player = YouTubePlayer(playerRef.current, {
        videoId,
        // https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
        playerVars: {
          controls: 0,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          origin: "http://localhost:8080",
          start: 15,
        },
      });

      player.on("ready", function () {
        console.log("Player1 is ready.");
      });

      player
        // Play video is a Promise.
        // .playVideo()
        // .seekTo(25, false)
        .pauseVideo()
        .then(() =>
          console.log(
            "Starting to play player1. It will take some time to buffer video before it actually starts playing.",
          ),
        );

      const updateProgress = async () => {
        setProgress(
          (100 * (await player.getCurrentTime())) /
            (await player.getDuration()),
        );
      };

      player.on("stateChange", function (event) {
        if (!stateNames.keys().toArray().includes(event.data)) {
          throw new Error(`Unknown state (${event.data}).`);
        }

        console.log(`State: ${stateNames.get(event.data)} (${event.data}).`);

        updateProgress();

        if (event.data === 1) {
          setPlaying(true);
          interval = setInterval(updateProgress, 1000);
        } else if ([0, 2, 5].includes(event.data)) {
          setPlaying(false);
          clearInterval(interval);
        }
      });

      const subscription = action$.pipe().subscribe((action) => {
        if (action === "play") {
          player.playVideo();
        } else if (action === "stop") {
          player.pauseVideo();
          // player.stopVideo()
        }
      });

      return () => {
        clearInterval(interval);
        subscription.unsubscribe();
      };
    }
  }, [action$, inView, playerRef, setProgress]);

  return (
    <div className={styles.Player}>
      <div ref={playerRef}></div>
      {inView && (
        <div className={styles.Overlay}>
          <div className={styles.Label}>{`mid & lower abs workout`}</div>
          <div className={styles.Progress}>
            <i
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
          {playing ? (
            <div
              className={styles.Mask}
              onClick={(e) => (e.preventDefault(), action$.next("stop"))}
            ></div>
          ) : (
            <button
              className={styles.Play}
              onClick={(e) => (e.preventDefault(), action$.next("play"))}
            >
              <i></i>
            </button>
          )}
        </div>
      )}
    </div>
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
