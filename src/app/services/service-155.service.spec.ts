/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service155Service } from './service-155.service';

describe('Service155Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service155Service]
    });
  });

  it('should ...', inject([Service155Service], (service: Service155Service) => {
    expect(service).toBeTruthy();
  }));
});
