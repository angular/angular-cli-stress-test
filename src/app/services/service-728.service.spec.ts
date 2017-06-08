/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service728Service } from './service-728.service';

describe('Service728Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service728Service]
    });
  });

  it('should ...', inject([Service728Service], (service: Service728Service) => {
    expect(service).toBeTruthy();
  }));
});
