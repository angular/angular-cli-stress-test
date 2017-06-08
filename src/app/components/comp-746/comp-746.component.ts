/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service746Service } from '../../services/service-746.service';

@Component({
  selector: 'app-comp-746',
  templateUrl: './comp-746.component.html',
  styleUrls: ['./comp-746.component.css']
})
export class Comp746Component implements OnInit {

  constructor(private _service: Service746Service) { }

  ngOnInit() {
  }

}
