/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service121Service } from '../../services/service-121.service';

@Component({
  selector: 'app-comp-121',
  templateUrl: './comp-121.component.html',
  styleUrls: ['./comp-121.component.css']
})
export class Comp121Component implements OnInit {

  constructor(private _service: Service121Service) { }

  ngOnInit() {
  }

}
