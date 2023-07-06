export default function index(params)
{
    return(
        <>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Página</th>
                        <th>URL</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        params.length > 0 &&
                        params.dados.map((d)=>{
                            return(<ItemLista nome={d.nome} url={d.url} status={d.status} />)
                        })                        
                    }
                </tbody>
            </table>
        </>
    )
}

export function ItemLista({nome, url, status})
{
    return(
        <tr>
            <td>{ nome }</td>
            <td>{ url }</td>
            <td>{ status }</td>
        </tr>
    )
}