/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service104Service } from '../../services/service-104.service';

@Component({
  selector: 'app-comp-104',
  templateUrl: './comp-104.component.html',
  styleUrls: ['./comp-104.component.css']
})
export class Comp104Component implements OnInit {

  constructor(private _service: Service104Service) { }

  ngOnInit() {
  }

}
