/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service821Service } from '../../services/service-821.service';

@Component({
  selector: 'app-comp-821',
  templateUrl: './comp-821.component.html',
  styleUrls: ['./comp-821.component.css']
})
export class Comp821Component implements OnInit {

  constructor(private _service: Service821Service) { }

  ngOnInit() {
  }

}
