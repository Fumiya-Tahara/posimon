<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('positive_conversions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('positive_theme_id')->onDelete('cascade');
            $table->foreignId('user_id')->onDelete('cascade');
            $table->string('converted_word');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('positive_conversions');
    }
};
