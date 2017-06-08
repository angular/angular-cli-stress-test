/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service698Service } from '../../services/service-698.service';

@Component({
  selector: 'app-comp-698',
  templateUrl: './comp-698.component.html',
  styleUrls: ['./comp-698.component.css']
})
export class Comp698Component implements OnInit {

  constructor(private _service: Service698Service) { }

  ngOnInit() {
  }

}
