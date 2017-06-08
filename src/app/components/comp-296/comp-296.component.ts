/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service296Service } from '../../services/service-296.service';

@Component({
  selector: 'app-comp-296',
  templateUrl: './comp-296.component.html',
  styleUrls: ['./comp-296.component.css']
})
export class Comp296Component implements OnInit {

  constructor(private _service: Service296Service) { }

  ngOnInit() {
  }

}
