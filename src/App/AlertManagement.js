export function showAlert(data, date, hour) {
    if (data) {
        return <div class="alert alert-primary alert-dismissible fade show" role="alert">
            <span>The ressource is available on {date} at {hour}.</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    } else {
        return <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <span>The ressource is not available on {date} at {hour}.</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    }

}
