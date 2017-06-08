/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service833Service } from '../../services/service-833.service';

@Component({
  selector: 'app-comp-833',
  templateUrl: './comp-833.component.html',
  styleUrls: ['./comp-833.component.css']
})
export class Comp833Component implements OnInit {

  constructor(private _service: Service833Service) { }

  ngOnInit() {
  }

}
