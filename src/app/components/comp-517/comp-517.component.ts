/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service517Service } from '../../services/service-517.service';

@Component({
  selector: 'app-comp-517',
  templateUrl: './comp-517.component.html',
  styleUrls: ['./comp-517.component.css']
})
export class Comp517Component implements OnInit {

  constructor(private _service: Service517Service) { }

  ngOnInit() {
  }

}
