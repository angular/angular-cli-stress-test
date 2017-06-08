/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service905Service } from './service-905.service';

describe('Service905Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service905Service]
    });
  });

  it('should ...', inject([Service905Service], (service: Service905Service) => {
    expect(service).toBeTruthy();
  }));
});
