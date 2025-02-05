<!DOCTYPE html>
<html>

<head>
    <title>Company and User Data</title>
    <style>
        body {
            font-family: sans-serif;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
            /* Add a subtle shadow */
        }

        th,
        td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
            /* Light gray background for headers */
            font-weight: bold;
        }

        tr:hover {
            background-color: #f5f5f5;
            /* Highlight rows on hover */
        }

        .no-companies {
            text-align: center;
            font-style: italic;
            color: #888;
            padding: 10px;
        }

        /* Responsive design (adjust as needed) */
        @media screen and (max-width: 600px) {
            table {
                width: 95%;
            }

            th,
            td {
                display: block;
                /* Stack table cells vertically */
                text-align: left;
            }

            th {
                text-align: left;
                /* Align header text to the left */
            }

            thead tr {
                position: absolute;
                /* Hide table headers */
                top: -9999px;
                left: -9999px;
            }

            tr:nth-child(even) {
                background-color: #f2f2f2;
                /* Add alternating row backgrounds */
            }
        }
    </style>
</head>

<body>

    <h1>Company and User Data</h1>

    <table>
        <thead>
            <tr>
                <th>User ID</th>
                <th>Company ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Code</th>
                <th>Company Name</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
                @foreach ($user->companies as $company)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $company->id }}</td>
                        <td>{{ $user->Nama }}</td>
                        <td>{{ $user->Email }}</td>
                        <td>{{ $user->telp }}</td>
                        <td>{{ $company->Company_code }}</td>
                        <td>{{ $company->Company_name }}</td>
                    </tr>
                @endforeach

                @if ($user->companies->isEmpty())
                    <tr>
                        <td colspan="7" class="no-companies">No companies associated</td>
                    </tr>
                @endif
            @endforeach
        </tbody>
    </table>

</body>

</html>
