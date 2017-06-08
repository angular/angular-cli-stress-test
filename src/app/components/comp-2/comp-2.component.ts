/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../../services/service-2.service';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrls: ['./comp-2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _service: Service2Service) { }

  ngOnInit() {
  }

}
