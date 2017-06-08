/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service122Service } from '../../services/service-122.service';

@Component({
  selector: 'app-comp-122',
  templateUrl: './comp-122.component.html',
  styleUrls: ['./comp-122.component.css']
})
export class Comp122Component implements OnInit {

  constructor(private _service: Service122Service) { }

  ngOnInit() {
  }

}
