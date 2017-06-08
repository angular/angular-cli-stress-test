/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service117Service } from '../../services/service-117.service';

@Component({
  selector: 'app-comp-117',
  templateUrl: './comp-117.component.html',
  styleUrls: ['./comp-117.component.css']
})
export class Comp117Component implements OnInit {

  constructor(private _service: Service117Service) { }

  ngOnInit() {
  }

}
