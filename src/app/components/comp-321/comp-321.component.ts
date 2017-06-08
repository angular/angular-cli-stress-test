/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service321Service } from '../../services/service-321.service';

@Component({
  selector: 'app-comp-321',
  templateUrl: './comp-321.component.html',
  styleUrls: ['./comp-321.component.css']
})
export class Comp321Component implements OnInit {

  constructor(private _service: Service321Service) { }

  ngOnInit() {
  }

}
