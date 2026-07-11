# 🚗 OficinaPro

> Plataforma SaaS para gestão inteligente de oficinas mecânicas.

## 📖 Sobre o projeto

O **OficinaPro** é uma plataforma SaaS desenvolvida para ajudar oficinas mecânicas a gerenciar toda a sua operação de forma simples, moderna e eficiente.

O sistema centraliza clientes, veículos, ordens de serviço, estoque, agendamentos, financeiro e histórico de manutenção em um único lugar, permitindo que o proprietário tenha controle total da oficina.

O principal objetivo é reduzir tarefas manuais, automatizar processos, melhorar o relacionamento com os clientes e aumentar o faturamento da oficina.

---

# 🎯 Missão

Simplificar a gestão de oficinas mecânicas por meio de uma plataforma moderna, intuitiva e acessível, permitindo que os proprietários tenham controle total da operação, aumentem a produtividade da equipe, fidelizem clientes e façam o negócio crescer.

---

# 🚀 Visão

Ser uma das principais plataformas de gestão para oficinas mecânicas da América Latina, oferecendo tecnologia acessível e ferramentas inteligentes para pequenos e médios negócios.

---

# 💡 Problema

Grande parte das oficinas ainda utiliza:

- Papel
- Planilhas
- WhatsApp
- Cadernos
- Sistemas antigos e pouco intuitivos

Isso gera problemas como:

- Clientes perdidos
- Histórico inexistente
- Falta de organização
- Estoque desatualizado
- Agendamentos conflitantes
- Perda de faturamento
- Falta de indicadores
- Comunicação ineficiente

---

# ✅ Solução

O OficinaPro reúne toda a gestão da oficina em uma única plataforma.

Através do sistema será possível:

- Gerenciar clientes
- Gerenciar veículos
- Criar Ordens de Serviço
- Controlar estoque
- Agendar serviços
- Gerenciar mecânicos
- Acompanhar indicadores
- Controlar o financeiro
- Automatizar lembretes
- Melhorar o relacionamento com os clientes

---

# 👥 Público-alvo

Inicialmente:

- Oficinas mecânicas
- Centros automotivos
- Auto elétricas
- Mecânicas especializadas
- Oficinas de pequeno e médio porte

Futuramente:

- Borracharias
- Funilarias
- Lava-rápidos
- Oficinas diesel
- Oficinas de motos
- Empresas com múltiplas unidades

---

# 🏗 Arquitetura

```
React
        │
        ▼
 Supabase
 ├── Authentication
 ├── PostgreSQL
 ├── Storage
 └── Realtime
```

O sistema será desenvolvido utilizando arquitetura **multi-tenant**, onde cada oficina terá acesso apenas aos seus próprios dados.

---

# 🛠 Stack

## Front-end

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- React Hook Form
- Zod
- TailwindCSS
- shadcn/ui

## Backend (MVP)

- Supabase
- PostgreSQL
- Authentication
- Storage
- Row Level Security (RLS)
- Realtime

## Futuro

- Spring Boot
- Docker
- Redis
- Kafka
- Evolution API
- AWS

---

# 🏢 Multi-Tenant

Cada oficina representa um Tenant.

```
Tenant A

Clientes
Veículos
Ordens
Funcionários
Financeiro

-------------------------

Tenant B

Clientes
Veículos
Ordens
Funcionários
Financeiro
```

Todo registro do banco possuirá um `tenant_id`.

As políticas de **Row Level Security (RLS)** garantirão que cada oficina visualize apenas seus próprios dados.

---

# 📋 Funcionalidades do MVP

## 🔐 Autenticação

- Login
- Cadastro
- Recuperação de senha
- Sessão

---

## 👥 Clientes

- Cadastro
- Edição
- Exclusão
- Histórico
- Contatos
- Observações

---

## 🚗 Veículos

- Marca
- Modelo
- Ano
- Placa
- Cor
- Quilometragem
- Chassi
- Motor

---

## 📄 Ordens de Serviço

Cada Ordem de Serviço possuirá:

- Cliente
- Veículo
- Mecânico responsável
- Problema informado
- Diagnóstico
- Serviços executados
- Peças utilizadas
- Fotos
- Valor
- Status

Status:

- Recebido
- Em Diagnóstico
- Aguardando Aprovação
- Em Serviço
- Pronto
- Entregue
- Cancelado

---

## 📅 Agenda

Agendamento de serviços.

Controle da agenda de cada mecânico.

Evitar conflitos de horários.

---

## 📦 Estoque

Cadastro de peças.

Controle de entradas.

Controle de saídas.

Baixa automática ao utilizar uma peça na Ordem de Serviço.

Alerta de estoque mínimo.

---

## 💰 Financeiro

- Entradas
- Saídas
- Fluxo de caixa
- Lucro
- Contas a pagar
- Contas a receber

---

## 📊 Dashboard

Indicadores da oficina.

Exemplo:

- Ordens abertas
- Ordens em andamento
- Ordens concluídas
- Veículos entregues
- Faturamento
- Estoque baixo
- Clientes cadastrados

---

# ⭐ Funcionalidades Diferenciais

## Histórico completo do veículo

Todo veículo possuirá um histórico de serviços realizados.

Exemplo:

```
Gol 2019

Troca de óleo

↓

Troca de freios

↓

Troca da embreagem

↓

Revisão completa
```

---

## Manutenção Preventiva

O sistema permitirá configurar regras como:

- Troca de óleo
- Troca de filtro
- Correia dentada
- Pastilhas
- Revisões

Baseadas em:

- Quilometragem
- Tempo

Quando chegar o momento da manutenção, o sistema poderá gerar notificações.

---

## Checklist de inspeção

Antes de iniciar um serviço:

- Pneus
- Freios
- Suspensão
- Faróis
- Bateria
- Fluídos
- Limpadores

Tudo registrado na Ordem de Serviço.

---

## Fotos

A Ordem de Serviço permitirá armazenar fotos:

- Antes
- Durante
- Depois

---

## Agenda Inteligente

O sistema impedirá conflitos de horários entre mecânicos.

---

## Indicadores da equipe

Cada mecânico poderá possuir indicadores como:

- Quantidade de serviços
- Tempo médio
- Valor produzido
- Horas trabalhadas

---

# 🚀 Roadmap

## MVP

- [ ] Autenticação
- [ ] Multi Tenant
- [ ] Dashboard
- [ ] Clientes
- [ ] Veículos
- [ ] Ordens de Serviço
- [ ] Agenda
- [ ] Estoque
- [ ] Financeiro

---

## Versão 2

- [ ] WhatsApp
- [ ] Portal do Cliente
- [ ] Aprovação de orçamento
- [ ] Fotos
- [ ] Relatórios
- [ ] Dashboard avançado

---

## Versão 3

- [ ] Aplicativo Mobile
- [ ] Integração com pagamento
- [ ] Nota Fiscal
- [ ] Múltiplas unidades
- [ ] API Pública
- [ ] Integração com catálogos de peças

---

## Versão 4

- [ ] Inteligência Artificial
- [ ] Sugestões automáticas de manutenção
- [ ] Previsão de faturamento
- [ ] Assistente inteligente
- [ ] Chat com clientes

---

# 📌 Objetivo do MVP

O objetivo da primeira versão não é possuir centenas de funcionalidades.

O objetivo é validar que oficinas mecânicas realmente desejam utilizar e pagar pelo OficinaPro.

Após validar o produto com clientes reais, novas funcionalidades serão desenvolvidas com base no feedback dos usuários.

---

# 📄 Licença

Projeto em desenvolvimento.