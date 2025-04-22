import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Welcome() {
  return /* @__PURE__ */ jsx("main", { className: "flex justify-center pt-12 pb-8 px-4 text-gray-800 dark:text-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl w-full space-y-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-center", children: "Вакансия: Агент по работе с клиентами" }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Общие сведения" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "Сфера: маркетинг недвижимости" }),
        /* @__PURE__ */ jsx("li", { children: "Опыт: не требуется" }),
        /* @__PURE__ */ jsx("li", { children: "Языки: 🇷🇺RU и обязательно 🇹🇷TR, 🇬🇧EN будет плюсом" }),
        /* @__PURE__ */ jsx("li", { children: "Потребуются водительские права" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Кто мы" }),
      /* @__PURE__ */ jsxs("p", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Мы — команда, которая решает задачи клиентов, а не просто «продаёт метры»." }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { children: "Помогаем собственникам грамотно выйти на рынок, оформить предложение и закрыть сделку эффективно и прозрачно." }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { children: "Помогаем покупателям найти жильё по рыночной цене, без мутных схем." }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { children: "Ищем не опыт, а мышление. Научим всему нужному." }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { children: "Нужен честный, думающий человек, готовый зарабатывать своим трудом." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "После обучения вы будете" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "Находить собственников, заинтересованных в продаже." }),
        /* @__PURE__ */ jsx("li", { children: "Вести переговоры, согласовывать условия." }),
        /* @__PURE__ */ jsx("li", { children: "Делать медиаподготовку: фото, видео, описание." }),
        /* @__PURE__ */ jsx("li", { children: "Оформлять объекты, запускать рекламу." }),
        /* @__PURE__ */ jsx("li", { children: "Анализировать спрос и управлять эффективностью." }),
        /* @__PURE__ */ jsx("li", { children: "Работать с покупателями, проводить показы." }),
        /* @__PURE__ */ jsx("li", { children: "Сопровождать клиентов до закрытия сделки." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Вы" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "Хотите помогать людям и хорошо зарабатывать." }),
        /* @__PURE__ */ jsx("li", { children: "Говорите на русском и турецком (английский — плюс)." }),
        /* @__PURE__ */ jsx("li", { children: "Коммуницируете грамотно и уважительно." }),
        /* @__PURE__ */ jsx("li", { children: "Готовы к изменениям и быстро обучаетесь." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Эта вакансия не для вас, если вы" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1 text-red-600 dark:text-red-400", children: [
        /* @__PURE__ */ jsx("li", { children: "Не любите работать с клиентами." }),
        /* @__PURE__ */ jsx("li", { children: "Опытный риэлтор и не готовы менять подход." }),
        /* @__PURE__ */ jsx("li", { children: "Хотите только фиксированный оклад." }),
        /* @__PURE__ */ jsx("li", { children: "Нуждаетесь в постоянном контроле." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Мы даём" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "Живое обучение без шаблонов и скриптов." }),
        /* @__PURE__ */ jsx("li", { children: "Эффективные инструменты: таблицы, алгоритмы, систему." }),
        /* @__PURE__ */ jsx("li", { children: "Наставничество и постоянную поддержку." }),
        /* @__PURE__ */ jsx("li", { children: "Прозрачную систему вознаграждения." }),
        /* @__PURE__ */ jsx("li", { children: "Возможность роста — и в доходе, и в знаниях." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg font-medium", children: "Пишите, если узнали себя — будем рады знакомству!" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://forms.gle/kXUMsEgK6Hy6cDf5A",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition",
          children: "Перейти к анкете"
        }
      )
    ] })
  ] }) });
}
function meta({}) {
  return [{
    title: "Dreamhold Property"
  }, {
    name: "description",
    content: "We are hiring!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DEhqkEvJ.js", "imports": ["/assets/chunk-LSOULM7L-CWHHAzKG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-5bvs6rS8.js", "imports": ["/assets/chunk-LSOULM7L-CWHHAzKG.js", "/assets/with-props-OMgF-07X.js"], "css": ["/assets/root-PZjS0p2N.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BQyQfa42.js", "imports": ["/assets/with-props-OMgF-07X.js", "/assets/chunk-LSOULM7L-CWHHAzKG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-45f27329.js", "version": "45f27329", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/"];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
