# @thailand-election-2023/database

NocoDB fetching utility

## Set up

Add this package to the dependencies in the app's `package.json`

```json
{
	"dependencies": {
		"@thailand-election-2023/database": "*"
	}
}
```

## Usage

Import project (according to NocoDB) from the package and call fetch or fetchAll from the table

```js
import { TheyWorkForUs } from '@thailand-election-2023/database';

// Project = TheyWorkForUs, Table = People
const peopleOnTheFirstPage = await TheyWorkForUs.People.fetch();
const everyPeople = await TheyWorkForUs.People.fetchAll();
```

## Projects and tables

The following projects and tables are available

- TheyWorkForUs
  - [Parties](https://sheets.wevis.info/dashboard/#/nc/view/40065196-c978-4d7a-b3fb-fb84694383a7)
  - [People](https://sheets.wevis.info/dashboard/#/nc/view/572c5e5c-a3d8-440f-9a70-3c4c773543ec)
    - Note that People will sub-query party name from [PeoplePartyHistory](https://sheets.wevis.info/dashboard/#/nc/view/707598ab-a5db-4c46-886c-f59934c9936b) table by default. No need to fetch that seperately.
  - [VoteLog](https://sheets.wevis.info/dashboard/#/nc/view/e06d1465-2786-4799-9c0f-a20f4cf71ec4)
  - [PeopleVotes](https://sheets.wevis.info/dashboard/#/nc/view/e58433cc-f4fd-499b-926d-05431412cbba)
  - [Policies](https://sheets.wevis.info/dashboard/#/nc/view/d930acb2-b1f8-4a85-9ed9-04c2b1edc951)

## Fetch functions

1. `.fetch()`

Fetch the first page. Return `list` of rows and `pageInfo` for pagination.

```ts
function fetch(query?: QueryParams): PublicViewResponse;
```

2. `.fetchAll()`

Fetch all rows, return the list of object for each row

```ts
function fetchAll(
	query?: Omit<QueryParams, 'limit' | 'offset'>
): Record<string, unknown>[];
```

Type definition can be found in [nocodb.ts](src/nocodb.ts)

`QueryParams` allow us to select only nessesary field, filter row, sort, sub query etc. See more in [NocoDB documentation](https://docs.nocodb.com/developer-resources/rest-apis#query-params)

Example of subquery in People table (this is default behavior for People table)

```js
TheyWorkForUs.People.fetch({
	// Get Parties,EstablishedDate column from PeoplePartyHistory table
	'nested[PeoplePartyHistory][fields]': 'Parties,EstablishedDate',
});
```
