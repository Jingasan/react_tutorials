/**
 * Recharts
 * グラフ描画ライブラリ
 * https://recharts.org/en-US/
 *
 * Examples
 * https://recharts.org/en-US/examples
 */
import "./styles.css";
import * as React from "react";
import {
  LineChart,
  Line,
  LabelList,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";

const data = [
  {
    time: "07/20 00:00",
    wheather: "cloudy",
    temperature: "25℃",
    "1号機": 100,
    "2号機": 80,
    "3号機": 70,
  },
  {
    time: "07/20 03:00",
    wheather: "cloudy",
    temperature: "23℃",
    "1号機": 70,
    "2号機": 80,
    "3号機": 50,
  },
  {
    time: "07/20 06:00",
    wheather: "sunny",
    temperature: "27℃",
    "1号機": 300,
    "2号機": 320,
    "3号機": 330,
  },
  {
    time: "07/20 09:00",
    wheather: "sunny",
    temperature: "33℃",
    "1号機": 478,
    "2号機": 600,
    "3号機": 800,
  },
  {
    time: "07/20 12:00",
    wheather: "sunny",
    temperature: "37℃",
    "1号機": 630,
    "2号機": 1000,
    "3号機": 1030,
  },
  {
    time: "07/20 15:00",
    wheather: "sunny",
    temperature: "34℃",
    "1号機": 339,
    "2号機": 540,
    "3号機": 600,
  },
  {
    time: "07/20 18:00",
    wheather: "sunny",
    temperature: "31℃",
    "1号機": 250,
    "2号機": 200,
    "3号機": 300,
  },
  {
    time: "07/20 21:00",
    wheather: "rainy",
    temperature: "27℃",
    "1号機": 50,
    "2号機": 30,
    "3号機": 40,
  },
  {
    time: "07/21 00:00",
    wheather: "sunny",
    temperature: "26℃",
    "1号機": 100,
    "2号機": 80,
    "3号機": 80,
  },
  {
    time: "07/21 03:00",
    wheather: "sunny",
    temperature: "23℃",
    "1号機": 70,
    "2号機": 80,
    "3号機": 100,
  },
  {
    time: "07/21 06:00",
    wheather: "sunny",
    temperature: "27℃",
    "1号機": 200,
    "2号機": 320,
    "3号機": 330,
  },
  {
    time: "07/21 09:00",
    wheather: "sunny",
    temperature: "30℃",
    "1号機": 278,
    "2号機": 520,
    "3号機": 540,
  },
  {
    time: "07/21 12:00",
    wheather: "sunny",
    temperature: "34℃",
    "1号機": 529,
    "2号機": 980,
    "3号機": 990,
  },
  {
    time: "07/21 15:00",
    wheather: "rainy",
    temperature: "29℃",
    "1号機": 239,
    "2号機": 230,
    "3号機": 250,
  },
  {
    time: "07/21 18:00",
    wheather: "cloudy",
    temperature: "29℃",
    "1号機": 139,
    "2号機": 150,
    "3号機": 160,
  },
  {
    time: "07/21 21:00",
    wheather: "cloudy",
    temperature: "23℃",
    "1号機": 60,
    "2号機": 40,
    "3号機": 80,
  },
  {
    time: "07/22 00:00",
    wheather: "cloudy",
    temperature: "25℃",
    "1号機": 100,
    "2号機": 80,
    "3号機": 70,
  },
  {
    time: "07/22 03:00",
    wheather: "cloudy",
    temperature: "23℃",
    "1号機": 70,
    "2号機": 80,
    "3号機": 50,
  },
  {
    time: "07/22 06:00",
    wheather: "sunny",
    temperature: "25℃",
    "1号機": 200,
    "2号機": 320,
    "3号機": 250,
  },
  {
    time: "07/22 09:00",
    wheather: "sunny",
    temperature: "28℃",
    "1号機": 278,
    "2号機": 520,
    "3号機": 10,
  },
  {
    time: "07/22 12:00",
    wheather: "sunny",
    temperature: "32℃",
    "1号機": 529,
    "2号機": 980,
    "3号機": 0,
  },
  {
    time: "07/22 15:00",
    wheather: "sunny",
    temperature: "29℃",
    "1号機": 339,
    "2号機": 530,
    "3号機": 0,
  },
  {
    time: "07/22 18:00",
    wheather: "rainy",
    temperature: "29℃",
    "1号機": 139,
    "2号機": 150,
    "3号機": 0,
  },
  {
    time: "07/22 21:00",
    wheather: "rainy",
    temperature: "23℃",
    "1号機": 50,
    "2号機": 30,
    "3号機": 0,
  },
];

// 発電状態アイコン
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomizedDot: React.FunctionComponent<any> = (props: any) => {
  const { cx, cy, value } = props;
  if (value <= 10) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={20}
        height={20}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  } else {
    /*else if (value > 500) {
    return (
		<svg
		  x={cx - 10}
		  y={cy - 10}
		  width={20}
		  height={20}
		  fill="red"
		  viewBox="0 0 1024 1024"
		>
		  <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
		</svg>
	  );

  }*/
    return <></>;
  }
};

