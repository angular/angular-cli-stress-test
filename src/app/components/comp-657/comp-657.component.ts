/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service657Service } from '../../services/service-657.service';

@Component({
  selector: 'app-comp-657',
  templateUrl: './comp-657.component.html',
  styleUrls: ['./comp-657.component.css']
})
export class Comp657Component implements OnInit {

  constructor(private _service: Service657Service) { }

  ngOnInit() {
  }

}
