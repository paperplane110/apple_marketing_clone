"use client"
import Image from "next/image";
import FadeDiv from "@/components/FadeDiv";
import Link from "next/link";
import NightComputerPic from '../public/night-computer.jpg'
import ChipsPic from "../public/CMS.jpg"
import RenderPic from "../public/render.jpg"
import ComputerPic from "../public/computer.jpg"
import StickyButton from "@/components/StickyButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <nav className="fixed top-0 left-0 z-50 h-12 border-b border-b-gray-500/70 w-full bg-gray-700/5 backdrop-blur-md">

      </nav>
      <section className="section pt-[12rem]">
        <div className="z-10 subsection text-center relative">
          <p className="text-3xl font-semibold pb-2">MacBook Pro</p>
          <p className="text-5xl font-semibold glow">
            <span className="glow-blue">强势</span>
            <span className="glow-purple">动力</span>
            <span className="glow-pink">来</span>
            <span className="glow-orange">自 M4</span>
          </p>
        </div>
        <div className="relative w-full lg:max-w-screen-lg xl:max-w-screen-xl h-[70vh] -mt-[4rem]">
          <Image src={ComputerPic} alt="battery" fill={true} style={{objectFit: 'cover'}} className="contrast-[1.1]" />
        </div>
        <div className="z-10 subsection text-center -mt-[8rem] mb-[8rem]">
          <Button className="bg-blue-500 rounded-full py-6 px-6">购买</Button>
          <p className="desc mt-6">RMB 542/月起或 RMB 12,999 起*</p>
        </div>
      </section>
      <section className="section pt-[8rem]">
        <div className="subsection pb-12">
          <p className="headline-eyebrow">性能</p>
          <p className="headline">全面 Pro 到顶。</p>
        </div>
        <StickyButton />
        <div className="relative w-full lg:max-w-screen-lg xl:max-w-screen-xl h-[70vh] lg:mt-8 mb-10 lg:mb-16 xl:mb-24">
          <Image src={ChipsPic} alt="battery" fill={true} style={{objectFit: 'cover'}} quality={100} />
        </div>
        <div className="subsection text-left mb-16">
          <FadeDiv>
            <p className="desc desc-left">
              M4、M4 Pro 和 M4 Max 列装 MacBook Pro，让我们的专业级笔电成为<strong className="desc-strong">彻头彻尾的性能怪兽</strong>。
              中央处理器单线程及多线程性能超凡，统一内存快马加鞭，机器学习加速器再进化，M4
              系列芯片带来超乎想象的速度和能力。再加上强大的神经网络引擎，为图片进行优化放大、为视频生成描述或字幕这类
              AI 任务，处理起来也快到飞起。
            </p>
          </FadeDiv>
        </div>
        <div className="subsection grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-[4rem] lg:gap-x-[4rem] mb-[10rem]">
          <FadeDiv>
            <div className="gradient-line mb-8"></div>
            <p className="desc-sm mb-2">MacBook Pro 的 M4 机型速度</p>
            <p className="stat-caption mb-2">最高达 3.4 倍</p>
            <p className="desc-sm">相比 M1 机型</p>
          </FadeDiv>
          <FadeDiv>
            <div className="gradient-line mb-8"></div>
            <p className="desc-sm mb-2">MacBook Pro 的 M4 Pro 机型速度</p>
            <p className="stat-caption mb-2">最高达 3 倍</p>
            <p className="desc-sm">相比 M1 Pro 机型</p>
          </FadeDiv>
          <FadeDiv>
            <div className="gradient-line mb-8"></div>
            <p className="desc-sm mb-2">MacBook Pro 的 M4 Max 机型速度</p>
            <p className="stat-caption mb-2">最高达 3.5 倍</p>
            <p className="desc-sm">相比 M1 Max 机型</p>
          </FadeDiv>
        </div>
        <div className="subsection text-center mb-8">
          <div className="text-5xl font-semibold leading-[4rem] mb-8">
            <p>图形性能再晋级，</p>
            <p>陪你玩到底。</p>
          </div>
        </div>
        <div className="relative w-full lg:max-w-screen-lg xl:max-w-screen-xl h-[70vh] lg:mt-8 mb-10 lg:mb-16 xl:mb-24">
          <Image src={RenderPic} alt="graphic" fill={true} style={{objectFit: 'cover'}} className="contrast-[1.8]" />
        </div>
        <div className="subsection mb-[8rem]">
          <FadeDiv>
            <p className="desc text-center">执行图形密集型工作流程响应超灵敏，随你放飞奇思妙想。M4 系列芯片的图形处理器拥有第二代硬件加速光线追踪引擎，图形渲染更快，真实感前所未有，让你玩起游戏更投入。动态缓存功能则优化了高速片上内存，显著提高图形处理器平均利用率，为要求极高的专业 app 和游戏带来了性能飞跃。</p>
          </FadeDiv>
        </div>
      </section>
      <section className="section pt-[8rem]">
        <div className="subsection text-left">
          <p className="headline-eyebrow">电池续航</p>
          <p className="headline">全天一起飙，<br />夜以继日。</p>
        </div>
        <div className="relative w-full lg:max-w-screen-lg xl:max-w-screen-xl h-[70vh] lg:mt-8 mb-10 lg:mb-16 xl:mb-24">
          <Image src={NightComputerPic} alt="battery" fill={true} style={{objectFit: 'cover'}} />
        </div>
        <div className="subsection text-left">
          <FadeDiv>
            <p className="desc max-w-[480px] md:w-[600px] xl:max-w-screen-md mb-16">
              新款 MacBook Pro &nbsp;
              <strong className="desc-strong">续航能力领跑所有 Mac 笔电</strong>，
              最长可达 24 小时，还支持快速充电，只需 30 分钟，就能充至最高 50% 的电量44。无论接不接电源，各机型的性能都一样火力全开。你无须时不时担心电量，一心一意追寻热爱就好。
            </p>
          </FadeDiv>
        </div>
        <div className="subsection grid md:grid-cols-2 gap-y-8 md:gap-x-[4rem] lg:gap-x-[8rem]">
          <FadeDiv>
            <div className="gradient-line">
            </div>
            <p className="desc-sm pt-8 pb-2">
              电池续航最长达<sup>2 · 5</sup>
            </p>
            <p className="stat-caption">24 小时</p>
          </FadeDiv>
          <FadeDiv>
            <div className="gradient-line">
            </div>
            <p className="desc-sm pt-8 pb-2">
              相比 MacBook Pro 的 Intel 机型
            </p>
            <p className="stat-caption pb-4">
              最多增加
            </p>
            <p className="stat-caption">
              14 小时<sup>4</sup>
            </p>
          </FadeDiv>
        </div>
      </section>
      <section className="section py-[8rem]">
        <div className="subsection xl:mb-8">
          <p className="headline-eyebrow">macOS</p>
          <p className="headline">犀利一如 Mac。</p>
        </div>
        <div className="subsection text-left">
          <FadeDiv>
            <p className="desc desc-left">
              <strong className="desc-strong">成千上万款 app 都经过优化</strong>，只为淋漓尽致地发挥出 macOS 的实力。加上有 M4 系列芯片强势助推，无论是日常必用的生产力 app、爱不释手的游戏，还是重量级的专业 app，都直接飙上天。
            </p>
            <br />
            <Link href="/" className="text-lg md:text-lg xl:text-xl text-blue-500 hover:underline">
              进一步了解 macOS &gt;
            </Link>
          </FadeDiv>
        </div>
      </section>
      <footer className="flex flex-col items-center w-full bg-zinc-900 pb-[8rem]">
        <div className="section pt-[8rem]">
          <div className="subsection mb-12">
            <p className="headline-eyebrow">2024/11/30 - Written by Tianyu</p>
            <p className="headline">写在后面</p>
          </div>
          <div className="subsection grid gap-y-6 desc">
            <p>
              昨天，又打开了 MacBook Pro 官网， 想着上去解解馋，看看苹果的最新机器，
              结果看着看着，便萌生了复刻其页面的想法。
            </p>
            <p>
              仔细的观察了苹果的网页设计，真的是简洁大气。
              首先映入眼帘的是产品整体效果，上面非常抢眼的彩色炫光 hero 标题。
            </p>
            <p>
              下面便是产品的详细介绍，按照不同主题分成数个 Section。
              每个 Section 由一个 headline 区块标题开始，文案非常的苹果：简短、不像是中国人说的中国话。
              在其上可能有小标题作为注释——是标题的”眉毛（headline-eyebrow）“。
            </p>
            <p>整体效果就像下面这样</p>
          </div>
          <br />
          <div className="subsection">
            <p className="headline-eyebrow">headline-eyebrow</p>
            <p className="headline">Headline</p>
          </div>
          <br />
          <div className="subsection grid gap-y-6 desc">
            <p>
              在其下通常是描述，或者一个图像的展示组件。
              每一段文字描述都会有、且仅有一句是<strong className="desc-strong">高亮显示</strong>的，以突出重点。
              而且所有的高亮，仅限于文字，不包括其后面的标点符号。
            </p>
            <p>
              再下面就是指标的展示，这一部分通常是使用 Grid 布局，每个 Cell 用一段彩色横线作为开始，
              下面是小字的指标描述，外加大号字体、重字号的数字，以凸显数字指标
            </p>
            <FadeDiv>
              <p>而且，所有的描述正文以及指标文字，都额外添加了<strong className="desc-strong">淡入淡出动画</strong>，正如同这段文字出现的效果（试试往上划，再划下来），
                不会一下展示过多的文字，十分的精致。我主要使用了 <code>framer-motion</code> 动画库来实现这个效果</p>
            </FadeDiv>
          </div>
          <br />
          <br />
          <div className="subsection grid md:grid-cols-2 gap-y-8 md:gap-x-[4rem] xl:gap-x-[8rem]">
            <FadeDiv>
              <div className="gradient-line">
              </div>
              <p className="desc-sm pt-8 pb-2">
                今日步数
              </p>
              <p className="stat-caption pb-4">
                10341 步
              </p>
            </FadeDiv>
            <FadeDiv>
              <div className="gradient-line">
              </div>
              <p className="desc-sm pt-8 pb-2">
                本周您的阅读时间超过
              </p>
              <p className="stat-caption pb-4">
                26 小时
              </p>
            </FadeDiv>
          </div>
          <br />
          <br />
          <div className="subsection grid gap-y-6 desc">
            <p>
              截止今日，我已经基本完成了文字类的样式。接下来我将继续实现更多复杂的图像展示类组件
            </p>
          </div>
        </div>
        <div className="section pb-[8rem]">
          <StickyButton />
          <div className="subsection mt-[8rem] grid gap-y-6 desc">
            <p className="headline-eyebrow text-white">2024/12/01</p>
            <p>今日主要复刻了两个东西：一个拥有复杂动画悬浮按钮，以及渐变色霓虹字体</p>
            <p>悬浮按钮的实现思路是这样的：</p>
            <ol className="grid gap-y-6">
              <li>1）首先我实现它的静态样式，主要通过 flex 布局来对其内部文字和蓝色按钮，背景的雾化玻璃效果是由<strong className="desc-strong">浅色背景 + backdrop-blur-md</strong>实现。</li>
              <li>2）其次，在滚动屏幕时，当悬浮按钮出现后，它先回跟随向下滚动，然后固定悬浮在视窗底部，最终随着整个区域离开视窗。
                这一的效果主要通过 <strong className="desc-strong">sticky + top-[92vh]</strong> 来实现。
                其中 position: sticky 的元素首先会跟随父元素一起滚动，直到触及设定 top-[92vh] 的位置，
                这里 top-[92vh] 意味着当元素碰到从上往下计算 92% 屏幕高度时，不在跟随父元素滚动，直到触及父元素的底部为止。
              </li>
              <li>3）然后就是动画了，动画的编写主要用到了 <strong className="desc-strong">framer-motion</strong>。
                分为几个部分，进入时的动画、进入动画的触发、离开时的动画，离开动画的触发，以及初始状态。
              </li>
              <li>
                首先进入/离开动画的触发可以使用 <strong className="desc-strong">useInView</strong> 这个 hook，它会返回一个表示元素是否进入视窗。
                有了这个值，就能确定何时触发进入/离开动画了。
              </li>
              <li>
                然后就是进入/离开时的动画，这里我首先通过观察，将进入动画拆成了 5 步，离开动画拆成了 3 步。
                然后用 <strong className="desc-strong">animate() + Timeline sequence</strong>，
                即动画序列的方法。这里需要注意的是，调用离开动画序列时，对于自身元素 scope.current 的引用会报类型错误，
                因此将所有有动画的元素写成子元素，这样就可以顺利的编写离开动画了。
                在编写动画序列时，配置 <strong className="desc-strong">at: &quot;&lt;&quot;</strong> 即可实现多个元素的动画同时开始。
              </li>
              <li>
                最后还需要定义整个组件的初始样式，即开始前的样式，
                因为组件一开始是不可见的，所以这里大多使用了 <strong className="desc-strong">hidden scale-0</strong> 来隐藏整个组件。
              </li>
            </ol>
            <p><strong className="desc-strong">渐变色霓虹字体</strong>是商品页最上方最抢眼的存在，苹果官网直接使用了一个预渲染的图片来展现。</p>
            <p>而我的实现方法则比较笨了，因为，CSS 上想实现霓虹效果，其实要通过 text-shadow 来层层叠加。
              但是 text-shadow 并不能支持横向渐变色，它的变量仅仅是阴影距离字体的距离，而非横向距离。
              所以我写了 4 种荧光色的样式，
              <span className="glow-blue text-white">从左往右</span>
              <span className="glow-purple text-white">分别赋予</span>
              <span className="glow-pink text-white">不同的</span>
              <span className="glow-orange text-white">颜色样式</span>。
              这样就模拟出了横向渐变霓虹字体的效果了。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
