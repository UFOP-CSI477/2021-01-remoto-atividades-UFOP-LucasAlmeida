function adicionar(val)
{
    document.getElementById("resultado").value+=val
}

function solve()
{
    let x = document.getElementById("resultado").value
    let y = eval(x)
    document.getElementById("resultado").value = y
}

function limpar()
{
    document.getElementById("resultado").value = ""
}