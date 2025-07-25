window.onload = function() {
    // Seletores (incluindo as novas colunas)
    const fileInput = document.getElementById('excelFile');
    const reportContainer = document.getElementById('reportContainer');
    const leftColumn = document.getElementById('leftColumn');
    const rightColumn = document.getElementById('rightColumn');
    const vendedorFilter = document.getElementById('vendedorFilter');
    const downloadPdfButton = document.getElementById('downloadPdf');
    const sheetSelectorContainer = document.getElementById('sheetSelectorContainer');
    const salesSheetSelect = document.getElementById('salesSheetSelect');
    const collaboratorsSheetSelect = document.getElementById('collaboratorsSheetSelect');
    const generateReportButton = document.getElementById('generateReportButton');
    let workbook;

    fileInput.addEventListener('change', handleFile);
    generateReportButton.addEventListener('click', generateReportFromSelection);

    function handleFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        resetUI();
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            workbook = XLSX.read(data, { type: 'array', cellDates: true });
            populateSheetSelectors(workbook.SheetNames);
            sheetSelectorContainer.classList.remove('hidden');
        };
        reader.readAsArrayBuffer(file);
    }

    function populateSheetSelectors(sheetNames) {
        salesSheetSelect.innerHTML = '';
        collaboratorsSheetSelect.innerHTML = '';
        sheetNames.forEach(name => {
            salesSheetSelect.add(new Option(name, name));
            collaboratorsSheetSelect.add(new Option(name, name));
        });
    }

    function generateReportFromSelection() {
        if (!workbook) { alert("Por favor, carregue um arquivo Excel primeiro."); return; }
        const salesData = XLSX.utils.sheet_to_json(workbook.Sheets[salesSheetSelect.value]);
        const collaboratorsData = XLSX.utils.sheet_to_json(workbook.Sheets[collaboratorsSheetSelect.value]);

        const dateColumnName = findDateColumn(salesData);
        if (!dateColumnName) {
            alert("Não foi possível encontrar uma coluna de data ('Inicio da Semanal' ou 'Início da Semana'). Verifique sua planilha.");
            return;
        }

        const generalHtml = buildGeneralSummaryHtml(salesData);
        const weeklyHtml = buildWeeklySummaryHtml(salesData, dateColumnName);
        const salespeopleHtml = buildAllSalespeopleReportsHtml(salesData, collaboratorsData, dateColumnName);

        leftColumn.innerHTML = generalHtml + weeklyHtml;
        rightColumn.innerHTML = salespeopleHtml;

        setupVendedorFilter(salesData, collaboratorsData);
        setupDownloadButton();

        sheetSelectorContainer.classList.add('hidden');
    }

    function resetUI() {
        leftColumn.innerHTML = `<div class="placeholder"><h2>Aguardando a planilha...</h2><p>Por favor, carregue um arquivo Excel para começar.</p></div>`;
        rightColumn.innerHTML = '';
        sheetSelectorContainer.classList.add('hidden');
        vendedorFilter.classList.add('hidden');
        downloadPdfButton.classList.add('hidden');
    }

    function findDateColumn(sales) {
        if (sales.length === 0) return null;
        const headers = Object.keys(sales[0]);
        const possibleNames = ['Início da Semana', 'Inicio da Semanal'];
        for (const name of possibleNames) {
            if (headers.includes(name)) return name;
        }
        return null;
    }

    function getRawImageUrl(githubUrl) {
        if (!githubUrl || typeof githubUrl !== 'string') return '';
        return githubUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    }

    function parseDate(excelVal) {
        if (excelVal instanceof Date) return excelVal;
        if (typeof excelVal === 'number') return XLSX.utils.numToDate(excelVal);
        if (typeof excelVal === 'string') {
            const parts = excelVal.split('/');
            if (parts.length === 3) {
                const day = parseInt(parts[0], 10), month = parseInt(parts[1], 10) - 1, year = parseInt(parts[2], 10);
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) return new Date(Date.UTC(year, month, day));
            }
            const d = new Date(excelVal);
            if (d instanceof Date && !isNaN(d)) return d;
        }
        return null;
    }

    function buildGeneralSummaryHtml(sales) {
        const totalVendas = sales.length;
        const vendasInteiras = sales.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
        const vendasParciais = sales.filter(s => s['Tipo de Venda'] === 'Entrada de Venda').length;
        const retornos = sales.filter(s => s['Tipo de Venda'] === 'Retorno').length;
        const valorTotal = sales.reduce((sum, s) => sum + (s.Valor || 0), 0);
        return `<div class="report-section"><h2>1. RELATÓRIO GERAL DO DEPARTAMENTO</h2><div class="summary-grid"><div class="summary-item"><p>Total de Vendas</p><span class="value">${totalVendas}</span></div><div class="summary-item"><p>Vendas Inteiras</p><span class="value">${vendasInteiras}</span></div><div class="summary-item"><p>Vendas Parciais</p><span class="value">${vendasParciais}</span></div><div class="summary-item"><p>Retornos Emitidos</p><span class="value">${retornos}</span></div><div class="summary-item"><p>Valor Total Recebido</p><span class="value">${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div></div></div>`;
    }

    function buildWeeklySummaryHtml(sales, dateColumnName) {
        const weeklyData = {};
        sales.forEach(sale => {
            const dateObj = parseDate(sale[dateColumnName]);
            if (!dateObj) return;
            const weekStartDateStr = dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            if (!weeklyData[weekStartDateStr]) {
                weeklyData[weekStartDateStr] = { sales: [], dateObj: dateObj };
            }
            weeklyData[weekStartDateStr].sales.push(sale);
        });

        let weeklyHtml = '<div class="report-section"><h2>2. DETALHAMENTO SEMANAL</h2>';
        if (Object.keys(weeklyData).length === 0) {
            weeklyHtml += '<p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum dado semanal encontrado.</p>';
        } else {
            weeklyHtml += '<div class="weekly-details">';
            Object.keys(weeklyData).sort((a, b) => weeklyData[a].dateObj - weeklyData[b].dateObj).forEach(week => {
                const weekSales = weeklyData[week].sales;
                const totalVendas = weekSales.length;
                const retornos = weekSales.filter(s => s['Tipo de Venda'] === 'Retorno').length;
                const valorTotal = weekSales.reduce((sum, s) => sum + (s.Valor || 0), 0);
                weeklyHtml += `<div class="weekly-item"><p><strong>Semana de ${week}</strong></p><p>Total de Vendas: <strong class="value">${totalVendas}</strong></p><p>Retornos: <strong class="value">${retornos}</strong></p><p>Valor Total: <strong class="value">${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p></div>`;
            });
            weeklyHtml += '</div>';
        }
        weeklyHtml += '</div>';
        return weeklyHtml;
    }

    function buildAllSalespeopleReportsHtml(sales, collaborators, dateColumnName) {
        let allReportsHtml = '<div class="report-section" id="vendedoresContainer"><h2>3. RELATÓRIOS INDIVIDUAIS POR VENDEDOR</h2>';
        let hasSalespeopleReports = false;
        collaborators.forEach(collab => {
            const salesByPerson = sales.filter(s => s.ColaboradorID === collab.ColaboradorID);
            if (salesByPerson.length === 0) return;
            hasSalespeopleReports = true;
            const totalVendas = salesByPerson.length;
            const vendasInteiras = salesByPerson.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
            const vendasParciais = salesByPerson.filter(s => s['Tipo de Venda'] === 'Entrada de Venda').length;
            const retornos = salesByPerson.filter(s => s['Tipo de Venda'] === 'Retorno').length;
            const valorTotal = salesByPerson.reduce((sum, s) => sum + (s.Valor || 0), 0);
            const weeklyData = {};
            salesByPerson.forEach(sale => {
                const dateObj = parseDate(sale[dateColumnName]);
                if (!dateObj) return;
                const weekStartDateStr = dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                if (!weeklyData[weekStartDateStr]) {
                    weeklyData[weekStartDateStr] = { count: 0, value: 0, dateObj: dateObj };
                }
                weeklyData[weekStartDateStr].count++;
                weeklyData[weekStartDateStr].value += sale.Valor || 0;
            });
            let weeklyDetailHtml = '<h4>Detalhamento Semanal:</h4>';
            if (Object.keys(weeklyData).length === 0) {
                weeklyDetailHtml += '<p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum dado semanal para este vendedor.</p>';
            } else {
                weeklyDetailHtml += '<ul class="vendedor-semanal-list">';
                Object.keys(weeklyData).sort((a, b) => weeklyData[a].dateObj - weeklyData[b].dateObj).forEach(week => {
                    const data = weeklyData[week];
                    weeklyDetailHtml += `<li>Semana de ${week}: <strong>${data.count} vendas</strong> | <strong>${data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></li>`;
                });
                weeklyDetailHtml += '</ul>';
            }
            const imageUrl = getRawImageUrl(collab.Foto);
            allReportsHtml += `<div class="vendedor-section" data-vendedor-id="${collab.ColaboradorID}"><div class="vendedor-header"><img src="${imageUrl}" alt="Foto de ${collab.Nome}" crossorigin="anonymous"><h3>Vendedor(a): ${collab.Nome}</h3></div><h4>Resumo do Mês:</h4><div class="summary-grid"><div class="summary-item"><p>Total de Vendas</p><span class="value">${totalVendas}</span></div><div class="summary-item"><p>Vendas Inteiras</p><span class="value">${vendasInteiras}</span></div><div class="summary-item"><p>Vendas Parciais</p><span class="value">${vendasParciais}</span></div><div class="summary-item"><p>Retornos</p><span class="value">${retornos}</span></div><div class="summary-item"><p>Valor Recebido</p><span class="value">${valorTotal.toLocaleString('pt-BR', { style: 'currency', 'currency': 'BRL' })}</span></div></div>${weeklyDetailHtml}</div>`;
        });
        allReportsHtml += '</div>';
        return hasSalespeopleReports ? allReportsHtml : '<div class="report-section"><h2>3. RELATÓRIOS INDIVIDUAIS POR VENDEDOR</h2><p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum vendedor com vendas encontrado.</p></div>';
    }

    function setupVendedorFilter(sales, collaborators) {
        vendedorFilter.innerHTML = '<option value="todos">Filtrar por Vendedor</option>';
        let hasSalespeople = false;
        collaborators.forEach(collab => {
            if (sales.some(s => s.ColaboradorID === collab.ColaboradorID)) {
                hasSalespeople = true;
                const option = document.createElement('option');
                option.value = collab.ColaboradorID;
                option.textContent = collab.Nome;
                vendedorFilter.appendChild(option);
            }
        });
        if (hasSalespeople) {
            vendedorFilter.classList.remove('hidden');
            vendedorFilter.addEventListener('change', (e) => {
                const selectedId = e.target.value;
                document.querySelectorAll('.vendedor-section').forEach(section => {
                    section.style.display = (selectedId === 'todos' || section.dataset.vendedorId === String(selectedId)) ? 'block' : 'none';
                });
            });
        }
    }

    // ==============================================================================
    //               FUNÇÃO DE DOWNLOAD DO PDF ATUALIZADA
    // ==============================================================================
    function setupDownloadButton() {
        downloadPdfButton.classList.remove('hidden');
        const newButton = downloadPdfButton.cloneNode(true);
        downloadPdfButton.parentNode.replaceChild(newButton, downloadPdfButton);

        newButton.addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const reportElement = document.getElementById('reportContainer');

            html2canvas(reportElement, { scale: 2, useCORS: true }).then(canvas => {
                // Pega as dimensões da imagem gerada pelo html2canvas
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                // Cria um PDF com as mesmas proporções da imagem
                // O jsPDF trabalha em 'pt' (pontos), onde 1pt = 1/72 de polegada. A conversão de px para pt não é direta,
                // mas podemos criar um PDF com as mesmas proporções da imagem para que ela caiba perfeitamente.
                const pdf = new jsPDF({
                    orientation: 'p', // retrato
                    unit: 'px', // vamos trabalhar em pixels para facilitar
                    format: [imgWidth, imgHeight] // formato customizado com a largura e altura da nossa imagem
                });

                // Adiciona a imagem ao PDF, ocupando todo o espaço da página customizada
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);

                pdf.save("relatorio-de-vendas.pdf");
            });
        });
    }
};