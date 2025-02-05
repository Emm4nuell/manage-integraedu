import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxios from "@/hook/use-axios";
import instance from "@/service/api";

export function ListarProdutos() {
  const [data, loading, error] = useAxios({
    axiosinstance: instance,
    method: "get",
    url: "/products/find-all",
  });

  return (
    <>
      <div className="flex w-full justify-end">
        <div className="w-full md:w-72 right-0">
          <div className="relative h-10 w-full min-w-[200px]">
            <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </div>
            <input
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Search
            </label>
          </div>
        </div>
      </div>
      <Table className="text-xs sm:text-xs md:text-sm">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Categoria</TableHead>
            <TableHead>Código</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Estoque</TableHead>
            <TableHead>Preço</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.content?.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src="https://svgsilh.com/svg/34481.svg"
                    // src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                    alt="Spotify"
                    className="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                  />
                  <div className="block font-sans antialiased leading-normal text-blue-gray-900">
                    <p className="font-black">{invoice.category}</p>
                    <p>{invoice.subCategory}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold">{invoice.code}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell className="text-left text-green-500 font-bold">
                R$ {invoice.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
