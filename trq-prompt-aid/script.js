// Grab form elements
const goalEl = document.getElementById('goal');
const contextEl = document.getElementById('context');
const sourceEl = document.getElementById('source');
const expectationsEl = document.getElementById('expectations');
const previewEl = document.getElementById('previewText');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const deleteBtn = document.getElementById('deleteBtn');
const examplesSelect = document.getElementById('examples');
const toolTip = document.getElementById('tips');

// Modal elements
const deleteModal = document.getElementById('deleteModal');
const deleteModalMessage = document.getElementById('deleteModalMessage');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

// Save modal elements
const saveModal = document.getElementById('saveModal');
const promptNameInput = document.getElementById('promptName');
const confirmSaveBtn = document.getElementById('confirmSaveBtn');
const cancelSaveBtn = document.getElementById('cancelSaveBtn');
const overwriteWarning = document.getElementById('overwriteWarning');

// Copy modal elements
const copyModal = document.getElementById('copyModal');
const closeCopyModalBtn = document.getElementById('closeCopyModalBtn');

// Track the currently selected prompt
let currentSelectedPrompt = null;
let currentSelectedType = null; // 'example' or 'custom'
let pendingSaveName = null;

let savedPrompts = {};
const examples = {
    "pareto learning": {
        goal: "Learn a new topic efficiently using the Pareto Principle (80/20 rule).",
        context: "I want to focus only on the highest-leverage concepts that produce the majority of real-world results.",
        source: "The topic I want to learn is [insert topic here].",
        expectations: "Identify the top 20% of concepts to focus on, common beginner mistakes, high-impact exercises, and provide a short 2-week learning plan."
    },
    "problem breakdown": {
        goal: "Break down a complex problem into smaller, manageable components.",
        context: "The problem feels overwhelming and unclear.",
        source: "Here is the problem description: [insert problem].",
        expectations: "List the main sub-problems, explain why each matters, and suggest a practical first step for each."
    },
    "improve writing": {
        goal: "Improve clarity and professionalism of my writing.",
        context: "This is a draft that needs refinement.",
        source: "Here is the draft text: [paste text].",
        expectations: "Rewrite the text for clarity and conciseness, then briefly explain the key improvements made."
    },
    "decision framework": {
        goal: "Compare two options to make a strategic decision.",
        context: "I need help evaluating trade-offs objectively.",
        source: "Option A: [describe]. Option B: [describe].",
        expectations: "Compare across pros, cons, risks, long-term upside, and give a clear recommendation with reasoning."
    },
    "execution plan": {
        goal: "Create a step-by-step plan to achieve a goal.",
        context: "I have limited time and need a structured roadmap.",
        source: "My goal is: [insert goal]. I have [X hours] per week.",
        expectations: "Provide weekly milestones, specific tasks, recommended tools, and measurable outcomes."
    },
    "feedback review": {
        goal: "Get constructive feedback on my work.",
        context: "I want honest, actionable suggestions for improvement.",
        source: "Here is my work: [paste content/code/design].",
        expectations: "List strengths, weaknesses, and 5 specific improvement suggestions."
    },
    "reverse engineer": {
        goal: "Reverse engineer a desired outcome.",
        context: "I know the result I want but not the steps to get there.",
        source: "Here is the desired outcome: [describe result].",
        expectations: "Identify required skills, tools, risks, and provide the first 3 actions I should take."
    },
    "clarifying questions": {
        goal: "Ensure the best possible response before solving the problem.",
        context: "The task may be ambiguous or missing important details.",
        source: "Here is my request: [insert request].",
        expectations: "Ask the 5 most important clarifying questions before providing the final answer."
    },
    "optimize process": {
        goal: "Improve an existing workflow or process.",
        context: "The current process feels inefficient or slow.",
        source: "Here is the current process: [describe steps].",
        expectations: "Identify bottlenecks, suggest improvements, and provide a more efficient version of the workflow."
    },
    "generate templates": {
        goal: "Create ready-to-use templates for repeated tasks.",
        context: "I frequently perform similar tasks and want reusable formats.",
        source: "The task type is: [insert task type].",
        expectations: "Provide 3 reusable templates formatted for immediate copy-and-paste use."
    },
    "summarize": {
        goal: "Summarize what happened during the meeting.",
        context: "I attended a one-hour meeting about the product roadmap with design and engineering teams.",
        source: "Use the meeting notes attached or the transcript below.",
        expectations: "Provide a concise paragraph highlighting decisions and actions, no more than 5 sentences."
    },
    "email": {
        goal: "Draft a professional email requesting a project update.",
        context: "Write from the perspective of a project manager emailing a developer team.",
        source: "Refer to the last status report and timeline.",
        expectations: "The tone should be polite and clear; include a subject line suggestion."
    },
    "brainstorm": {
        goal: "Brainstorm ideas for improving our onboarding documentation.",
        context: "We want new hires to ramp up faster.",
        source: "Use our current documentation structure as a reference.",
        expectations: "List at least 5 suggestions in bullet points."
    }
};

function updatePreview() {
    const parts = [];
    if (goalEl.value.trim()) parts.push(`${goalEl.value.trim()}`);
    if (contextEl.value.trim()) parts.push(`${contextEl.value.trim()}`);
    if (sourceEl.value.trim()) parts.push(`${sourceEl.value.trim()}`);
    if (expectationsEl.value.trim()) parts.push(`${expectationsEl.value.trim()}`);
    previewEl.textContent = parts.join(" ");
}

function applyParts(p) {
    goalEl.value = p.goal || '';
    contextEl.value = p.context || '';
    sourceEl.value = p.source || '';
    expectationsEl.value = p.expectations || '';
    updatePreview();
}

