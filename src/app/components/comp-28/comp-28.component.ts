/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service28Service } from '../../services/service-28.service';

@Component({
  selector: 'app-comp-28',
  templateUrl: './comp-28.component.html',
  styleUrls: ['./comp-28.component.css']
})
export class Comp28Component implements OnInit {

  constructor(private _service: Service28Service) { }

  ngOnInit() {
  }

}