// X軸天気ラベル
export interface CustomAxisTickProps {
  x: number;
  y: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}
const renderCustomAxisTick = (props: CustomAxisTickProps) => {
  const { x, y, payload } = props;
  if (payload.value === "sunny") {
    return (
      <svg
        x={x - 15}
        y={y - 15}
        width={512}
        height={512}
        viewBox="0 0 1024 1024"
      >
        <g>
          <path
            fill="#F0C419"
            d="M30,0c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1s1-0.448,1-1V1C31,0.448,30.552,0,30,0z"
          />
          <path
            fill="#F0C419"
            d="M30,52c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1s1-0.448,1-1v-6C31,52.448,30.552,52,30,52z"
          />
          <path
            fill="#F0C419"
            d="M59,29h-6c-0.552,0-1,0.448-1,1s0.448,1,1,1h6c0.552,0,1-0.448,1-1S59.552,29,59,29z"
          />
          <path
            fill="#F0C419"
            d="M8,30c0-0.552-0.448-1-1-1H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h6C7.552,31,8,30.552,8,30z"
          />
          <path
            fill="#F0C419"
            d="M46.264,14.736c0.256,0,0.512-0.098,0.707-0.293l5.736-5.736c0.391-0.391,0.391-1.023,0-1.414
            s-1.023-0.391-1.414,0l-5.736,5.736c-0.391,0.391-0.391,1.023,0,1.414C45.752,14.639,46.008,14.736,46.264,14.736z"
          />
          <path
            fill="#F0C419"
            d="M13.029,45.557l-5.736,5.736c-0.391,0.391-0.391,1.023,0,1.414C7.488,52.902,7.744,53,8,53
            s0.512-0.098,0.707-0.293l5.736-5.736c0.391-0.391,0.391-1.023,0-1.414S13.42,45.166,13.029,45.557z"
          />
          <path
            fill="#F0C419"
            d="M46.971,45.557c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l5.736,5.736
            C51.488,52.902,51.744,53,52,53s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.971,45.557z"
          />
          <path
            fill="#F0C419"
            d="M8.707,7.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l5.736,5.736
            c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L8.707,7.293z"
          />
          <path
            fill="#F0C419"
            d="M50.251,21.404c0.162,0.381,0.532,0.61,0.921,0.61c0.13,0,0.263-0.026,0.39-0.08l2.762-1.172
            c0.508-0.216,0.746-0.803,0.53-1.311s-0.804-0.746-1.311-0.53l-2.762,1.172C50.272,20.309,50.035,20.896,50.251,21.404z"
          />
          <path
            fill="#F0C419"
            d="M9.749,38.596c-0.216-0.508-0.803-0.746-1.311-0.53l-2.762,1.172
            c-0.508,0.216-0.746,0.803-0.53,1.311c0.162,0.381,0.532,0.61,0.921,0.61c0.13,0,0.263-0.026,0.39-0.08l2.762-1.172
            C9.728,39.691,9.965,39.104,9.749,38.596z"
          />
          <path
            fill="#F0C419"
            d="M54.481,38.813L51.7,37.688c-0.511-0.207-1.095,0.041-1.302,0.553
            c-0.207,0.512,0.041,1.095,0.553,1.302l2.782,1.124c0.123,0.049,0.25,0.073,0.374,0.073c0.396,0,0.771-0.236,0.928-0.626
            C55.241,39.603,54.994,39.02,54.481,38.813z"
          />
          <path
            fill="#F0C419"
            d="M5.519,21.188L8.3,22.312c0.123,0.049,0.25,0.073,0.374,0.073c0.396,0,0.771-0.236,0.928-0.626
            c0.207-0.512-0.041-1.095-0.553-1.302l-2.782-1.124c-0.513-0.207-1.095,0.04-1.302,0.553C4.759,20.397,5.006,20.98,5.519,21.188z"
          />
          <path
            fill="#F0C419"
            d="M39.907,50.781c-0.216-0.508-0.803-0.745-1.311-0.53c-0.508,0.216-0.746,0.803-0.53,1.311
            l1.172,2.762c0.162,0.381,0.532,0.61,0.921,0.61c0.13,0,0.263-0.026,0.39-0.08c0.508-0.216,0.746-0.803,0.53-1.311L39.907,50.781z"
          />
          <path
            fill="#F0C419"
            d="M21.014,9.829c0.13,0,0.263-0.026,0.39-0.08c0.508-0.216,0.746-0.803,0.53-1.311l-1.172-2.762
            c-0.215-0.509-0.802-0.747-1.311-0.53c-0.508,0.216-0.746,0.803-0.53,1.311l1.172,2.762C20.254,9.6,20.625,9.829,21.014,9.829z"
          />
          <path
            fill="#F0C419"
            d="M21.759,50.398c-0.511-0.205-1.095,0.04-1.302,0.553l-1.124,2.782
            c-0.207,0.512,0.041,1.095,0.553,1.302c0.123,0.049,0.25,0.073,0.374,0.073c0.396,0,0.771-0.236,0.928-0.626l1.124-2.782
            C22.519,51.188,22.271,50.605,21.759,50.398z"
          />
          <path
            fill="#F0C419"
            d="M38.615,9.675c0.396,0,0.771-0.236,0.928-0.626l1.124-2.782c0.207-0.512-0.041-1.095-0.553-1.302
            c-0.511-0.207-1.095,0.041-1.302,0.553L37.688,8.3c-0.207,0.512,0.041,1.095,0.553,1.302C38.364,9.651,38.491,9.675,38.615,9.675z"
          />
        </g>
        <circle fill="#F0C419" cx="30" cy="30" r="20" />
        <circle fill="#F0C419" cx="30" cy="30" r="15" />
      </svg>
    );
  } else if (payload.value === "cloudy") {
    return (
      <svg x={x - 15} y={y - 15} width={80} height={80} viewBox="0 0 1024 1024">
        <g>
          <rect
            x="136.058"
            y="27.122"
            fill="#FFDE55"
            width="16.433"
            height="48.818"
          />
          <rect
            x="220.813"
            y="62.228"
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 329.7162 309.8465)"
            fill="#FFDE55"
            width="16.433"
            height="48.818"
          />
          <rect y="163.179" fill="#FFDE55;" width="48.818" height="16.433" />
          <rect
            x="35.108"
            y="78.422"
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 40.3388 189.985)"
            fill="#FFDE55"
            width="48.818"
            height="16.433"
          />
          <path
            fill="#FFDE55"
            d="M144.272,93.022c-43.285,0-78.374,35.09-78.374,78.375c0,43.284,35.09,78.374,78.374,78.374
	   s78.374-35.09,78.374-78.374C222.647,128.113,187.557,93.022,144.272,93.022"
          />
          <path
            fill="#57C3FF"
            d="M362.429,274.566c0,4.95-0.59,9.75-1.71,14.35c-6.44,26.62-30.43,46.39-59.041,46.39H78.189
	   c-16.77,0-31.96-6.801-42.95-17.79c-10.99-10.99-17.79-26.17-17.79-42.95c0-33.55,27.19-60.75,60.74-60.75h4.36
	   c2.53-16.97,11.12-31.97,23.5-42.73c12.37-10.76,28.53-17.27,46.21-17.27c7.77,0,15.24,1.28,22.23,3.6
	   c7.33-9.65,16.8-17.58,27.69-23.11c2.88-1.46,5.86-2.75,8.93-3.86c8.53-3.09,17.74-4.78,27.34-4.78c44.35,0,80.3,35.95,80.3,80.3
	   v10.301c12.62,3.69,23.54,11.36,31.31,21.56C357.819,248.026,362.429,260.756,362.429,274.566"
          />
          <path
            fill="#59B6E9"
            d="M238.449,125.666c-9.599,0-18.809,1.69-27.339,4.78c0,0,0,0-0.001,0l149.61,158.47
	   c1.12-4.6,1.71-9.4,1.71-14.35c0-13.81-4.61-26.54-12.37-36.74c-7.77-10.2-18.69-17.87-31.31-21.56v-10.301
	   C318.749,161.617,282.799,125.666,238.449,125.666"
          />
        </g>
      </svg>
    );
  } else if (payload.value === "rainy") {
    return (
      <svg
        x={x - 15}
        y={y - 15}
        width={60}
        height={60}
        viewBox="0 0 1024 1024"
        enableBackground="new 0 0 512 512"
      >
        <g>
          <path
            fill="#455A64"
            d="M481.855,287.204c-4.479,0-8.293-3.42-8.704-7.961c-0.551-6.106-1.338-12.142-2.187-18.152
		  c-0.674-4.785,2.659-9.212,7.445-9.885c4.759-0.7,9.203,2.668,9.876,7.445c0.892,6.307,1.715,12.623,2.292,19.027
		  c0.429,4.811-3.114,9.063-7.926,9.5C482.38,287.195,482.118,287.204,481.855,287.204z"
          />
          <path
            fill="#455A64"
            d="M30.146,287.204c-0.262,0-0.525-0.009-0.796-0.035c-4.811-0.437-8.363-4.689-7.926-9.5
		  c0.577-6.395,1.4-12.72,2.292-19.027c0.674-4.776,5.179-8.101,9.876-7.445c4.785,0.674,8.118,5.1,7.445,9.885
		  c-0.849,6.019-1.636,12.046-2.187,18.152C38.439,283.783,34.625,287.204,30.146,287.204z"
          />
          <path
            fill="#455A64"
            d="M151.113,298.55c-0.018,0-0.026,0-0.035,0c-4.829-0.026-8.73-3.954-8.713-8.792
		  c0.018-4.846,0.175-9.693,0.324-14.548l0.079-2.432c0.149-4.838,3.884-8.625,9.01-8.486c4.829,0.157,8.625,4.182,8.477,9.01
		  l-0.079,2.449c-0.149,4.698-0.297,9.387-0.315,14.084C159.834,294.666,155.924,298.55,151.113,298.55z"
          />
          <path
            fill="#455A64"
            d="M360.889,298.55c-4.811,0-8.722-3.884-8.748-8.704c-0.026-4.776-0.184-9.561-0.332-14.338
		  l-0.07-2.196c-0.149-4.829,3.639-8.87,8.468-9.019c5.021-0.166,8.862,3.648,9.019,8.477l0.07,2.178
		  c0.158,4.934,0.315,9.876,0.341,14.81c0.026,4.829-3.867,8.765-8.704,8.792C360.924,298.55,360.906,298.55,360.889,298.55z"
          />
        </g>
        <rect
          x="247.218"
          y="240.569"
          fill="#B0BEC5"
          width="17.496"
          height="192.455"
        />
        <path
          fill="#2196F3"
          d="M217.387,455.716c2.904,2.878,4.33,6.946,3.718,10.987c-0.402,2.651,0.42,5.45,2.467,7.497
	  c3.412,3.412,8.958,3.412,12.37,0c1.706-1.706,2.563-3.77,2.563-6.01c0-9.255,0-31.51,0-43.923c0-4.829,3.919-8.739,8.748-8.739
	  h17.496c4.829,0,8.748,3.919,8.748,8.748v43.74c0.122,11.679-4.435,22.815-12.816,31.195C252.152,507.74,240.954,512,229.757,512
	  c-11.197,0-22.404-4.26-30.924-12.789c-12.475-12.466-15.825-30.662-10.051-46.207c3.263-8.783,14.784-10.979,21.441-4.391
	  L217.387,455.716z"
        />
        <path
          fill="#039BE5"
          d="M256.001,27.267c31.711,2.213,62.303,8.433,91.311,18.117c36.12,12.063,67.342,36.269,87.768,68.4
	  c27.346,43.005,45.769,92.16,53.205,144.849c-42.821,1.47-85.546,6.062-127.816,13.787c-1.907-60.151-11.906-120.092-30.268-177.986
	  c-6.578-20.759-20.759-38.43-39.742-49.102C279.183,38.981,267.688,32.962,256.001,27.267z"
        />
        <path
          fill="#4FC3F7"
          d="M255.397,27.329c-31.493,2.248-61.883,8.433-90.699,18.056c-36.12,12.063-67.342,36.269-87.768,68.4
	  c-27.346,43.005-45.769,92.16-53.205,144.849c42.821,1.47,85.537,6.062,127.808,13.787c1.89-60.23,11.88-120.258,30.277-178.231
	  c6.587-20.759,20.759-38.43,39.742-49.102C232.626,38.85,243.92,32.936,255.397,27.329z"
        />
        <path
          fill="#29B6F6"
          d="M360.469,272.429c-1.907-60.151-11.906-120.092-30.268-177.986
	  c-6.578-20.759-20.759-38.43-39.742-49.102c-11.285-6.351-23.383-12.308-35.071-18.003c-11.477,5.599-22.771,11.521-33.855,17.758
	  c-18.983,10.673-33.155,28.343-39.742,49.102c-18.388,57.981-28.387,118.001-30.277,178.231
	  C219.513,264.459,292.488,264.468,360.469,272.429z"
        />
        <path
          fill="#78909C"
          d="M269.123,28.422c0,5.1-26.244,5.118-26.244,0.017l3.237-21.021C246.772,3.149,250.446,0,254.758,0
	  h2.484c4.321,0,7.987,3.149,8.643,7.418L269.123,28.422z"
        />
      </svg>
    );
  } else {
    return <></>;
  }
};

