const submitButton = document.getElementById('submit-transaction');
submitButton.addEventListener('click', submitData);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearData);

function submitData (event) {
    console.log('clicked ok');
    var balance = document.getElementById('balance-number');
    var totalIncome = document.getElementById('income-number');
    var totalExpense = document.getElementById('expense-number');
    var transactionName = document.getElementById('transaction-name');
    var transactionNumber = document.getElementById('transaction-number');
    var errorMsg = document.getElementById('error');
    var list = document.getElementById('list');
    var node = document.createElement('li');
    var nodeText = document.createTextNode(transactionName.value);
    var nodeNumber = document.createTextNode(transactionNumber.value);
    var span = document.createElement('span');
    var delBtn = document.createElement('button');

    if ((transactionName.value == null || transactionName.value == undefined || transactionName.value.trim() == "") || 
        (transactionNumber.value == null || transactionNumber.value == undefined || transactionNumber.value.trim() == "")) {
        console.log('if OK');
                if(submitButton.clicked === false) {
                    return false;
                } else {
                    errorMsg.style.visibility = "visible";
                }
    } else {
        	console.log('else ok', transactionNumber.value);
            errorMsg.style.visibility = "hidden";
            delBtn.innerText = "X";
            delBtn.classList.add('delete-btn');

            node.appendChild(nodeText);
            node.appendChild(delBtn);
            span.appendChild(nodeNumber);
                if (span.innerHTML > 0){
                    span.style.borderRight = "5px solid green";
                } else {
                    span.style.borderRight = "5px solid red";
                }
            node.appendChild(span);
            list.appendChild(node);


			let total = 0;           
            let plusIncome = 0;         
            let minusExpense = 0;      
            let transactionList = document.querySelectorAll('#list span');        

            transactionList.forEach(function(item, index) {        
              let valueItem = parseInt(item.innerHTML);    
              total += valueItem;   
                if (valueItem >= 0) {
                    plusIncome += valueItem;                    
                } else {
                    minusExpense += valueItem;  
                }            
            totalIncome.innerHTML = plusIncome;
            totalExpense.innerHTML = minusExpense;
        
            if (total >= 0) {
                balance.innerHTML = total;
                balance.style.color = "green";
            } else {
                balance.innerHTML = total;
                balance.style.color = "red";
            }       
        });
    }
                    
             delBtn.addEventListener('click', function(e){
                let allTransactions = document.querySelectorAll('#list span');
                                                            
                if (span.innerHTML > 0) {
                    totalIncome.innerHTML = totalIncome.innerHTML - span.innerHTML;
                } else {
                    totalExpense.innerHTML = totalExpense.innerHTML - span.innerHTML;
                }
                balance.innerHTML = totalIncome.innerHTML - Math.abs(totalExpense.innerHTML);
                node.remove();
            });                                               
}

function clearData() {
    list.innerHTML = "";
    document.getElementById('transaction-name').value = '';
    document.getElementById('transaction-number').value = '';
    document.getElementById('income-number').innerHTML = '0.00';
    document.getElementById('expense-number').innerHTML = '0.00';
    document.getElementById('balance-number').innerHTML = '0.00';
}
