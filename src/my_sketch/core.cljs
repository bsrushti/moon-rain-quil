(ns my-sketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def canvas-height 660)
(def canvas-width 800)

(defn create-spark
      []
      {:position [(rand-int 800) (- (rand-int 30) 40)]
       :lifetime 80
       :length   (+ 15 (rand-int 10))
       :speed    (+ 8 (rand-int 3))
       :width    (/ (inc (rand-int 2)) 2.0)})

(def building-start-point
  (for [x (filter #(zero? (rem % 50)) (range 850))
        y [50 60 70 120 150 180 100]]
       {:x x :y (- canvas-height y)}))

(def building-height-width {:width 60 :height 180})

(defn create-building
      []
      (let [
            startPoint (rand-nth building-start-point)
            heightWidth (rand-nth building-height-width)
            ]
           {:x      (:x startPoint)
            :y      (:y startPoint)
            :width  (:width heightWidth)
            :height (:height heightWidth)}))

(defn setup []
      (q/frame-rate 20)
      {:points    (take 100 (repeatedly create-spark))
       :buildings (take 50 (repeatedly create-building))
       :cycle     3})

(defn colors [lifetime]
      (condp < lifetime
             60 [0 0 0]
             40 [50 50 50]
             30 [100 100 100]
             20 [150 150 150]
             10 [200 200 200]
             8 [210 210 210]
             6 [220 220 220]
             4 [230 230 230]
             2 [240 240 240]
             0 [250 250 250]))

(defn draw-pipe
      [point]
      (q/stroke-weight (:width point))
      (apply q/stroke (colors (:lifetime point)))
      (let [p (:position point)]
           (q/line p (update p 1 + (:length point)))))

(defn draw-buildings
      [{:keys [x y width height]}]
      (q/fill 10 10 10)
      (q/stroke 255 255 255)
      (q/rect x y width height))

(defn draw-moon
      []
      (q/fill 220 220 220)
      (q/ellipse 650 250 50 50))

(defn draw-state [{:keys [points buildings]}]
      (doseq [building buildings]
             (draw-buildings building))
      (doseq [point points]
             (draw-pipe point))
      (draw-moon))

(defn add-spark-at-end-of-cycle
      [state]
      (if (zero? (:cycle state))
        (-> state
            (update :points concat (take 100 (repeatedly create-spark)))
            (assoc :cycle 3))
        state))

(defn update-state [state]
      (-> state
          (update :points (fn [points] (map #(update % :lifetime dec) points)))
          (update :points (fn [points] (remove (comp zero? :lifetime) points)))
          (update :points (fn [points] (map #(update-in % [:position 1] + (:speed %)) points)))
          (update :cycle dec)
          (add-spark-at-end-of-cycle)))

(defn ^:export run-sketch []
      (q/defsketch my-sketch
                   :host "my-sketch"
                   :size [canvas-width canvas-height]
                   :setup setup
                   :update update-state
                   :draw draw-state
                   :middleware [m/fun-mode]))



