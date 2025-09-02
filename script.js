window.onload = function() {
    // Logo da empresa em formato Base64 para ser embutida no PDF
    const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAD8+2i1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGcAACMzSURBVHiclZz5nyxHlh7E+/f/Y9i2bdu2bdu2bdu2bdu2bdu2bdu2bdu2bdu27V+2sW27LwPz8Vl9v9fM7M5KzIxsJgYkERjZ/dE9vS/eA8/e8573vOe9D5/o/1dY/D/S/Yj2L9L9kPFP3g75B+M/vB3yD8J+eDvkD2B/eDvkE9C9u/j52N/o/k36X7N+kv2D8J/eDvkD8J/eDvkD4D+8HfIHwH94O+QPgP/wdkgb/P0g+4fgP7wd8gfAf3g75A+A/vB2yB8B/eDvkD4D/8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kg4D+8HfIHwH94O+QPgP7wd8gfAf3g75A+A//B2yB8A/+HtkD8A/gPYD28H/AHsB7eD/wD2g7dD3gD4D8B+eDvkD4D+8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kjYt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt20fXb/a7i3Yt2-9a+D/8v4/8P+gfgP7wd8gfAf3g75A+A/vB2yB8B/eDvkD2B/eDvkE9C9u/j52N/o/k36X7N+kv2D8J/eDvkD8J/eDvkD4D+8HfIHwH94O+QPgP/wdkgb/P0g+4fgP7wd8gfAf3g75A+A/vB2yB8B/eDvkD4D/8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kg4D+8HfIHwH94O+QPgP7wd8gfAf3g75A+A//B2yB8A/+HtkD8A/gPYD28H/AHsB7eD/wD2g7dD3gD4D8B+eDvkD4D+8HbI3wD8B2B/eDvkD2B/eDvkD2B/eDvkE9C9u+B+d/8m/S/Z/kjYt23b9tX9/7b/AOYv1D9c/S4p5wAAAABJRU5ErkJggg==';

    // Seletores dos elementos da página
    const fileInput = document.getElementById('excelFile');
    const leftColumn = document.getElementById('leftColumn');
    const rightColumn = document.getElementById('rightColumn');
    let vendedorFilter = document.getElementById('vendedorFilter');
    let monthFilter = document.getElementById('monthFilter');
    const downloadPdfButton = document.getElementById('downloadPdf');
    const sheetSelectorContainer = document.getElementById('sheetSelectorContainer');
    const salesSheetSelect = document.getElementById('salesSheetSelect');
    const collaboratorsSheetSelect = document.getElementById('collaboratorsSheetSelect');
    const leadsSheetSelect = document.getElementById('leadsSheetSelect');
    const generateReportButton = document.getElementById('generateReportButton');

    // Variáveis para armazenar os dados e o estado
    let workbook;
    let fullSalesData = [];
    let fullCollaboratorsData = [];
    let fullLeadsData = [];
    let dateColumn = '';

    // Event Listeners Iniciais
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
        leadsSheetSelect.innerHTML = '';
        sheetNames.forEach(name => {
            salesSheetSelect.add(new Option(name, name));
            collaboratorsSheetSelect.add(new Option(name, name));
            leadsSheetSelect.add(new Option(name, name));
        });
    }

    function generateReportFromSelection() {
        if (!workbook) { alert("Por favor, carregue um arquivo Excel primeiro."); return; }

        const salesData = XLSX.utils.sheet_to_json(workbook.Sheets[salesSheetSelect.value]);
        const collaboratorsData = XLSX.utils.sheet_to_json(workbook.Sheets[collaboratorsSheetSelect.value]);
        const leadsData = XLSX.utils.sheet_to_json(workbook.Sheets[leadsSheetSelect.value]);

        const uniqueSalesData = [];
        const seenVendaIDs = new Set();
        for (const sale of salesData) {
            if (sale.VendaID && !seenVendaIDs.has(sale.VendaID)) {
                uniqueSalesData.push(sale);
                seenVendaIDs.add(sale.VendaID);
            }
        }

        fullSalesData = uniqueSalesData;
        fullCollaboratorsData = collaboratorsData;
        fullLeadsData = leadsData;

        dateColumn = findDateColumn(fullSalesData);
        if (!dateColumn) {
            alert("Não foi possível encontrar uma coluna de data ('Inicio da Semanal' ou 'Início da Semana'). Verifique sua planilha.");
            return;
        }

        // Recria os filtros para limpar event listeners antigos ao carregar novo arquivo
        const newVendedorFilter = vendedorFilter.cloneNode(true);
        vendedorFilter.parentNode.replaceChild(newVendedorFilter, vendedorFilter);
        vendedorFilter = document.getElementById('vendedorFilter');

        const newMonthFilter = monthFilter.cloneNode(true);
        monthFilter.parentNode.replaceChild(newMonthFilter, monthFilter);
        monthFilter = document.getElementById('monthFilter');

        setupVendedorFilter(fullSalesData, fullCollaboratorsData);
        setupMonthFilter(fullSalesData, dateColumn);

        vendedorFilter.addEventListener('change', updateReport);
        monthFilter.addEventListener('change', updateReport);

        updateReport();

        setupDownloadButton(fullCollaboratorsData);
        sheetSelectorContainer.classList.add('hidden');
    }

    function updateReport() {
        const selectedVendedorId = vendedorFilter.value;
        const selectedMonth = monthFilter.value;

        let salesToRender = [...fullSalesData];
        let leadsToRender = [...fullLeadsData];

        if (selectedMonth !== 'todos') {
            salesToRender = salesToRender.filter(sale => {
                const dateObj = parseDate(sale[dateColumn]);
                if (!dateObj) return false;
                const month = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
                return month === selectedMonth;
            });
            leadsToRender = leadsToRender.filter(leadRow => {
                const dateObj = parseDate(leadRow['Semana']);
                if (!dateObj) return false;
                const month = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
                return month === selectedMonth;
            });
        }

        if (selectedVendedorId === 'todos') {
            const generalHtml = buildGeneralSummaryHtml(salesToRender, leadsToRender);
            const weeklyHtml = buildWeeklySummaryHtml(salesToRender, leadsToRender, dateColumn);
            const salespeopleHtml = buildAllSalespeopleReportsHtml(salesToRender, fullCollaboratorsData, leadsToRender, dateColumn);
            leftColumn.innerHTML = generalHtml;
            rightColumn.innerHTML = weeklyHtml + salespeopleHtml;
            document.querySelectorAll('.vendedor-section').forEach(section => {
                section.style.display = 'grid';
            });
        } else {
            const personSales = salesToRender.filter(s => String(s.ColaboradorID) === selectedVendedorId);
            const personLeads = leadsToRender.filter(l => String(l.ColaboradorID) === selectedVendedorId);
            const teamSales = salesToRender.filter(s => String(s.ColaboradorID) !== selectedVendedorId);
            const teamLeads = leadsToRender.filter(l => String(l.ColaboradorID) !== selectedVendedorId);

            const comparisonHtml = buildComparisonReportHtml(
                { sales: personSales, leads: personLeads },
                { sales: teamSales, leads: teamLeads },
                fullCollaboratorsData
            );

            leftColumn.innerHTML = comparisonHtml;
            rightColumn.innerHTML = '';
        }
    }

    function resetUI() {
        leftColumn.innerHTML = `<div class="placeholder"><h2>Aguardando a planilha...</h2><p>Por favor, carregue um arquivo Excel para começar.</p></div>`;
        rightColumn.innerHTML = '';
        sheetSelectorContainer.classList.add('hidden');
        vendedorFilter.classList.add('hidden');
        monthFilter.classList.add('hidden');
        downloadPdfButton.classList.add('hidden');
    }

    function findDateColumn(sales) {
        if (sales.length === 0) return null;
        const headers = Object.keys(sales[0]);
        const possibleNames = ['Data', 'Início da Semana', 'Inicio da Semanal'];
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

    function parseCurrency(value) {
        if (typeof value === 'number') return value;
        if (typeof value !== 'string') return 0;
        const numberString = value.replace('R$', '').trim().replace(/\./g, '').replace(',', '.');
        return parseFloat(numberString) || 0;
    }

    function calculateStars(salesCount) {
        if (salesCount >= 10) return "⭐⭐⭐";
        if (salesCount >= 8) return "⭐⭐";
        if (salesCount >= 5) return "⭐";
        return "";
    }

    function isFinalInstallment(saleType) {
        if (typeof saleType !== 'string') return false;
        const match = saleType.match(/(\d+)\/(\d+)$/);
        if (match) {
            const part = parseInt(match[1], 10);
            const total = parseInt(match[2], 10);
            return part === total;
        }
        return false;
    }

    function isVendaValida(sale) {
        if (!sale) return false;
        if (sale.Valor && sale.Valor >= 850) { return true; }
        const produto = sale.Produto || '';
        if (produto.toLowerCase().includes('entrada')) { return true; }
        return false;
    }

    function buildGeneralSummaryHtml(sales, leadsData) {
        const totalLeads = leadsData.reduce((sum, row) => sum + (row.Leads || 0), 0);
        const totalEntreMarc = leadsData.reduce((sum, row) => sum + (row.EntreMarc || 0), 0);
        const totalEntreRea = leadsData.reduce((sum, row) => sum + (row.EntreRea || 0), 0);

        const vendasInteiras = sales.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
        const vendaParcial = sales.filter(s => {
            const tipo = s['Tipo de Venda'] || '';
            return tipo.includes('Boleto') || tipo.includes('Outro');
        }).length;
        const finalInstallments = sales.filter(s => isFinalInstallment(s['Tipo de Venda'])).length;
        const vendaTotal = vendasInteiras + finalInstallments;

        const valorVendasInteiras = sales
            .filter(s => s['Tipo de Venda'] === 'Venda Inteira')
            .reduce((sum, s) => sum + parseCurrency(s.Valor), 0);
        const valorVendaParcial = sales
            .filter(s => {
                const tipo = s['Tipo de Venda'] || '';
                return tipo.includes('Boleto') || tipo.includes('Outro');
            })
            .reduce((sum, s) => sum + parseCurrency(s.Valor), 0);
        const valorTotalVendas = valorVendasInteiras + valorVendaParcial;

        return `<div class="report-section" id="general-summary">
                    <h2>1. RELATÓRIO GERAL DO DEPARTAMENTO</h2>
                    <div class="summary-grid">
                        <div class="summary-item"><p>Leads</p><span class="value">${totalLeads}</span></div>
                        <div class="summary-item"><p>Entrevistas Marcadas</p><span class="value">${totalEntreMarc}</span></div>
                        <div class="summary-item"><p>Entrevistas Realizadas</p><span class="value">${totalEntreRea}</span></div>
                        <div class="summary-item"><p>Vendas Inteiras</p><span class="value">${vendasInteiras}</span></div>
                        <div class="summary-item"><p>Venda Parcial</p><span class="value">${vendaParcial}</span></div>
                        <div class="summary-item"><p>Venda Total</p><span class="value">${vendaTotal}</span></div>
                    </div>
                    <div class="summary-grid-totals">
                        <div class="summary-item"><p>Valor Vendas Inteiras</p><span class="value">${valorVendasInteiras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        <div class="summary-item"><p>Valor Venda Parcial</p><span class="value">${valorVendaParcial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        <div class="summary-item"><p>Valor Total em Vendas</p><span class="value">${valorTotalVendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                    </div>
                </div>`;
    }

    function buildWeeklySummaryHtml(sales, leadsData, dateColumnName) {
        const weeklyData = {};

        // Process leads data (already aggregated weekly)
        leadsData.forEach(leadRow => {
            const dateObj = parseDate(leadRow['Semana']);
            if (!dateObj) return;
            const endDate = new Date(dateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
            const weekLabel = `${dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${endDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;

            if (!weeklyData[weekLabel]) {
                weeklyData[weekLabel] = {
                    leads: 0, entreMarc: 0, entreRea: 0,
                    vendasInteiras: 0, vendaParcial: 0,
                    dateObj: dateObj
                };
            }
            weeklyData[weekLabel].leads += leadRow.Leads || 0;
            weeklyData[weekLabel].entreMarc += leadRow.EntreMarc || 0;
            weeklyData[weekLabel].entreRea += leadRow.EntreRea || 0;
        });

        // Process sales data
        sales.forEach(sale => {
            const dateObj = parseDate(sale[dateColumnName]);
            if (!dateObj) return;
            const endDate = new Date(dateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
            const weekLabel = `${dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${endDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;

            if (!weeklyData[weekLabel]) {
                weeklyData[weekLabel] = {
                    leads: 0, entreMarc: 0, entreRea: 0,
                    vendasInteiras: 0, vendaParcial: 0,
                    dateObj: dateObj
                };
            }
            const tipo = sale['Tipo de Venda'] || '';
            if (tipo === 'Venda Inteira') {
                weeklyData[weekLabel].vendasInteiras++;
            }
            if (tipo.includes('Boleto') || tipo.includes('Outro')) {
                weeklyData[weekLabel].vendaParcial++;
            }
        });

        let weeklyHtml = '<div class="report-section" id="weekly-summary"><h2>2. DETALHAMENTO SEMANAL</h2>';
        if (Object.keys(weeklyData).length === 0) {
            weeklyHtml += '<p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum dado semanal encontrado.</p>';
        } else {
            weeklyHtml += '<div class="weekly-details">';
            Object.keys(weeklyData).sort((a, b) => weeklyData[a].dateObj - weeklyData[b].dateObj).forEach(week => {
                const data = weeklyData[week];
                const vendaTotal = data.vendasInteiras + data.vendaParcial;
                weeklyHtml += `<div class="weekly-item">
                                <p><strong>Semana ${week}</strong></p>
                                <ul>
                                   <li>Leads: <strong class="value">${data.leads}</strong></li>
                                   <li>Entrevistas Marcadas: <strong class="value">${data.entreMarc}</strong></li>
                                   <li>Entrevistas Realizadas: <strong class="value">${data.entreRea}</strong></li>
                                   <li>Vendas Inteiras: <strong class="value">${data.vendasInteiras}</strong></li>
                                   <li>Venda Parcial: <strong class="value">${data.vendaParcial}</strong></li>
                                   <li>Venda Total: <strong class="value">${vendaTotal}</strong></li>
                                </ul>
                               </div>`;
            });
            weeklyHtml += '</div>';
        }
        weeklyHtml += '</div>';
        return weeklyHtml;
    }

    function buildAllSalespeopleReportsHtml(sales, collaborators, leadsData, dateColumnName) {
        let allReportsHtml = '<div id="vendedoresContainer"><h2>3. RELATÓRIOS INDIVIDUAIS POR VENDEDOR</h2>';
        let hasSalespeopleReports = false;
        collaborators.forEach(collab => {
            const salesByPerson = sales.filter(s => s.ColaboradorID === collab.ColaboradorID);
            const leadsByPerson = leadsData.filter(l => l.ColaboradorID === collab.ColaboradorID);

            if (salesByPerson.length === 0 && leadsByPerson.length === 0) return;
            hasSalespeopleReports = true;

            // Monthly counts
            const totalLeads = leadsByPerson.reduce((sum, row) => sum + (row.Leads || 0), 0);
            const totalEntreMarc = leadsByPerson.reduce((sum, row) => sum + (row.EntreMarc || 0), 0);
            const totalEntreRea = leadsByPerson.reduce((sum, row) => sum + (row.EntreRea || 0), 0);
            const vendasInteiras = salesByPerson.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
            const vendaParcial = salesByPerson.filter(s => {
                const tipo = s['Tipo de Venda'] || '';
                return tipo.includes('Boleto') || tipo.includes('Outro');
            }).length;
            const finalInstallments = salesByPerson.filter(s => isFinalInstallment(s['Tipo de Venda'])).length;
            const vendaTotal = vendasInteiras + finalInstallments;

            // Monthly monetary values
            const valorVendasInteiras = salesByPerson
                .filter(s => s['Tipo de Venda'] === 'Venda Inteira')
                .reduce((sum, s) => sum + parseCurrency(s.Valor), 0);
            const valorVendaParcial = salesByPerson
                .filter(s => {
                    const tipo = s['Tipo de Venda'] || '';
                    return tipo.includes('Boleto') || tipo.includes('Outro');
                })
                .reduce((sum, s) => sum + parseCurrency(s.Valor), 0);
            const valorTotalVendas = valorVendasInteiras + valorVendaParcial;

            // Weekly breakdown logic
            const weeklyData = {};
            leadsByPerson.forEach(leadRow => {
                const dateObj = parseDate(leadRow['Semana']);
                if (!dateObj) return;
                const endDate = new Date(dateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
                const weekLabel = `${dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${endDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;

                if (!weeklyData[weekLabel]) {
                    weeklyData[weekLabel] = { leads: 0, entreMarc: 0, entreRea: 0, vendasInteiras: 0, vendaParcial: 0, dateObj: dateObj };
                }
                weeklyData[weekLabel].leads += leadRow.Leads || 0;
                weeklyData[weekLabel].entreMarc += leadRow.EntreMarc || 0;
                weeklyData[weekLabel].entreRea += leadRow.EntreRea || 0;
            });
            salesByPerson.forEach(sale => {
                const dateObj = parseDate(sale[dateColumnName]);
                if (!dateObj) return;
                const endDate = new Date(dateObj.getTime() + 6 * 24 * 60 * 60 * 1000);
                const weekLabel = `${dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${endDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`;

                if (!weeklyData[weekLabel]) {
                    weeklyData[weekLabel] = { leads: 0, entreMarc: 0, entreRea: 0, vendasInteiras: 0, vendaParcial: 0, dateObj: dateObj };
                }
                const tipo = sale['Tipo de Venda'] || '';
                if (tipo === 'Venda Inteira') {
                    weeklyData[weekLabel].vendasInteiras++;
                }
                if (tipo.includes('Boleto') || tipo.includes('Outro')) {
                    weeklyData[weekLabel].vendaParcial++;
                }
            });

            let weeklyDetailHtml = '<div class="vendedor-detalhe-semanal"><h4>Detalhamento Semanal:</h4>';
            if (Object.keys(weeklyData).length === 0) {
                weeklyDetailHtml += '<p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum dado semanal.</p>';
            } else {
                weeklyDetailHtml += '<ul class="vendedor-semanal-list">';
                Object.keys(weeklyData).sort((a, b) => weeklyData[a].dateObj - weeklyData[b].dateObj).forEach(week => {
                    const data = weeklyData[week];
                    const vendaTotal = data.vendasInteiras + data.vendaParcial;
                    const stars = calculateStars(vendaTotal);
                    weeklyDetailHtml += `<li>
                                           <div class="weekly-item-header"><strong>Semana de ${week}</strong><span class="stars">${stars}</span></div>
                                           <div class="weekly-sub-details">
                                             <span>Leads: <strong>${data.leads}</strong></span>
                                             <span>Entrevistas Marcadas: <strong>${data.entreMarc}</strong></span>
                                             <span>Entrevistas Realizadas: <strong>${data.entreRea}</strong></span>
                                             <span>Vendas Totais: <strong>${vendaTotal}</strong></span>
                                           </div>
                                         </li>`;
                });
                weeklyDetailHtml += '</ul>';
            }
            weeklyDetailHtml += '</div>';

            const nomeArquivo = collab.Nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const fallbackImage = `./images/foto-${nomeArquivo}.png`;
            let imageUrl;
            if (collab.Foto) {
                let url = collab.Foto;
                if (url.includes('github.com') && url.includes('/blob/')) {
                    url = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/').replace('?raw=true', '');
                }

                if (url.startsWith('http://') || url.startsWith('https://')) {
                    imageUrl = url;
                } else {
                    imageUrl = `./images/${collab.Foto}`;
                }
            } else {
                imageUrl = fallbackImage;
            }
            allReportsHtml += `<div class="vendedor-section" data-vendedor-id="${collab.ColaboradorID}" data-vendedor-nome="${collab.Nome}"><div class="vendedor-header"><img src="${imageUrl}" alt="Foto de ${collab.Nome}" onerror="this.style.display='none'"><h3>Vendedor(a): ${collab.Nome}</h3></div><div class="vendedor-body"><div class="vendedor-resumo-mes"><h4>Resumo do Mês:</h4><div class="summary-grid"><div class="summary-item"><p>Leads</p><span class="value">${totalLeads}</span></div><div class="summary-item"><p>Entrevistas Marcadas</p><span class="value">${totalEntreMarc}</span></div><div class="summary-item"><p>Entrevistas Realizadas</p><span class="value">${totalEntreRea}</span></div><div class="summary-item"><p>Vendas Inteiras</p><span class="value">${vendasInteiras}</span></div><div class="summary-item"><p>Venda Parcial</p><span class="value">${vendaParcial}</span></div><div class="summary-item"><p>Venda Total</p><span class="value">${vendaTotal}</span></div></div><div class="summary-grid-totals"><div class="summary-item"><p>Valor Vendas Inteiras</p><span class="value">${valorVendasInteiras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div><div class="summary-item"><p>Valor Venda Parcial</p><span class="value">${valorVendaParcial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div><div class="summary-item"><p>Valor Total em Vendas</p><span class="value">${valorTotalVendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div></div></div>${weeklyDetailHtml}</div></div>`;
        });
        allReportsHtml += '</div>';
        return hasSalespeopleReports ? allReportsHtml : '<div><h2>3. RELATÓRIOS INDIVIDUAIS POR VENDEDOR</h2><p style="padding-left: 15px; color: var(--cor-texto-secundaria);">Nenhum vendedor com vendas encontrado.</p></div>';
    }

    function buildComparisonReportHtml(personData, teamData, collaborators) {
        const calculateComparisonMetrics = (data) => {
            const { sales, leads } = data;
            const metrics = {};
            metrics.totalLeads = leads.reduce((sum, row) => sum + (row.Leads || 0), 0);
            metrics.totalEntreMarc = leads.reduce((sum, row) => sum + (row.EntreMarc || 0), 0);
            metrics.totalEntreRea = leads.reduce((sum, row) => sum + (row.EntreRea || 0), 0);
            metrics.vendasInteiras = sales.filter(s => s['Tipo de Venda'] === 'Venda Inteira').length;
            metrics.vendaParcial = sales.filter(s => {
                const tipo = s['Tipo de Venda'] || '';
                return tipo.includes('Boleto') || tipo.includes('Outro');
            }).length;
            metrics.vendaTotal = metrics.vendasInteiras + metrics.vendaParcial;
            metrics.valorVendasInteiras = sales.filter(s => s['Tipo de Venda'] === 'Venda Inteira').reduce((sum, s) => sum + parseCurrency(s.Valor), 0);
            metrics.valorVendaParcial = sales.filter(s => {
                const tipo = s['Tipo de Venda'] || '';
                return tipo.includes('Boleto') || tipo.includes('Outro');
            }).reduce((sum, s) => sum + parseCurrency(s.Valor), 0);
            metrics.valorTotalVendas = metrics.valorVendasInteiras + metrics.valorVendaParcial;
            return metrics;
        };

        const personMetrics = calculateComparisonMetrics(personData);
        const teamMetrics = calculateComparisonMetrics(teamData);

        const selectedPersonId = personData.sales.length > 0 ? personData.sales[0].ColaboradorID : (personData.leads.length > 0 ? personData.leads[0].ColaboradorID : '');
        const personInfo = collaborators.find(c => String(c.ColaboradorID) === String(selectedPersonId));
        const personName = personInfo ? personInfo.Nome : 'Vendedor';

        const buildMetricsHtml = (metrics) => {
            return `<div class="summary-grid">
                        <div class="summary-item"><p>Leads</p><span class="value">${metrics.totalLeads}</span></div>
                        <div class="summary-item"><p>Entrevistas Marcadas</p><span class="value">${metrics.totalEntreMarc}</span></div>
                        <div class="summary-item"><p>Entrevistas Realizadas</p><span class="value">${metrics.totalEntreRea}</span></div>
                        <div class="summary-item"><p>Vendas Inteiras</p><span class="value">${metrics.vendasInteiras}</span></div>
                        <div class="summary-item"><p>Venda Parcial</p><span class="value">${metrics.vendaParcial}</span></div>
                        <div class="summary-item"><p>Venda Total</p><span class="value">${metrics.vendaTotal}</span></div>
                    </div>
                    <div class="summary-grid-totals">
                        <div class="summary-item"><p>Valor Vendas Inteiras</p><span class="value">${metrics.valorVendasInteiras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        <div class="summary-item"><p>Valor Venda Parcial</p><span class="value">${metrics.valorVendaParcial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        <div class="summary-item"><p>Valor Total em Vendas</p><span class="value">${metrics.valorTotalVendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                    </div>`;
        };

        let comparisonHtml = `<div class="report-section">
                                <h2>Relatório Individual (${personName})</h2>
                                ${buildMetricsHtml(personMetrics)}
                              </div>
                              <div class="report-section">
                                <h2>Relatório da Equipe</h2>
                                ${buildMetricsHtml(teamMetrics)}
                              </div>`;
        return comparisonHtml;
    }

    function setupVendedorFilter(sales, collaborators) {
        vendedorFilter.innerHTML = '<option value="todos">Filtrar por Vendedor</option>';
        let hasSalespeople = false;
        const processedCollaborators = new Set();

        sales.forEach(sale => {
            const collab = collaborators.find(c => c.ColaboradorID === sale.ColaboradorID);
            if (collab && !processedCollaborators.has(collab.ColaboradorID)) {
                 hasSalespeople = true;
                const option = document.createElement('option');
                option.value = collab.ColaboradorID;
                option.textContent = collab.Nome;
                vendedorFilter.appendChild(option);
                processedCollaborators.add(collab.ColaboradorID);
            }
        });

        if (hasSalespeople) {
            vendedorFilter.classList.remove('hidden');
        }
    }

    function setupMonthFilter(sales, dateColumnName) {
        monthFilter.innerHTML = '<option value="todos">Filtrar por Mês</option>';
        const months = new Set();
        sales.forEach(sale => {
            const dateObj = parseDate(sale[dateColumnName]);
            if (dateObj) {
                const month = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
                months.add(month);
            }
        });

        const sortedMonths = Array.from(months).sort().reverse();

        sortedMonths.forEach(month => {
            const option = document.createElement('option');
            option.value = month;
            const [year, monthNum] = month.split('-');
            const monthName = new Date(Date.UTC(year, monthNum - 1, 2)).toLocaleString('pt-BR', { month: 'long', timeZone: 'UTC' });
            option.textContent = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} de ${year}`;
            monthFilter.appendChild(option);
        });

        if (months.size > 0) {
            monthFilter.classList.remove('hidden');
        }
    }

    function imageToBase64(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = (err) => reject(err);
            img.src = url;
        });
    }

    async function setupDownloadButton(collaboratorsData) {
        const newButton = downloadPdfButton.cloneNode(true);
        downloadPdfButton.parentNode.replaceChild(newButton, downloadPdfButton);
        newButton.classList.remove('hidden');

        newButton.addEventListener('click', async () => {
            newButton.textContent = 'Gerando PDF...';
            newButton.disabled = true;

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ orientation: 'l', unit: 'pt', format: [1920, 1080] });
            pdf.deletePage(1);

            const options = { scale: 2.5, useCORS: true, backgroundColor: null };
            const fallbackImageBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
            let logoBase64;
            try {
                logoBase64 = await imageToBase64('./images/logo-TDF-sem-fundo.png');
            } catch (error) {
                console.error("Erro ao carregar o logo:", error);
                logoBase64 = fallbackImageBase64;
            }

            // --- 1. Adicionar a primeira página ---
            const firstPageCaptureArea = document.createElement('div');
            firstPageCaptureArea.className = 'pdf-capture-area';
            const headerHtml = `<div class="pdf-header"><img class="logo" src="${logoBase64}" /><h1>RELATÓRIO GERAL DO DEPARTAMENTO</h1></div>`;
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

            // --- 2. Adicionar uma página para cada vendedor visível ---
            const vendedorSections = document.querySelectorAll('.vendedor-section');
            for (const section of vendedorSections) {
                if (section.style.display !== 'none') {
                    try {
                        const captureArea = document.createElement('div');
                        captureArea.className = 'pdf-capture-area';
                        const vendedorNome = section.dataset.vendedorNome || 'Vendedor';
                        const clonedSection = section.cloneNode(true);

                        const collaborator = collaboratorsData.find(c => c.Nome === vendedorNome);
                        const nomeArquivo = vendedorNome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const fallbackImage = `./images/foto-${nomeArquivo}.png`;
                        let imageUrl;
                        if (collaborator && collaborator.Foto) {
                            let url = collaborator.Foto;
                            if (url.includes('github.com') && url.includes('/blob/')) {
                                url = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/').replace('?raw=true', '');
                            }

                            if (url.startsWith('http://') || url.startsWith('https://')) {
                                imageUrl = url;
                            } else {
                                imageUrl = `./images/${collaborator.Foto}`;
                            }
                        } else {
                            imageUrl = fallbackImage;
                        }

                        let fotoVendedorBase64;
                        try {
                            fotoVendedorBase64 = await imageToBase64(imageUrl);
                        } catch (error) {
                            console.error(`Erro ao carregar a foto de ${vendedorNome}:`, error);
                            fotoVendedorBase64 = fallbackImageBase64;
                        }

                        const vendedorHeaderHtml = `<div class="pdf-header"><img class="vendedor-foto" src="${fotoVendedorBase64}" /><div class="pdf-title-block"><h1>RELATÓRIO INDIVIDUAL</h1><h2>${vendedorNome}</h2></div><img class="logo" src="${logoBase64}" /></div>`;
                        captureArea.innerHTML = vendedorHeaderHtml;
                        const redundantHeader = clonedSection.querySelector('.vendedor-header');
                        if (redundantHeader) redundantHeader.remove();
                        captureArea.appendChild(clonedSection);
                        document.body.appendChild(captureArea);
                        const vendedorCanvas = await html2canvas(captureArea, options);
                        document.body.removeChild(captureArea);
                        pdf.addPage([1920, 1080], 'l');
                        pdf.addImage(vendedorCanvas.toDataURL('image/png', 1.0), 'PNG', 0, 0, 1920, 1080);
                    } catch (error) {
                        console.error("Falha ao gerar a página do PDF para o vendedor:", section.dataset.vendedorNome, error);
                    }
                }
            }

            pdf.save("relatorio-de-vendas.pdf");
            newButton.textContent = 'Baixar Relatório em PDF';
            newButton.disabled = false;
        });
    }
};