--
-- PostgreSQL database dump
--

\restrict HOzkinaPn5aEiHDs8ZBPLIergKQRzdtY2yI3V5PU2qQjhVg8uEyxMAbNccuv4Er

-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: is_membro(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.is_membro() RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.usuarios_autorizados u
    WHERE lower(u.email) = lower(auth.jwt() ->> 'email')
  );
$$;


--
-- Name: set_updated_at(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.set_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
  new.updated_at = now();
  return new;
end;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: clientes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clientes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nome text NOT NULL,
    cnpj text,
    segmento text,
    status text DEFAULT 'lead'::text NOT NULL,
    origem text,
    observacoes text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT clientes_status_check CHECK ((status = ANY (ARRAY['lead'::text, 'qualificado'::text, 'proposta'::text, 'ativo'::text, 'inativo'::text])))
);


--
-- Name: config_empresa; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.config_empresa (
    id integer DEFAULT 1 NOT NULL,
    razao_social text,
    nome_fantasia text,
    cnpj text,
    regime text,
    email text,
    endereco text,
    atualizado_em timestamp with time zone DEFAULT now() NOT NULL,
    saldo_caixa numeric(14,2) DEFAULT 0 NOT NULL,
    CONSTRAINT config_empresa_id_check CHECK ((id = 1))
);


--
-- Name: contas_a_pagar; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contas_a_pagar (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    descricao text NOT NULL,
    categoria text DEFAULT 'outros'::text NOT NULL,
    valor numeric(14,2) NOT NULL,
    vencimento date NOT NULL,
    pago_em date,
    recorrente boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT contas_a_pagar_categoria_check CHECK ((categoria = ANY (ARRAY['ferramentas'::text, 'infraestrutura'::text, 'salarios'::text, 'marketing'::text, 'impostos'::text, 'outros'::text])))
);


