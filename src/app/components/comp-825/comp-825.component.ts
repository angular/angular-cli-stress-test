/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service825Service } from '../../services/service-825.service';

@Component({
  selector: 'app-comp-825',
  templateUrl: './comp-825.component.html',
  styleUrls: ['./comp-825.component.css']
})
export class Comp825Component implements OnInit {

  constructor(private _service: Service825Service) { }

  ngOnInit() {
  }

}
