/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service806Service } from './service-806.service';

describe('Service806Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service806Service]
    });
  });

  it('should ...', inject([Service806Service], (service: Service806Service) => {
    expect(service).toBeTruthy();
  }));
});
