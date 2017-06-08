/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service61Service } from './service-61.service';

describe('Service61Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service61Service]
    });
  });

  it('should ...', inject([Service61Service], (service: Service61Service) => {
    expect(service).toBeTruthy();
  }));
});
