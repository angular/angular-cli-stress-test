/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service580Service } from '../../services/service-580.service';

@Component({
  selector: 'app-comp-580',
  templateUrl: './comp-580.component.html',
  styleUrls: ['./comp-580.component.css']
})
export class Comp580Component implements OnInit {

  constructor(private _service: Service580Service) { }

  ngOnInit() {
  }

}
