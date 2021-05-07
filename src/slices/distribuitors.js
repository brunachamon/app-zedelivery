/*
export const fetchDistribuitors = createAsyncThunk(
  'distribuitors/fetchDistribuitors', async ({ lat, lng }) => {
    const now = Date.now()
    const variables = {
      now: '2021-05-06T20:36:00.000Z',
      lat: lat.toString(),
      long: lng.toString(),
      algorithm: 'NEAREST'
    }

    console.log('PARAMS >>>>', variables)

    const { data, error } = useSWR([distribQuery, variables], (query) => {
      console.log('query', query)
      return fetcher(query)
    })

    console.log('>>>>>>', data, error)

    return { data, error }
  }
)

const distribuitorsSlice = createSlice({
  name: 'distribuitors',
  initialState: { distribuitors: [], isLoading: false },
  reducers: {},
  extraReducers: {
    [fetchDistribuitors.fulfilled]: (state, action) => {
      state.distribuitors.push(action.payload)
    }
  }
})

export default distribuitorsSlice.reducer
*/