// X軸
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomizedAxisTick: React.FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={10} textAnchor="middle" fontSize={12} fill="#666">
        {payload.value.split(" ")[0]}
      </text>
      <text x={0} y={0} dy={25} textAnchor="middle" fontSize={12} fill="#666">
        {payload.value.split(" ")[1]}
      </text>
    </g>
  );
};

// ポイントラベル
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomizedLabel: React.FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

// 折れ線グラフ
function LineGraph() {
  return (
    <div style={{ width: 500 }}>
      <div style={{ fontWeight: "bold", textAlign: "center" }}>
        太陽光パネル 発電量グラフ (2022/07/22)
      </div>
      <LineChart
        width={500}
        height={350}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          //interval={0}
          fontSize={12}
          height={50}
          tick={<CustomizedAxisTick />}
        />
        <XAxis
          dataKey="wheather"
          tick={renderCustomAxisTick}
          axisLine={false}
          tickLine={false}
          xAxisId={"icon"}
        />
        <XAxis
          dataKey="temperature"
          //interval={0}
          fontSize={12}
          axisLine={false}
          tickLine={false}
          height={25}
          xAxisId={"temperature"}
        />
        <YAxis
          label={{ value: "発電量[kW]", angle: -90, dx: -35 }}
          fontSize={14}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="1号機"
          stroke="#82ca9d"
          dot={<CustomizedDot />}
        >
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line
          type="monotone"
          dataKey="2号機"
          stroke="#8884d8"
          dot={<CustomizedDot />}
        >
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line
          type="monotone"
          dataKey="3号機"
          stroke="#fd7e00"
          dot={<CustomizedDot />}
        >
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Brush height={20} startIndex={16} endIndex={23} />
      </LineChart>
    </div>
  );
}

// 積層グラフ
function StackedBarGraph() {
  return (
    <div style={{ width: 500 }}>
      <div style={{ fontWeight: "bold", textAlign: "center" }}>
        太陽光パネル 総発電量グラフ (2022/07/22)
      </div>
      <BarChart
        width={500}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          //interval={0}
          fontSize={12}
          height={40}
          tick={<CustomizedAxisTick />}
        />
        <YAxis
          label={{ value: "総発電量[kW]", angle: -90, dx: -35 }}
          fontSize={14}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="1号機" stackId="a" fill="#82ca9d" />
        <Bar dataKey="2号機" stackId="a" fill="#8884d8" />
        <Bar dataKey="3号機" stackId="a" fill="#fd7e00" />
        <Brush height={20} startIndex={16} endIndex={23} />
      </BarChart>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <LineGraph />
      <StackedBarGraph />
    </div>
  );
}
