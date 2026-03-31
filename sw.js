# 📱 Fluxo – Controle Financeiro (PWA)

App de controle de gastos e finanças pessoais.
Funciona offline e pode ser instalado no Android como um app nativo.

---

## 🚀 Como hospedar no GitHub Pages (grátis, 5 minutos)

### Passo 1 – Crie uma conta no GitHub
Acesse https://github.com e crie uma conta gratuita.

### Passo 2 – Crie um repositório
1. Clique em **"New repository"**
2. Nome: `fluxo-financas` (ou qualquer nome)
3. Deixe **Public**
4. Clique em **"Create repository"**

### Passo 3 – Faça upload dos arquivos
1. Na página do repositório, clique em **"uploading an existing file"**
2. Arraste **todos os arquivos desta pasta** (index.html, manifest.json, sw.js e a pasta icons/)
3. Clique em **"Commit changes"**

### Passo 4 – Ative o GitHub Pages
1. Vá em **Settings** > **Pages**
2. Em "Source", selecione **"Deploy from a branch"**
3. Branch: **main**, pasta: **/ (root)**
4. Clique em **Save**
5. Aguarde ~1 minuto → seu app estará em:
   `https://SEU-USUARIO.github.io/fluxo-financas`

---

## 📲 Como instalar no Android

1. Abra o link do app no **Google Chrome**
2. Aguarde alguns segundos → aparecerá uma mensagem:
   **"Adicionar Fluxo à tela inicial"**
3. Toque em **Instalar** (ou Adicionar)
4. O ícone aparecerá na sua tela inicial como um app normal! ✅

> O app funciona **offline** após a primeira visita.
> Os dados são salvos **no próprio celular** (localStorage).

---

## 📁 Estrutura dos arquivos

```
fluxo-pwa/
├── index.html      → App principal
├── manifest.json   → Configurações do PWA
├── sw.js           → Service Worker (modo offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## ✨ Funcionalidades

- ➕ Adicionar receitas e despesas com categoria
- 📅 Navegação por mês
- 📊 Gráfico e ranking por categoria
- ⚠️ Alerta quando gastos passam de 85% da renda
- 💾 Dados salvos no celular (não perde ao fechar)
- 📴 Funciona sem internet
- 📲 Instalável como app Android

---

Desenvolvido com ♥ usando HTML, CSS e JavaScript puro.
