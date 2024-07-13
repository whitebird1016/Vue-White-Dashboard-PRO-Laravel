<?php

namespace App\Enums;

enum ItemStatus: string
{
    case Published = 'published';
    case Draft = 'draft';
    case Archive = 'archive';
}
