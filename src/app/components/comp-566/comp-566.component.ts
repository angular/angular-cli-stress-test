/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service566Service } from '../../services/service-566.service';

@Component({
  selector: 'app-comp-566',
  templateUrl: './comp-566.component.html',
  styleUrls: ['./comp-566.component.css']
})
export class Comp566Component implements OnInit {

  constructor(private _service: Service566Service) { }

  ngOnInit() {
  }

}
