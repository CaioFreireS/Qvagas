<?php

use App\Http\Controllers\Payslip\PaylispWebController;
use Illuminate\Support\Facades\Route;

Route::middleware(['throttle:300,1'])->group(function () {
    Route::middleware(['hasPaycheckAccess'])->group(function () {
        Route::get('/contracheque', [PaylispWebController::class, 'renderPaycheck']);
        Route::get('/contracheque/new', [PaylispWebController::class, 'renderNewPaycheck']);
        Route::post('/contracheque', [PaylispWebController::class, 'store']);
        Route::get('/{id?}/contracheques',[PaylispWebController::class,'CrenderPaychecks'])->name('paycheck.collaborator');
        Route::get('/storage/{filename}', [PaylispWebController::class, 'serve']);
    });
});
