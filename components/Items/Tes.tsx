import React, { useEffect, useState } from "react";

function GambarManusia() {
  const [hasilKlik, setHasilKlik] = useState("");
  const [titik, setTitik] = useState<{ x: number; y: number }[]>([]);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);


  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "/images/body.png";
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 300, 400);
    };
  }, []);

  const reset = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "/images/body.png";
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 300, 400);
    };
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    ctx?.drawImage(img, 0, 0, 300, 400);
    setTitik([]);
  };

  const handleClick = (e: any) => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect(); // Mendapatkan informasi ukuran dan posisi gambar dalam viewport
    const scaleX = canvas.width / rect.width; // Menghitung skala lebar gambar
    const scaleY = canvas.height / rect.height; // Menghitung skala tinggi gambar
    const x = (e.clientX - rect.left) * scaleX; // Menghitung posisi x klik dalam gambar yang sudah diskala
    const y = (e.clientY - rect.top) * scaleY; // Menghitung posisi y klik dalam gambar yang sudah diskala
    setX(x);
    setY(y);
    setTitik((prev) => [...prev, { x: x, y: y }]);
    console.log(x, y);
    if (ctx) {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  return (
    <div className="">
      <canvas
        id="canvas"
        width="300"
        height="400"
        className="cursor-crosshair outline-1 outline"
        onClick={handleClick}
      ></canvas>
      {/* <h1 className="text-2xl">Koordinat X: {x}</h1>
      <h1 className="text-2xl">Koordinat Y: {y}</h1> */}
      <div className="btn btn-primary" onClick={reset}>
        Hapus Titik
      </div>
    </div>
  );
}

export default GambarManusia;
