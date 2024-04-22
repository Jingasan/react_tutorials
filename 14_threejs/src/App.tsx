/**
 * three.js
 * 3Dライブラリ
 * https://threejs.org/
 */

import { useEffect } from "react";
import * as THREE from "three";

export default function App() {
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#sample-canvas") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // 毎フレーム時に実行されるループイベント
    tick();
    function tick() {
      box.rotation.y += 0.01;
      renderer.render(scene, camera);

      // レンダリング処理
      requestAnimationFrame(tick);
    }
  };

  // Canvasの初期化
  useEffect(() => {
    // didMountで描画しないと、Cannot read property 'width' of nullのエラーが発生する
    createBox();
  }, []);

  return (
    <>
      <h2>Three.js Sample</h2>
      <canvas id="sample-canvas" />
    </>
  );
}
