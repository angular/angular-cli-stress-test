/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service39Service } from './service-39.service';

describe('Service39Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service39Service]
    });
  });

  it('should ...', inject([Service39Service], (service: Service39Service) => {
    expect(service).toBeTruthy();
  }));
});
