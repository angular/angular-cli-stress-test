/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service161Service } from './service-161.service';

describe('Service161Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service161Service]
    });
  });

  it('should ...', inject([Service161Service], (service: Service161Service) => {
    expect(service).toBeTruthy();
  }));
});
