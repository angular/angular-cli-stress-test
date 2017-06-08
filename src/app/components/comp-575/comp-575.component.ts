/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service575Service } from '../../services/service-575.service';

@Component({
  selector: 'app-comp-575',
  templateUrl: './comp-575.component.html',
  styleUrls: ['./comp-575.component.css']
})
export class Comp575Component implements OnInit {

  constructor(private _service: Service575Service) { }

  ngOnInit() {
  }

}
