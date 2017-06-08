/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service863Service } from '../../services/service-863.service';

@Component({
  selector: 'app-comp-863',
  templateUrl: './comp-863.component.html',
  styleUrls: ['./comp-863.component.css']
})
export class Comp863Component implements OnInit {

  constructor(private _service: Service863Service) { }

  ngOnInit() {
  }

}
