/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service628Service } from '../../services/service-628.service';

@Component({
  selector: 'app-comp-628',
  templateUrl: './comp-628.component.html',
  styleUrls: ['./comp-628.component.css']
})
export class Comp628Component implements OnInit {

  constructor(private _service: Service628Service) { }

  ngOnInit() {
  }

}
