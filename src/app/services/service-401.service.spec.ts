/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service401Service } from './service-401.service';

describe('Service401Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service401Service]
    });
  });

  it('should ...', inject([Service401Service], (service: Service401Service) => {
    expect(service).toBeTruthy();
  }));
});
