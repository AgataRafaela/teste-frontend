'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />

      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.left}
        >
          <div className={styles.badge}>
            <span /> Python + IA na prática
          </div>

          <h1 className={styles.title}>
            Aprenda Python do zero e construa projetos reais com IA
          </h1>

          <p className={styles.subtitle}>
            O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
          </p>

          <ul className={styles.list}>
            {[
              '+40 horas de conteúdo direto ao ponto',
              'Projetos com Python + IA desde o módulo 1',
              'Comunidade com +20.000 alunos',
              'Certificado reconhecido pelo mercado'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span />
                {item}
              </motion.li>
            ))}
          </ul>

          <div className={styles.actions}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primary}
            >
              Quero começar agora
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondary}
            >
              Ver o que vou aprender
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.right}
        >
          <div className={styles.editor}>
            <div className={styles.editorHeader}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
              <p>main.py</p>
            </div>

            <SyntaxHighlighter
                language="python"
  style={oneDark}
  customStyle={{
    background: 'transparent',
    padding: '1rem',
    margin: 0,
    fontSize: '0.85rem',
  }}
  codeTagProps={{
    style: { background: 'transparent' }
  }}
  lineProps={{
    style: { background: 'transparent' }
  }}
            >
{`# Projeto inicial com Python + IA
import openai

class CursoPythonIA:
    def __init__(self, aluno):
        self.aluno = aluno

    def iniciar_jornada(self):
        print(f"Bem-vindo, {self.aluno} 🚀")
        print("Construindo projetos reais com IA...")

    def projeto_exemplo(self):
        ideia = "Gerador de insights com IA"
        return f"Projeto criado: {ideia}"

curso = CursoPythonIA("Você")
curso.iniciar_jornada()
print(curso.projeto_exemplo())`}
            </SyntaxHighlighter>
          </div>

        <div className={styles.glow} />
            </motion.div>
        </div>
    </section>
  )
}