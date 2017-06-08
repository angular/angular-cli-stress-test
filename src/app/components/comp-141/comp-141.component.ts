/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service141Service } from '../../services/service-141.service';

@Component({
  selector: 'app-comp-141',
  templateUrl: './comp-141.component.html',
  styleUrls: ['./comp-141.component.css']
})
export class Comp141Component implements OnInit {

  constructor(private _service: Service141Service) { }

  ngOnInit() {
  }

}
