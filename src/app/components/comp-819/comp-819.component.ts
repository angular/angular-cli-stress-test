/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service819Service } from '../../services/service-819.service';

@Component({
  selector: 'app-comp-819',
  templateUrl: './comp-819.component.html',
  styleUrls: ['./comp-819.component.css']
})
export class Comp819Component implements OnInit {

  constructor(private _service: Service819Service) { }

  ngOnInit() {
  }

}
