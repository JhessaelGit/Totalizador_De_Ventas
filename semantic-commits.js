import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function checkDependencies() {
  const huskyDir = path.join(__dirname, '.husky');

  if (!fs.existsSync(huskyDir)) {
    console.error('⚠️  Las dependencias necesarias no están instaladas. Por favor, ejecuta `npm install` e inténtalo de nuevo.');
    process.exit(1);
  }
}

checkDependencies();

const args = process.argv.slice(2);
const stateFilePath = './.husky/.commit-state';
const semanticRegex = /^(feat|fix|docs|style|refactor|test|chore|perf)(\(\w+\))?: .{1,150}$/;

function readStateFile() {
  return fs.existsSync(stateFilePath)
    ? fs.readFileSync(stateFilePath, 'utf-8').trim()
    : 'disabled';
}

function writeStateFile(state) {
  fs.writeFileSync(stateFilePath, state, 'utf-8');
}

function printCommitGuide() {
  console.log(`\n📝 \x1b[1mGuía para mensajes de commit\x1b[0m\n`);
  console.log(`✨ \x1b[1mFormato:\x1b[0m`);
  console.log(`  <tipo>: <descripción>`);
  console.log(`\n📂 \x1b[1mTipos válidos:\x1b[0m`);
  console.log(`  - feat: Nueva funcionalidad.`);
  console.log(`  - fix: Corrección de errores.`);
  console.log(`  - docs: Cambios en documentación.`);
  console.log(`  - style: Ajustes estéticos (formato, espaciado, etc.).`);
  console.log(`  - refactor: Reestructuración del código sin cambiar su funcionalidad.`);
  console.log(`  - test: Modificaciones relacionadas con pruebas.`);
  console.log(`  - chore: Tareas de mantenimiento.`);
  console.log(`  - perf: Optimización de rendimiento.`);
  console.log(`\n🖋️ \x1b[1mDescripción:\x1b[0m`);
  console.log(`   Breve explicación del cambio (máximo 150 caracteres).`);
  console.log(`\n📌 \x1b[1mEjemplos:\x1b[0m`);
  console.log(`  - feat: agregar validación de usuarios`);
  console.log(`  - refactor: simplificar la lógica del controlador de usuarios\n`);
}

function printCommitError() {
  console.error('⛔️ Error: Mensaje de commit inválido.');
  console.error('Asegúrate de que el mensaje sigue este formato:');
  console.error('<tipo>: <descripción>');
  console.error('Ejemplo válido:');
  console.error('refactor: simplificar la función que valida el correo electrónico');
}

function validateCommitMessage(commitMessagePath) {
  try {
    const commitMessage = fs.readFileSync(commitMessagePath, 'utf-8').trim();
    if (!semanticRegex.test(commitMessage)) {
      printCommitError();
      process.exit(1);
    }
    console.log('✅ Mensaje de commit válido.');
  } catch (err) {
    console.error('❌ Error durante la validación del mensaje del commit:', err);
    process.exit(1);
  }
}

function handleStateChange(state) {
  writeStateFile(state);
  console.log(`🔄 Validación de commits ${state === 'enable' ? 'habilitada' : 'deshabilitada'}.`);
  if (state === 'enable') printCommitGuide();
  process.exit(0);
}

function main() {
  const habilitacionCommits = readStateFile();

  if (args[0] === 'enable' || args[0] === 'disabled') {
    handleStateChange(args[0]);
  }

  if (habilitacionCommits === 'enable') {
    const commitMessagePath = args[0];
    validateCommitMessage(commitMessagePath);
  } else {
    console.log('🔄 Validación de commits deshabilitada.');
  }
  process.exit(0);
}

main();