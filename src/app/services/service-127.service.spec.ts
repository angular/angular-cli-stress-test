/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service127Service } from './service-127.service';

describe('Service127Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service127Service]
    });
  });

  it('should ...', inject([Service127Service], (service: Service127Service) => {
    expect(service).toBeTruthy();
  }));
});