--
-- Name: contatos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contatos (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid NOT NULL,
    nome text NOT NULL,
    email text,
    telefone text,
    cargo text,
    principal boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: contratos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contratos (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid NOT NULL,
    titulo text NOT NULL,
    valor numeric(14,2) DEFAULT 0 NOT NULL,
    tipo text DEFAULT 'projeto'::text NOT NULL,
    status text DEFAULT 'rascunho'::text NOT NULL,
    vigencia_inicio date,
    vigencia_fim date,
    assinado_em date,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT contratos_status_check CHECK ((status = ANY (ARRAY['rascunho'::text, 'enviado'::text, 'assinado'::text]))),
    CONSTRAINT contratos_tipo_check CHECK ((tipo = ANY (ARRAY['projeto'::text, 'recorrente'::text])))
);


--
-- Name: deals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.deals (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid NOT NULL,
    titulo text NOT NULL,
    valor numeric(14,2) DEFAULT 0 NOT NULL,
    etapa text DEFAULT 'novo'::text NOT NULL,
    probabilidade integer DEFAULT 0 NOT NULL,
    fechamento_esperado date,
    responsavel text,
    ultima_atividade timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT deals_etapa_check CHECK ((etapa = ANY (ARRAY['novo'::text, 'qualificacao'::text, 'proposta'::text, 'negociacao'::text, 'ganho'::text, 'perdido'::text]))),
    CONSTRAINT deals_probabilidade_check CHECK (((probabilidade >= 0) AND (probabilidade <= 100)))
);


--
-- Name: despesas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.despesas (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    descricao text NOT NULL,
    categoria text DEFAULT 'outros'::text NOT NULL,
    valor numeric(14,2) NOT NULL,
    data date NOT NULL,
    recorrente boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT despesas_categoria_check CHECK ((categoria = ANY (ARRAY['ferramentas'::text, 'infraestrutura'::text, 'salarios'::text, 'marketing'::text, 'impostos'::text, 'outros'::text])))
);


--
-- Name: faturas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.faturas (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid NOT NULL,
    projeto_id uuid,
    descricao text NOT NULL,
    valor numeric(14,2) NOT NULL,
    status text DEFAULT 'rascunho'::text NOT NULL,
    emitida_em date,
    vencimento date NOT NULL,
    pago_em date,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT faturas_status_check CHECK ((status = ANY (ARRAY['rascunho'::text, 'enviada'::text, 'paga'::text, 'atrasada'::text, 'cancelada'::text])))
);


--
-- Name: marcos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.marcos (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    projeto_id uuid NOT NULL,
    titulo text NOT NULL,
    data date NOT NULL,
    concluido boolean DEFAULT false NOT NULL
);


--
-- Name: membros; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.membros (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nome text NOT NULL,
    papel text,
    capacidade_semanal integer DEFAULT 40 NOT NULL,
    custo_hora numeric(10,2) DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: metas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.metas (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    mes date,
    receita_meta numeric(14,2) DEFAULT 0 NOT NULL,
    despesa_meta numeric(14,2) DEFAULT 0 NOT NULL,
    mrr_meta numeric(14,2) DEFAULT 0 NOT NULL
);


--
-- Name: projetos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projetos (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid NOT NULL,
    nome text NOT NULL,
    tipo text DEFAULT 'one_off'::text NOT NULL,
    valor numeric(14,2),
    status text DEFAULT 'proposta'::text NOT NULL,
    data_inicio date,
    data_fim date,
    descricao text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    custo numeric(14,2),
    CONSTRAINT projetos_status_check CHECK ((status = ANY (ARRAY['proposta'::text, 'ativo'::text, 'pausado'::text, 'concluido'::text, 'cancelado'::text]))),
    CONSTRAINT projetos_tipo_check CHECK ((tipo = ANY (ARRAY['one_off'::text, 'recorrente'::text])))
);


--
-- Name: propostas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.propostas (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid NOT NULL,
    deal_id uuid,
    titulo text NOT NULL,
    itens jsonb DEFAULT '[]'::jsonb NOT NULL,
    status text DEFAULT 'rascunho'::text NOT NULL,
    enviada_em date,
    validade date,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT propostas_status_check CHECK ((status = ANY (ARRAY['rascunho'::text, 'enviada'::text, 'aceita'::text, 'recusada'::text])))
);


--
-- Name: prospect_conversations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prospect_conversations (
    id bigint NOT NULL,
    place_id text NOT NULL,
    role text NOT NULL,
    text text NOT NULL,
    at text NOT NULL
);


--
-- Name: prospect_conversations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.prospect_conversations ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.prospect_conversations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: prospect_leads; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prospect_leads (
    place_id text NOT NULL,
    name text NOT NULL,
    niche text NOT NULL,
    city text NOT NULL,
    address text,
    phone text,
    website text,
    rating double precision,
    reviews_count integer,
    maps_url text,
    pain_score integer NOT NULL,
    qualified integer NOT NULL,
    reasons text,
    channels text,
    captured_at text NOT NULL,
    contacted integer DEFAULT 0,
    replied integer DEFAULT 0,
    positive integer DEFAULT 0,
    call_booked integer DEFAULT 0,
    closed integer DEFAULT 0,
    ticket double precision DEFAULT 0,
    isca_whatsapp text,
    isca_instagram text,
    isca_email_subj text,
    isca_email_body text,
    isca_at text,
    isca2_mockup_url text,
    isca2_demo_url text
);


--
-- Name: prospect_outreach; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prospect_outreach (
    place_id text NOT NULL,
    channel text NOT NULL,
    status text DEFAULT 'active'::text NOT NULL,
    touch_index integer DEFAULT 0 NOT NULL,
    next_action_at text,
    last_touch_at text,
    created_at text NOT NULL,
    updated_at text NOT NULL
);


--
-- Name: prospect_runs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prospect_runs (
    id bigint NOT NULL,
    niche text NOT NULL,
    city text NOT NULL,
    captured integer NOT NULL,
    qualified integer NOT NULL,
    ran_at text NOT NULL
);


--
-- Name: prospect_runs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.prospect_runs ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.prospect_runs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: prospect_suppression; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prospect_suppression (
    key text NOT NULL,
    reason text,
    at text NOT NULL
);


--
-- Name: reunioes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reunioes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cliente_id uuid,
    contato_id uuid,
    titulo text NOT NULL,
    data_hora timestamp with time zone NOT NULL,
    tipo text DEFAULT 'meet'::text NOT NULL,
    status text DEFAULT 'agendada'::text NOT NULL,
    notas text,
    follow_up text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT reunioes_status_check CHECK ((status = ANY (ARRAY['agendada'::text, 'realizada'::text, 'cancelada'::text]))),
    CONSTRAINT reunioes_tipo_check CHECK ((tipo = ANY (ARRAY['meet'::text, 'ligacao'::text, 'presencial'::text])))
);


--
-- Name: solicitacoes_despesa; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.solicitacoes_despesa (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    descricao text NOT NULL,
    categoria text DEFAULT 'outros'::text NOT NULL,
    valor numeric(14,2) NOT NULL,
    solicitante text,
    data date NOT NULL,
    status text DEFAULT 'pendente'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT solicitacoes_despesa_categoria_check CHECK ((categoria = ANY (ARRAY['ferramentas'::text, 'infraestrutura'::text, 'salarios'::text, 'marketing'::text, 'impostos'::text, 'outros'::text]))),
    CONSTRAINT solicitacoes_despesa_status_check CHECK ((status = ANY (ARRAY['pendente'::text, 'aprovada'::text, 'rejeitada'::text])))
);


--
-- Name: tarefas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tarefas (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    projeto_id uuid NOT NULL,
    titulo text NOT NULL,
    status text DEFAULT 'todo'::text NOT NULL,
    responsavel text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT tarefas_status_check CHECK ((status = ANY (ARRAY['todo'::text, 'doing'::text, 'done'::text])))
);


--
-- Name: usuarios_autorizados; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuarios_autorizados (
    email text NOT NULL,
    criado_em timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id);


--
-- Name: config_empresa config_empresa_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.config_empresa
    ADD CONSTRAINT config_empresa_pkey PRIMARY KEY (id);


--
-- Name: contas_a_pagar contas_a_pagar_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contas_a_pagar
    ADD CONSTRAINT contas_a_pagar_pkey PRIMARY KEY (id);


--
-- Name: contatos contatos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contatos
    ADD CONSTRAINT contatos_pkey PRIMARY KEY (id);


--
-- Name: contratos contratos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contratos
    ADD CONSTRAINT contratos_pkey PRIMARY KEY (id);


--
-- Name: deals deals_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.deals
    ADD CONSTRAINT deals_pkey PRIMARY KEY (id);


--
-- Name: despesas despesas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.despesas
    ADD CONSTRAINT despesas_pkey PRIMARY KEY (id);


--
-- Name: faturas faturas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.faturas
    ADD CONSTRAINT faturas_pkey PRIMARY KEY (id);


--
-- Name: marcos marcos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.marcos
    ADD CONSTRAINT marcos_pkey PRIMARY KEY (id);


--
-- Name: membros membros_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membros
    ADD CONSTRAINT membros_pkey PRIMARY KEY (id);


--
-- Name: metas metas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.metas
    ADD CONSTRAINT metas_pkey PRIMARY KEY (id);


--
-- Name: projetos projetos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projetos
    ADD CONSTRAINT projetos_pkey PRIMARY KEY (id);


--
-- Name: propostas propostas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.propostas
    ADD CONSTRAINT propostas_pkey PRIMARY KEY (id);


--
-- Name: prospect_conversations prospect_conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prospect_conversations
    ADD CONSTRAINT prospect_conversations_pkey PRIMARY KEY (id);


--
-- Name: prospect_leads prospect_leads_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prospect_leads
    ADD CONSTRAINT prospect_leads_pkey PRIMARY KEY (place_id);


--
-- Name: prospect_outreach prospect_outreach_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prospect_outreach
    ADD CONSTRAINT prospect_outreach_pkey PRIMARY KEY (place_id);


--
-- Name: prospect_runs prospect_runs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prospect_runs
    ADD CONSTRAINT prospect_runs_pkey PRIMARY KEY (id);


--
-- Name: prospect_suppression prospect_suppression_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prospect_suppression
    ADD CONSTRAINT prospect_suppression_pkey PRIMARY KEY (key);


--
-- Name: reunioes reunioes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reunioes
    ADD CONSTRAINT reunioes_pkey PRIMARY KEY (id);


--
-- Name: solicitacoes_despesa solicitacoes_despesa_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.solicitacoes_despesa
    ADD CONSTRAINT solicitacoes_despesa_pkey PRIMARY KEY (id);


--
-- Name: tarefas tarefas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_pkey PRIMARY KEY (id);


--
-- Name: usuarios_autorizados usuarios_autorizados_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios_autorizados
    ADD CONSTRAINT usuarios_autorizados_pkey PRIMARY KEY (email);


--
-- Name: clientes_status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX clientes_status_idx ON public.clientes USING btree (status);


--
-- Name: contas_a_pagar_venc_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX contas_a_pagar_venc_idx ON public.contas_a_pagar USING btree (vencimento);


--
-- Name: contatos_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX contatos_cliente_idx ON public.contatos USING btree (cliente_id);


--
-- Name: contratos_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX contratos_cliente_idx ON public.contratos USING btree (cliente_id);


--
-- Name: deals_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX deals_cliente_idx ON public.deals USING btree (cliente_id);


--
-- Name: deals_etapa_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX deals_etapa_idx ON public.deals USING btree (etapa);


--
-- Name: despesas_categoria_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX despesas_categoria_idx ON public.despesas USING btree (categoria);


--
-- Name: despesas_data_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX despesas_data_idx ON public.despesas USING btree (data);


--
-- Name: faturas_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX faturas_cliente_idx ON public.faturas USING btree (cliente_id);


--
-- Name: faturas_status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX faturas_status_idx ON public.faturas USING btree (status);


--
-- Name: faturas_venc_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX faturas_venc_idx ON public.faturas USING btree (vencimento);


--
-- Name: idx_prospect_conv_place; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_prospect_conv_place ON public.prospect_conversations USING btree (place_id, id);


--
-- Name: idx_prospect_leads_niche; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_prospect_leads_niche ON public.prospect_leads USING btree (niche);


--
-- Name: idx_prospect_leads_qualified; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_prospect_leads_qualified ON public.prospect_leads USING btree (qualified, pain_score DESC);


--
-- Name: idx_prospect_outreach_due; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_prospect_outreach_due ON public.prospect_outreach USING btree (status, next_action_at);


--
-- Name: idx_prospect_runs_niche; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_prospect_runs_niche ON public.prospect_runs USING btree (niche);


--
-- Name: marcos_projeto_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX marcos_projeto_idx ON public.marcos USING btree (projeto_id);


--
-- Name: projetos_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX projetos_cliente_idx ON public.projetos USING btree (cliente_id);


--
-- Name: projetos_status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX projetos_status_idx ON public.projetos USING btree (status);


--
-- Name: propostas_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX propostas_cliente_idx ON public.propostas USING btree (cliente_id);


--
-- Name: reunioes_cliente_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX reunioes_cliente_idx ON public.reunioes USING btree (cliente_id);


--
-- Name: reunioes_data_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX reunioes_data_idx ON public.reunioes USING btree (data_hora);


--
-- Name: tarefas_projeto_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX tarefas_projeto_idx ON public.tarefas USING btree (projeto_id);


--
-- Name: clientes clientes_set_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER clientes_set_updated_at BEFORE UPDATE ON public.clientes FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: projetos projetos_set_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER projetos_set_updated_at BEFORE UPDATE ON public.projetos FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


--
-- Name: contatos contatos_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contatos
    ADD CONSTRAINT contatos_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE CASCADE;


--
-- Name: contratos contratos_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contratos
    ADD CONSTRAINT contratos_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE RESTRICT;


--
-- Name: deals deals_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.deals
    ADD CONSTRAINT deals_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE CASCADE;


--
-- Name: faturas faturas_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.faturas
    ADD CONSTRAINT faturas_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE RESTRICT;


--
-- Name: faturas faturas_projeto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.faturas
    ADD CONSTRAINT faturas_projeto_id_fkey FOREIGN KEY (projeto_id) REFERENCES public.projetos(id) ON DELETE SET NULL;


--
-- Name: marcos marcos_projeto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.marcos
    ADD CONSTRAINT marcos_projeto_id_fkey FOREIGN KEY (projeto_id) REFERENCES public.projetos(id) ON DELETE CASCADE;


--
-- Name: projetos projetos_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projetos
    ADD CONSTRAINT projetos_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE RESTRICT;


--
-- Name: propostas propostas_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.propostas
    ADD CONSTRAINT propostas_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE CASCADE;


--
-- Name: propostas propostas_deal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.propostas
    ADD CONSTRAINT propostas_deal_id_fkey FOREIGN KEY (deal_id) REFERENCES public.deals(id) ON DELETE SET NULL;


--
-- Name: prospect_outreach prospect_outreach_place_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prospect_outreach
    ADD CONSTRAINT prospect_outreach_place_id_fkey FOREIGN KEY (place_id) REFERENCES public.prospect_leads(place_id) ON DELETE CASCADE;


--
-- Name: reunioes reunioes_cliente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reunioes
    ADD CONSTRAINT reunioes_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL;


--
-- Name: reunioes reunioes_contato_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reunioes
    ADD CONSTRAINT reunioes_contato_id_fkey FOREIGN KEY (contato_id) REFERENCES public.contatos(id) ON DELETE SET NULL;


--
-- Name: tarefas tarefas_projeto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tarefas
    ADD CONSTRAINT tarefas_projeto_id_fkey FOREIGN KEY (projeto_id) REFERENCES public.projetos(id) ON DELETE CASCADE;


--
-- Name: clientes; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;

--
-- Name: config_empresa; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.config_empresa ENABLE ROW LEVEL SECURITY;

--
-- Name: contas_a_pagar; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.contas_a_pagar ENABLE ROW LEVEL SECURITY;

--
-- Name: contatos; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.contatos ENABLE ROW LEVEL SECURITY;

--
-- Name: contratos; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.contratos ENABLE ROW LEVEL SECURITY;

--
-- Name: deals; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;

--
-- Name: despesas; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.despesas ENABLE ROW LEVEL SECURITY;

--
-- Name: faturas; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.faturas ENABLE ROW LEVEL SECURITY;

--
-- Name: marcos; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.marcos ENABLE ROW LEVEL SECURITY;

--
-- Name: membros; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.membros ENABLE ROW LEVEL SECURITY;

--
-- Name: clientes membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.clientes AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: config_empresa membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.config_empresa AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: contas_a_pagar membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.contas_a_pagar AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: contatos membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.contatos AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: contratos membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.contratos AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: deals membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.deals AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: despesas membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.despesas AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: faturas membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.faturas AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: marcos membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.marcos AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: membros membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.membros AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: metas membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.metas AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: projetos membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.projetos AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: propostas membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.propostas AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: reunioes membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.reunioes AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: solicitacoes_despesa membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.solicitacoes_despesa AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: tarefas membros_only; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY membros_only ON public.tarefas AS RESTRICTIVE TO authenticated USING (public.is_membro()) WITH CHECK (public.is_membro());


--
-- Name: metas; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.metas ENABLE ROW LEVEL SECURITY;

--
-- Name: projetos; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.projetos ENABLE ROW LEVEL SECURITY;

--
-- Name: propostas; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.propostas ENABLE ROW LEVEL SECURITY;

--
-- Name: prospect_conversations; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.prospect_conversations ENABLE ROW LEVEL SECURITY;

--
-- Name: prospect_conversations prospect_conversations_membros; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY prospect_conversations_membros ON public.prospect_conversations FOR SELECT TO authenticated USING (public.is_membro());


--
-- Name: prospect_leads; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.prospect_leads ENABLE ROW LEVEL SECURITY;

--
-- Name: prospect_leads prospect_leads_membros; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY prospect_leads_membros ON public.prospect_leads FOR SELECT TO authenticated USING (public.is_membro());


--
-- Name: prospect_outreach; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.prospect_outreach ENABLE ROW LEVEL SECURITY;

--
-- Name: prospect_outreach prospect_outreach_membros; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY prospect_outreach_membros ON public.prospect_outreach FOR SELECT TO authenticated USING (public.is_membro());


--
-- Name: prospect_runs; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.prospect_runs ENABLE ROW LEVEL SECURITY;

--
-- Name: prospect_runs prospect_runs_membros; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY prospect_runs_membros ON public.prospect_runs FOR SELECT TO authenticated USING (public.is_membro());


--
-- Name: prospect_suppression; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.prospect_suppression ENABLE ROW LEVEL SECURITY;

--
-- Name: reunioes; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.reunioes ENABLE ROW LEVEL SECURITY;

--
-- Name: solicitacoes_despesa; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.solicitacoes_despesa ENABLE ROW LEVEL SECURITY;

--
-- Name: tarefas; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.tarefas ENABLE ROW LEVEL SECURITY;

--
-- Name: usuarios_autorizados; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.usuarios_autorizados ENABLE ROW LEVEL SECURITY;

--
-- Name: usuarios_autorizados usuarios_autorizados_select; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY usuarios_autorizados_select ON public.usuarios_autorizados FOR SELECT TO authenticated USING (public.is_membro());


--
-- PostgreSQL database dump complete
--

\unrestrict HOzkinaPn5aEiHDs8ZBPLIergKQRzdtY2yI3V5PU2qQjhVg8uEyxMAbNccuv4Er

