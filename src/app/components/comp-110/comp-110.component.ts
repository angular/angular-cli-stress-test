/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service110Service } from '../../services/service-110.service';

@Component({
  selector: 'app-comp-110',
  templateUrl: './comp-110.component.html',
  styleUrls: ['./comp-110.component.css']
})
export class Comp110Component implements OnInit {

  constructor(private _service: Service110Service) { }

  ngOnInit() {
  }

}
