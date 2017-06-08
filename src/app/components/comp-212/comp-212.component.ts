/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service212Service } from '../../services/service-212.service';

@Component({
  selector: 'app-comp-212',
  templateUrl: './comp-212.component.html',
  styleUrls: ['./comp-212.component.css']
})
export class Comp212Component implements OnInit {

  constructor(private _service: Service212Service) { }

  ngOnInit() {
  }

}
