window.onload = function() {
    // Logo da empresa em formato Base64 para ser embutida no PDF
    const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAD8+2i1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGcAACMzSURBVHiclZz5nyxHlh7E+/f/Y9i2bdu2bdu2bdu2bdu2bdu2bdu2bdu2bdu27V+2sW27LwPz8Vl9v9fM7M5KzIxsJgYkERjZ/dE9vS/eA8/e8573vOe9D5/o/1dY/D/S/Yj2L9L9kPFP3g75B+M/vB3yD8J+eDvkD2B/eDvkE9C9u/j52N/o/k36X7N+kv2D8J/eDvkD8J/eDvkD4D+8HfIHwH94O+QPgP/wdkgb/P0g+4fgP7wd8gfAf3g75A+A/vB2yB8B/eDvkD4D/8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kg4D+8HfIHwH94O+QPgP7wd8gfAf3g75A+A//B2yB8A/+HtkD8A/gPYD28H/AHsB7eD/wD2g7dD3gD4D8B+eDvkD4D+8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kjYt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt2-9a+D/8v4/8P+gfgP7wd8gfAf3g75A+A/vB2yB8B/eDvkD2B/eDvkE9C9u/j52N/o/k36X7N+kv2D8J/eDvkD8J/eDvkD4D+8HfIHwH94O+QPgP/wdkgb/P0g+4fgP7wd8gfAf3g75A+A/vB2yB8B/eDvkD4D/8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kg4D+8HfIHwH94O+QPgP7wd8gfAf3g75A+A//B2yB8A/+HtkD8A/gPYD28H/AHsB7eD/wD2g7dD3gD4D8B+eDvkD4D+8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kjYt23b9tX9/7b/AOYv1D9c/S4p5wAAAABJRU5ErkJggg==';
    // Seletores dos elementos da página
    const fileInput = document.getElementById('excelFile');
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

        const uniqueSalesData = [];
        const seenVendaIDs = new Set();
        for (const sale of salesData) {
            if (sale.VendaID && !seenVendaIDs.has(sale.VendaID)) {
                uniqueSalesData.push(sale);
                seenVendaIDs.add(sale.VendaID);
            }
        }

        const dateColumnName = findDateColumn(uniqueSalesData);
        if (!dateColumnName) {
            alert("Não foi possível encontrar uma coluna de data ('Inicio da Semanal' ou 'Início da Semana'). Verifique sua planilha.");
            return;
        }

        const generalHtml = buildGeneralSummaryHtml(uniqueSalesData);
        const weeklyHtml = buildWeeklySummaryHtml(uniqueSalesData, dateColumnName);
        const salespeopleHtml = buildAllSalespeopleReportsHtml(uniqueSalesData, collaboratorsData, dateColumnName);

        leftColumn.innerHTML = generalHtml;
        rightColumn.innerHTML = weeklyHtml + salespeopleHtml;

        setupVendedorFilter(uniqueSalesData, collaboratorsData);
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

    function calculateStars(validSalesCount) {
        if (validSalesCount >= 10) return "⭐⭐⭐";
        if (validSalesCount >= 8) return "⭐⭐";
        if (validSalesCount >= 5) return "⭐";
        return "";
    }

    function isVendaValida(sale) {
        if (!sale) return false;
        if (sale.Valor && sale.Valor >= 850) { return true; }
        const produto = sale.Produto || '';
        if (produto.toLowerCase().includes('entrada')) { return true; }
        return false;
    }

    function buildGeneralSummaryHtml(sales) {
        const vendasValidas = sales.filter(isVendaValida);
        const totalVendasValidas = vendasValidas.length;
        const valorTotalRecebido = sales.reduce((sum, s) => sum + (s.Valor || 0), 0);
        const vendasInteiras = sales.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
        const entradasDeVenda = sales.filter(s => s['Tipo de Venda'] === 'Entrada de Venda').length;
        const retornos = sales.filter(s => s['Tipo de Venda'] === 'Retorno').length;
        const valorTotalRealizado = vendasValidas.reduce((sum, s) => sum + (s.Valor || 0), 0);

        return `<div class="report-section" id="general-summary">
                    <h2>1. RELATÓRIO GERAL DO DEPARTAMENTO</h2>
                    <div class="summary-grid">
                        <div class="summary-item"><p>Vendas Válidas</p><span class="value">${totalVendasValidas}</span></div>
                        <div class="summary-item"><p>Vendas Inteiras</p><span class="value">${vendasInteiras}</span></div>
                        <div class="summary-item"><p>Entradas de Venda</p><span class="value">${entradasDeVenda}</span></div>
                        <div class="summary-item"><p>Retornos Emitidos</p><span class="value">${retornos}</span></div>
                    </div>
                    <div class="summary-grid-totals">
                        <div class="summary-item"><p>Valor Total Recebido (com retornos)</p><span class="value">${valorTotalRecebido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        <div class="summary-item"><p>Valor Total Realizado (vendas válidas)</p><span class="value">${valorTotalRealizado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                    </div>
                </div>`;
    }

    function buildWeeklySummaryHtml(sales, dateColumnName) {
        const weeklyData = {};
        sales.forEach(sale => {
            const dateObj = parseDate(sale[dateColumnName]);
            if (!dateObj) return;
            const endDate = new Date(dateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
            const weekLabel = `${dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${endDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;
            if (!weeklyData[weekLabel]) {
                weeklyData[weekLabel] = { sales: [], dateObj: dateObj };
            }
            weeklyData[weekLabel].sales.push(sale);
        });

        let weeklyHtml = '<div class="report-section" id="weekly-summary"><h2>2. DETALHAMENTO SEMANAL</h2>';
        if (Object.keys(weeklyData).length === 0) {
            weeklyHtml += '<p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum dado semanal encontrado.</p>';
        } else {
            weeklyHtml += '<div class="weekly-details">';
            Object.keys(weeklyData).sort((a, b) => weeklyData[a].dateObj - weeklyData[b].dateObj).forEach(week => {
                const weekSales = weeklyData[week].sales;
                const totalVendas = weekSales.filter(s => s['Tipo de Venda'] !== 'Retorno').length;
                const retornos = weekSales.filter(s => s['Tipo de Venda'] === 'Retorno').length;
                const valorTotal = weekSales.reduce((sum, s) => sum + (s.Valor || 0), 0);
                weeklyHtml += `<div class="weekly-item"><p><strong>Semana ${week}</strong></p><p>Total de Vendas: <strong class="value">${totalVendas}</strong></p><p>Retornos: <strong class="value">${retornos}</strong></p><p>Valor Total: <strong class="value">${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p></div>`;
            });
            weeklyHtml += '</div>';
        }
        weeklyHtml += '</div>';
        return weeklyHtml;
    }

    function buildAllSalespeopleReportsHtml(sales, collaborators, dateColumnName) {
        let allReportsHtml = '<div id="vendedoresContainer"><h2>3. RELATÓRIOS INDIVIDUAIS POR VENDEDOR</h2>';
        let hasSalespeopleReports = false;
        collaborators.forEach(collab => {
            const salesByPerson = sales.filter(s => s.ColaboradorID === collab.ColaboradorID);
            if (salesByPerson.length === 0) return;
            hasSalespeopleReports = true;

            const vendasInteiras = salesByPerson.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
            const entradasDeVenda = salesByPerson.filter(s => s['Tipo de Venda'] === 'Entrada de Venda').length;
            const totalVendas = vendasInteiras + entradasDeVenda;
            const retornos = salesByPerson.filter(s => s['Tipo de Venda'] === 'Retorno').length;
            const valorTotal = salesByPerson.reduce((sum, s) => sum + (s.Valor || 0), 0);

            // ** NOVO CÁLCULO **
            const valorRealizado = salesByPerson.filter(isVendaValida).reduce((sum, s) => sum + (s.Valor || 0), 0);

            const weeklyData = {};
            salesByPerson.forEach(sale => {
                const dateObj = parseDate(sale[dateColumnName]);
                if (!dateObj) return;
                const endDate = new Date(dateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
                const weekLabel = `${dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${endDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;
                if (!weeklyData[weekLabel]) {
                    weeklyData[weekLabel] = { count: 0, validas: 0, inteiras: 0, entradas: 0, dateObj: dateObj };
                }

                weeklyData[weekLabel].count++;
                if (sale['Tipo de Venda'] === 'Venda Inteira') weeklyData[weekLabel].inteiras++;
                else if (sale['Tipo de Venda'] === 'Entrada de Venda') weeklyData[weekLabel].entradas++;
                if (isVendaValida(sale)) weeklyData[weekLabel].validas++;
            });

            let weeklyDetailHtml = '<div class="vendedor-detalhe-semanal"><h4>Detalhamento Semanal:</h4>';
            if (Object.keys(weeklyData).length === 0) {
                weeklyDetailHtml += '<p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum dado.</p>';
            } else {
                weeklyDetailHtml += '<ul class="vendedor-semanal-list">';
                Object.keys(weeklyData).sort((a, b) => weeklyData[a].dateObj - weeklyData[b].dateObj).forEach(week => {
                    const data = weeklyData[week];
                    const stars = calculateStars(data.validas);
                    const weeklyValue = salesByPerson.filter(s => {
                        const saleDateObj = parseDate(s[dateColumnName]);
                        if (!saleDateObj) return false;
                        const saleEndDate = new Date(saleDateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
                        const saleWeekLabel = `${saleDateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${saleEndDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;
                        return saleWeekLabel === week;
                    }).reduce((sum, s) => sum + (s.Valor || 0), 0);

                    weeklyDetailHtml += `<li><div class="weekly-item-header"><strong>Semana de ${week}</strong><span class="stars">${stars}</span></div><div class="weekly-sub-details"><span>Vendas Válidas: <strong>${data.validas}</strong></span><span>Vendas Totais: <strong>${data.inteiras + data.entradas}</strong></span><span>Valor: <strong>${weeklyValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></span></div></li>`;
                });
                weeklyDetailHtml += '</ul>';
            }
            weeklyDetailHtml += '</div>';

            const nomeArquivo = collab.Nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const imageUrl = `images/foto-${nomeArquivo}.png`;

            // ** HTML ATUALIZADO com o novo card e layout de grid **
            allReportsHtml += `<div class="vendedor-section" data-vendedor-id="${collab.ColaboradorID}" data-vendedor-nome="${collab.Nome}"><div class="vendedor-header"><img src="${imageUrl}" alt="Foto de ${collab.Nome}"><h3>Vendedor(a): ${collab.Nome}</h3></div><div class="vendedor-body"><div class="vendedor-resumo-mes"><h4>Resumo do Mês:</h4><div class="summary-grid"><div class="summary-item"><p>Total de Vendas</p><span class="value">${totalVendas}</span></div><div class="summary-item"><p>Vendas Inteiras</p><span class="value">${vendasInteiras}</span></div><div class="summary-item"><p>Entradas de Venda</p><span class="value">${entradasDeVenda}</span></div><div class="summary-item"><p>Retornos</p><span class="value">${retornos}</span></div></div><div class="summary-grid-totals"><div class="summary-item"><p>Valor Recebido</p><span class="value">${valorTotal.toLocaleString('pt-BR', { style: 'currency', 'currency': 'BRL' })}</span></div><div class="summary-item"><p>Valor Realizado</p><span class="value">${valorRealizado.toLocaleString('pt-BR', { style: 'currency', 'currency': 'BRL' })}</span></div></div></div>${weeklyDetailHtml}</div></div>`;
        });
        allReportsHtml += '</div>';
        return hasSalespeopleReports ? allReportsHtml : '<div><h2>3. RELATÓRIOS INDIVIDUAIS POR VENDEDOR</h2><p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum vendedor com vendas encontrado.</p></div>';
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
                    section.style.display = (selectedId === 'todos' || section.dataset.vendedorId === String(selectedId)) ? 'grid' : 'none';
                });
            });
        }
    }

    function imageToBase64(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    async function setupDownloadButton() {
        downloadPdfButton.classList.remove('hidden');
        const newButton = downloadPdfButton.cloneNode(true);
        downloadPdfButton.parentNode.replaceChild(newButton, downloadPdfButton);

        newButton.addEventListener('click', async () => {
            newButton.textContent = 'Gerando PDF...';
            newButton.disabled = true;

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'l',
                unit: 'pt',
                format: [1920, 1080]
            });
            pdf.deletePage(1);

            const options = {
                scale: 2.5,
                useCORS: true,
                backgroundColor: null
            };
            const logoBase64 = await imageToBase64('images/logo-TDF-sem-fundo.png');

            // --- 1. Adicionar a primeira página ---
            const firstPageCaptureArea = document.createElement('div');
            firstPageCaptureArea.className = 'pdf-capture-area';

            const headerHtml = `<div class="pdf-header">
                <img class="logo" src="${logoBase64}" />
                <h1>RELATÓRIO GERAL DO DEPARTAMENTO</h1>
            </div>`;

            const generalReportEl = document.getElementById('general-summary').cloneNode(true);
            const weeklyReportEl = document.getElementById('weekly-summary').cloneNode(true);

            firstPageCaptureArea.innerHTML = headerHtml + `<div class="pdf-content-grid"></div>`;
            firstPageCaptureArea.querySelector('.pdf-content-grid').appendChild(generalReportEl);
            firstPageCaptureArea.querySelector('.pdf-content-grid').appendChild(weeklyReportEl);

            document.body.appendChild(firstPageCaptureArea);

            const firstPageCanvas = await html2canvas(firstPageCaptureArea, options);
            document.body.removeChild(firstPageCaptureArea);

            pdf.addPage([1920, 1080], 'l');
            pdf.addImage(firstPageCanvas.toDataURL('image/png', 1.0), 'PNG', 0, 0, 1920, 1080);

            // --- 2. Adicionar uma página para cada vendedor ---
            const vendedorSections = document.querySelectorAll('.vendedor-section');
            for (const section of vendedorSections) {
                if (section.style.display !== 'none') {
                    const captureArea = document.createElement('div');
                    captureArea.className = 'pdf-capture-area';
                    const vendedorNome = section.dataset.vendedorNome || 'Vendedor';
                    const clonedSection = section.cloneNode(true);

                    const nomeArquivo = vendedorNome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const imageUrl = `images/foto-${nomeArquivo}.png`;
                    const fotoVendedorBase64 = await imageToBase64(imageUrl);

                    const vendedorHeaderHtml = `<div class="pdf-header">
                        <img class="logo" src="${logoBase64}" />
                        <div class="pdf-title-block">
                           <h1>RELATÓRIO INDIVIDUAL</h1>
                           <h2>${vendedorNome}</h2>
                        </div>
                        <img class="vendedor-foto" src="${fotoVendedorBase64}" />
                    </div>`;

                    captureArea.innerHTML = vendedorHeaderHtml;
                    const redundantHeader = clonedSection.querySelector('.vendedor-header');
                    if (redundantHeader) redundantHeader.remove();

                    captureArea.appendChild(clonedSection);
                    document.body.appendChild(captureArea);

                    const vendedorCanvas = await html2canvas(captureArea, options);
                    document.body.removeChild(captureArea);

                    pdf.addPage([1920, 1080], 'l');
                    pdf.addImage(vendedorCanvas.toDataURL('image/png', 1.0), 'PNG', 0, 0, 1920, 1080);
                }
            }

            pdf.save("relatorio-de-vendas.pdf");

            newButton.textContent = 'Baixar Relatório em PDF';
            newButton.disabled = false;
        });
    }
};