function renderExamples() {
    // clear existing options except the first placeholder
    examplesSelect.innerHTML = '<option value="" selected>-- choose example --</option>';
    // built-in examples
    Object.keys(examples).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        examplesSelect.appendChild(opt);
    });
    // saved prompts
    if (Object.keys(savedPrompts).length) {
        const sep = document.createElement('option');
        sep.disabled = true;
        sep.textContent = '--- Saved prompts ---';
        examplesSelect.appendChild(sep);
        Object.keys(savedPrompts).forEach(name => {
            const opt = document.createElement('option');
            opt.value = `custom:${name}`;
            opt.textContent = name;
            examplesSelect.appendChild(opt);
        });
    }
}

/* ========================================
   Toast Notification System
   ======================================== */

function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Auto-remove after duration
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

/* ========================================
   Modal Functions
   ======================================== */

function openDeleteModal(promptName) {
    deleteModalMessage.textContent = `Are you sure you want to delete "${promptName}"?`;
    deleteModal.classList.remove('hidden');
}

function closeDeleteModal() {
    deleteModal.classList.add('hidden');
}

function openSaveModal() {
    promptNameInput.value = '';
    overwriteWarning.classList.add('hidden');
    saveModal.classList.remove('hidden');
    promptNameInput.focus();
}

function closeSaveModal() {
    saveModal.classList.add('hidden');
    promptNameInput.value = '';
    pendingSaveName = null;
}

function openCopyModal(promptText) {
    copyModal.classList.remove('hidden');
}

function closeCopyModal() {
    copyModal.classList.add('hidden');
}

// fetch saved prompts from localStorage
function loadSaved() {
    savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '{}');
}

function saveCurrentPrompt(name) {
    if (!name || !name.trim()) {
        showToast('Please enter a name for the prompt', 'warning');
        return;
    }

    const promptName = name.trim();
    
    if (savedPrompts[promptName]) {
        // Show overwrite warning
        pendingSaveName = promptName;
        overwriteWarning.classList.remove('hidden');
        return;
    }
    
    // Proceed with saving
    const promptData = {
        goal: goalEl.value.trim(),
        context: contextEl.value.trim(),
        source: sourceEl.value.trim(),
        expectations: expectationsEl.value.trim()
    };
    savedPrompts[promptName] = promptData;
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    renderExamples();
    closeSaveModal();
    showToast(`Prompt "${promptName}" saved successfully!`, 'success');
}

function deleteCurrentPrompt(confirmDelete = false) {
    if (!currentSelectedPrompt) {
        showToast('Please select a prompt to delete', 'warning');
        return;
    }
    
    if (!confirmDelete) {
        openDeleteModal(currentSelectedPrompt);
        return;
    }
    
    if (currentSelectedType === 'example') {
        delete examples[currentSelectedPrompt];
    } else if (currentSelectedType === 'custom') {
        delete savedPrompts[currentSelectedPrompt];
        localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    }
    
    const deletedName = currentSelectedPrompt;
    
    // Clear form and reset selection
    goalEl.value = '';
    contextEl.value = '';
    sourceEl.value = '';
    expectationsEl.value = '';
    examplesSelect.value = '';
    currentSelectedPrompt = null;
    currentSelectedType = null;
    updatePreview();
    renderExamples();
    updateDeleteButton();
    closeDeleteModal();
    showToast(`Prompt "${deletedName}" deleted`, 'success');
}

[goalEl, contextEl, sourceEl, expectationsEl].forEach(el => {
    el.addEventListener('input', updatePreview);
});

function updateDeleteButton() {
    deleteBtn.disabled = !currentSelectedPrompt;
}

examplesSelect.addEventListener('change', () => {
    const val = examplesSelect.value;
    if (val.startsWith('custom:')) {
        const name = val.substring(7);
        const saved = savedPrompts[name];
        if (saved) {
            currentSelectedPrompt = name;
            currentSelectedType = 'custom';
            applyParts(saved);
        }
    } else if (examples[val]) {
        currentSelectedPrompt = val;
        currentSelectedType = 'example';
        applyParts(examples[val]);
    } else {
        currentSelectedPrompt = null;
        currentSelectedType = null;
    }
    updateDeleteButton();
});

saveBtn.addEventListener('click', openSaveModal);

// Save modal events
confirmSaveBtn.addEventListener('click', () => {
    saveCurrentPrompt(promptNameInput.value);
});

cancelSaveBtn.addEventListener('click', closeSaveModal);

// Allow Enter key to save
promptNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        saveCurrentPrompt(promptNameInput.value);
    }
});

// Modal delete events
deleteBtn.addEventListener('click', () => {
    deleteCurrentPrompt(false);
});

confirmDeleteBtn.addEventListener('click', () => {
    deleteCurrentPrompt(true);
});

cancelDeleteBtn.addEventListener('click', closeDeleteModal);

// Close modals on overlay click
document.getElementById('deleteModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeDeleteModal();
    }
});

document.getElementById('saveModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeSaveModal();
    }
});

document.getElementById('copyModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeCopyModal();
    }
});

copyBtn.addEventListener('click', () => {
    if (!previewEl.textContent.trim()) {
        showToast('No prompt to copy', 'warning');
        return;
    }
    
    navigator.clipboard.writeText(previewEl.textContent)
        .then(() => {
            openCopyModal(previewEl.textContent);
        })
        .catch(err => {
            console.error('Copy failed', err);
            showToast('Failed to copy prompt', 'error');
        });
});

closeCopyModalBtn.addEventListener('click', closeCopyModal);

// Initialize
(() => {
    loadSaved();
    renderExamples();
    updatePreview();
    updateDeleteButton();
})();