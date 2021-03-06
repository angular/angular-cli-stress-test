/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service793Service } from '../../services/service-793.service';

@Component({
  selector: 'app-comp-793',
  templateUrl: './comp-793.component.html',
  styleUrls: ['./comp-793.component.css']
})
export class Comp793Component implements OnInit {

  constructor(private _service: Service793Service) { }

  ngOnInit() {
  }

}
